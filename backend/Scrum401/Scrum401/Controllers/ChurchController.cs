using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using YSAProject.API.Data; // Ensure the correct namespace for YsaContext
using System.Collections.Generic;
using System.Linq;

namespace YSAProject.API.Controllers
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

        [HttpGet("AllProjects")]
        public ActionResult<IEnumerable<Project>> GetProjects()
        {
            var projects = _YSAContext.Projects.ToList(); // Assuming Projects is the correct entity
            return Ok(projects);
        }

        [HttpGet("FunctionalProjects")]
        public ActionResult<IEnumerable<Project>> GetFunctionalProjects()
        { 
            var functionalProjects = _YSAContext.Projects
                .Where(p => p.Classification == "Functional")
                .ToList();

            return Ok(functionalProjects);
        }
    }
}
