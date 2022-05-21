using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace VotingSystemBackend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TeacherController : ControllerBase
    {
        // GET api/<TeacherController>/5
        [HttpGet("{id}")]
        public string GetTeacherByFacultyId(int facultyId)
        {
            return "[{ teacherId: 1, teacherName: \"Загороднюк С.П.\" }," +
                "{ teacherId: 2, teacherName: \"Слюсар Є.А.\" }," +
                "{ teacherId: 3, teacherName: \"Самощенко О.В\" }," +
                "{ teacherId: 4, teacherName: \"Баужа О.С\" },]";
        }
    }
}
