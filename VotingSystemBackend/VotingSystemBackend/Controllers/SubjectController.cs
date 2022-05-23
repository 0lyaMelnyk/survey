using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
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
        public string GetSubjectsByFacultyId(int id)
        {
            return JsonConvert.SerializeObject(subjectRepository.GetSubjectsByFaculty(id));
        }
    }
}