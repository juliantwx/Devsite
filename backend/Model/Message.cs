using System.ComponentModel.DataAnnotations;

namespace backend.Model
{
    public class Message
    {
        [Required][EmailAddress] public string? Email{get; set;} 
        [Required][MaxLength(500)] public string? Content{get; set;}
        public DateTime DateReceived {get; set;}
    }
}