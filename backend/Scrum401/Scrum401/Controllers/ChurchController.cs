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
    }
}
