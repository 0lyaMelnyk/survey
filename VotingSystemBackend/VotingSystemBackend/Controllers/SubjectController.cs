using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace VotingSystemBackend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SubjectController : ControllerBase
    {
        // GET api/<SubjectController>/5
        [HttpGet("{id}")]
        public string GetSubjectsByFacultyId(int facultyId)
        {
            return "[{ subjectId: 1, subjectName: \"Функціональне програмування\" }," +
                "{ subjectId: 2, subjectName: \"Цифрова обробка сигналів\" }," +
                "{ subjectId: 3, subjectName: \"Системи автоматизації підприємств\" }," +
                "{ subjectId: 4, subjectName: \"Периферійні пристрої\" },]";
        }
    }
}
