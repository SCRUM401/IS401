using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Collections.Generic;

namespace Scrum401.Data;
public class Event
{
    [Key]
    public int EventID { get; set; }

    [Required]
    [StringLength(255)]
    public string EventName { get; set; }

    public string Description { get; set; }

    [ForeignKey("EventType")]
    public int TypeID { get; set; }
    public EventType EventType { get; set; }  // Navigation Property

    public int Month { get; set; }
    public int Day { get; set; }
    public int Year { get; set; }

    public DateTime BeginTime { get; set; }
    public DateTime EndTime { get; set; }

    public string Address { get; set; }
    public string City { get; set; }
    public string State { get; set; }
    public string Zip { get; set; }

    [ForeignKey("Requestor")]
    public int RequestorID { get; set; }
    public User Requestor { get; set; } // Navigation Property

    public bool RequestorHelp { get; set; }

    public EventStatusEnum EventStatus { get; set; }

    public ICollection<RSVP> RSVPs { get; set; } // One-to-Many Relationship
}

// Enum for EventStatus
public enum EventStatusEnum
{
    Approved,
    Declined,
    Pending,
    Scheduled
}