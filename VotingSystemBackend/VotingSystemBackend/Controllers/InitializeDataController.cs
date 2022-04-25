using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using VotingSystemBackend.Models;
using VotingSystemBackend.RequestHandlers;
using VotingSystemBackend.Requests;

namespace VotingSystemBackend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class InitializeDataController : ControllerBase
    {
        [HttpPost("post")]
       // [Authorize]
        public async Task<IActionResult> PostVoterData([FromQuery] PostVoterDataRequest request,[FromServices] PostVoterDataRequestHandler requestHandler)
        {
            var response = await requestHandler.Handle(request);
            return Ok(response);
        }
        [HttpGet]
        public async Task<IActionResult> GetData()
        {
            return Ok(new InitialDataDto());
        }
    }
}
