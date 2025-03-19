using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Collections.Generic;
namespace Scrum401.Data;

public class EventType
{
    [Key]
    public int TypeID { get; set; }

    [Required]
    public string EventTypeName { get; set; }

    public ICollection<Event> Events { get; set; } // One-to-Many Relationship
}
