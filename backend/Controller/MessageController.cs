using Microsoft.AspNetCore.Mvc;
using backend.Model;
using Microsoft.EntityFrameworkCore;

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

        // Status Code - 201: Resource created
        return CreatedAtAction(nameof(SendMessage), new { Message = "Message sent successfully! I will get back to you shortly :)", SentMessage = message });
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
}