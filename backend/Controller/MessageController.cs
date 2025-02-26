using Microsoft.AspNetCore.Mvc;
using backend.Model;
using Microsoft.EntityFrameworkCore;
using MailKit.Net.Smtp;
using MimeKit;

[Route("api/[controller]")]
[ApiController]
public class MessageController : ControllerBase
{
    private readonly AppDbContext mContext;

    public MessageController(AppDbContext context)
    {
        mContext = context;
    }


    // Returns all the messages from the backend database
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Message>>> GetMessages()
    {
        // Retrieve all messages from backend database
        return await mContext.Messages.ToListAsync();
    }


    // Receives a message from the sender and stores it in the database
    [HttpPost]
    public async Task<ActionResult> SendMessage([FromBody] Message message)
    {
        // Verify message before executing operations
        if (!ModelState.IsValid) return BadRequest(ModelState);

        // Store the message in the database
        mContext.Messages.Add(message);
        await mContext.SaveChangesAsync();

        // Send an aknowledgement email to the sender's email address
        SendEmail(message.Email, "Thank you for reaching out!", "Hi there,\n\nThank you so much for reaching out! I appreciate your message and will get back to you as soon as possible.\n\nYour inquiry is important to me, and I'll make sure to respond as quickly as I can.\n\nBest regards,\nJulian Tan");

        // Status Code - 201: Resource created
        return CreatedAtAction(nameof(SendMessage), new { response = "Message sent successfully! I will get back to you shortly :)", sentMessage = message });
    }

    // Deletes a message from the backend database
    [HttpDelete("{id}")]
    public async Task<ActionResult> DeleteMessage(int id)
    {
        // Find the message to be deleted
        var message = await mContext.Messages.FindAsync(id);
        if (message == null) return NotFound();

        // Delete the message and save changes
        mContext.Messages.Remove(message);
        await mContext.SaveChangesAsync();

        // Status Code - 204: Success but no content
        return NoContent();
    }

    // Deletes all messages from the backend database
    [HttpDelete]
    public async Task<ActionResult> DeleteAllMessages()
    {
        // Delete all messages and save changes
        mContext.Messages.RemoveRange(mContext.Messages);
        await mContext.SaveChangesAsync();

        // Status Code - 204: Success but no content
        return NoContent();
    }

    //--- Helper Functions
    private void SendEmail(string recipientEmail, string title, string content)
    {
        var emailMessage = new MimeMessage();

        // Configure sender, receiver, and subject
        emailMessage.From.Add(new MailboxAddress("Julian Tan", "juliantwx.dev@gmail.com"));
        emailMessage.To.Add(new MailboxAddress("User", recipientEmail));
        emailMessage.Subject = title;

        // Craft email's body
        var bodyBuilder = new BodyBuilder
        {
            TextBody = content
        };
        emailMessage.Body = bodyBuilder.ToMessageBody();

        // Connect to SMTP server and send the email
        using (var client = new SmtpClient())
        {
            // Connect to gmail's SMTP server
            client.Connect("smtp.gmail.com", 587);
            client.Authenticate("juliantwx.dev@gmail.com", "ejkwhzetojoaljps");

            client.Send(emailMessage);
            client.Disconnect(true);
        }
    }
}