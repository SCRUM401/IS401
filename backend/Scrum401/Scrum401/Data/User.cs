using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Collections.Generic;
namespace Scrum401.Data;

public class User
{
    [Key]
    public int UserID { get; set; }

    [Required]
    public string FirstName { get; set; }
    
    [Required]
    public string LastName { get; set; }

    public DateTime Birthday { get; set; }

    [Required]
    public string Username { get; set; }

    [Required]
    public string Password { get; set; }

    public UserRoleEnum Role { get; set; }

    public ICollection<Event> RequestedEvents { get; set; } // One-to-Many Relationship
    public ICollection<RSVP> RSVPs { get; set; } // One-to-Many Relationship
}

// Enum for User Role
public enum UserRoleEnum
{
    Basic,
    Admin
}