using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using VotingProcess.Models;
using VotingSystemBackend.Models;
using VotingSystemBackend.Repositories;

namespace VotingSystemBackend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TeacherController : ControllerBase
    {
        private readonly TeacherRepository<TeacherDto, Teacher> teacherRepository = new TeacherRepository<TeacherDto, Teacher>();

        // GET api/<TeacherController>/5
        [HttpGet("{id}")]
        public string GetTeacherByFacultyId(int id)
        {
            return JsonConvert.SerializeObject(teacherRepository.GetTeachersByFaculty(id));
        }
    }
}