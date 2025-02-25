using Microsoft.AspNetCore.Mvc;
using backend.Model;

[Route("api/[controller]")]
[ApiController]
public class MessageController : ControllerBase
{
    [HttpGet]
    public ActionResult<IEnumerable<Message>> GetMessages()
    {
        // TODO: Retrieve all messages from backend database
        List<Message> messages = new List<Message>(); // UPDATE THIS TO USE DATABASE

        // Status Code - 200: Success, returns all messages
        return Ok(messages);
    }


    // POST: Receives a message from the sender and stores it in the database
    [HttpPost]
    public ActionResult SendMessage([FromBody] Message message)
    {
        // Verify message before executing operations
        if (!ModelState.IsValid) return BadRequest(ModelState);

        Console.WriteLine($"Email Address: {message.Email}");
        Console.WriteLine($"Received at: {message.DateReceived}");
        Console.WriteLine($"Message: {message.Content}");

        // Store the message in the database

        // Send an aknowledgement email to the sender's email address

        // Status Code - 201: Resource created
        return CreatedAtAction(nameof(SendMessage), new { Message = "Message sent successfully! I will get back to you shortly :)", SentMessage = message });
    }

    [HttpDelete("{id}")]
    public ActionResult DeleteMessage(int id)
    {
        // TODO: Delete message from backend database

        // Status Code - 204: Success but no content
        return NoContent();
    }
}