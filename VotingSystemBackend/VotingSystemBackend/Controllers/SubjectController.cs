using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System;
using System.Threading.Tasks;
using VotingProcess.Models;
using VotingSystemBackend.Models;
using VotingSystemBackend.Repositories;

namespace VotingSystemBackend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SubjectController : ControllerBase
    {
        private readonly SubjectRepository<SubjectDto, Subject> subjectRepository = new SubjectRepository<SubjectDto, Subject>();

        // GET api/<SubjectController>/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetSubjectsByFacultyId(int id)
        {
            try
            {
                var result = await subjectRepository.GetModelsByEntityID(id);

                if (result.Count == 0)
                {
                    return NotFound();
                }

                return new JsonResult(result);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}