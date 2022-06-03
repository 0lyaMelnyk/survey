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
    public class TeacherController : ControllerBase
    {
        private readonly TeacherRepository<TeacherDto, Teacher> teacherRepository = new TeacherRepository<TeacherDto, Teacher>();

        // GET api/<TeacherController>/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetTeacherByFacultyId(int id)
        {
            try
            {
                var result = await teacherRepository.GetModelsByEntityID(id);

                return new JsonResult(result);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}