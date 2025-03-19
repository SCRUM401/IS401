using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Collections.Generic;
namespace Scrum401.Data;

public class RSVP
{
    [Key]
    public int RSVPID { get; set; }

    [ForeignKey("Event")]
    public int EventID { get; set; }
    public Event Event { get; set; } // Navigation Property

    [ForeignKey("User")]
    public int UserID { get; set; }
    public User User { get; set; } // Navigation Property

    public RSVPStatusEnum RSVPStatus { get; set; }
}

// Enum for RSVP Status
public enum RSVPStatusEnum
{
    Yes,
    No,
    Maybe
}