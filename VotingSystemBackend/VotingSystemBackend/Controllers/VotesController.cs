using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace VotingSystemBackend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class VotesController : ControllerBase
    {
        // GET: api/<VotesController>
        [HttpGet]
        public IEnumerable<string> GetAllVotesBy(object filter)
        {
            return new string[] { "value1", "value2" };
        }

        // POST api/<VotesController>
        [HttpPost]
        public void PostNewVote([FromBody] string value)
        {

        }
    }
}
