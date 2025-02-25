using System.ComponentModel.DataAnnotations;

namespace backend.Model
{
    public class Message
    {
        public int Id { get; set; }
        [Required][EmailAddress][MaxLength(100)] public string? Email { get; set; }
        [Required][MaxLength(500)] public string? Content { get; set; }
        public DateTime DateReceived { get; set; }

        public Message()
        {
            DateReceived = DateTime.Now;
        }
    }
}