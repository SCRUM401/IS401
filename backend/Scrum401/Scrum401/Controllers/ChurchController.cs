using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using Scrum401.Data;
using System.Collections.Generic;
using System.Linq;

namespace Scrum401.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ChurchController : ControllerBase
    {
        private readonly YSAContext _YSAContext;

        public ChurchController(YSAContext context)
        {
            _YSAContext = context;
        }

        [HttpGet("Events")]
        public ActionResult<IEnumerable<Event>> GetProjects()
        {
            var events = _YSAContext.Events.ToList();
            return Ok(events);
        }
        
        [HttpPost("Events")]
        public IActionResult CreateEvent([FromBody] Event newEvent)
        {


            newEvent.Month = newEvent.BeginTime.Month;
            newEvent.Day = newEvent.BeginTime.Day;
            newEvent.Year = newEvent.BeginTime.Year;

            // Add required default values to prevent crashes:
            newEvent.EndTime = newEvent.BeginTime.AddHours(1); // Optional
            newEvent.RequestorID = 1; // Required to avoid FK constraint crash
            newEvent.EventStatus = EventStatusEnum.Pending; // Optional default
            newEvent.City = "";
            newEvent.State = "";
            newEvent.Zip = "";

            _YSAContext.Events.Add(newEvent);
            _YSAContext.SaveChanges();

            return Ok(newEvent);
        }
    }
    
    
}
