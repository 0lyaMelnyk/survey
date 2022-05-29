using Microsoft.AspNetCore.Mvc;
using System;
using System.Threading.Tasks;
using VotingProcess.Models;
using VotingSystemBackend.Models;
using VotingSystemBackend.Repositories;

namespace VotingSystemBackend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FormController : ControllerBase
    {
        private readonly FormRepository<FormDto, Form> formRepository = new FormRepository<FormDto, Form>();

        [HttpGet("{id}")]
        public async Task<IActionResult> GetFormByTeacherId(int id, int formType)
        {
            try
            {
               return new JsonResult(await formRepository.GetFormsByTeacherID(new Tuple<int, int>(id, formType)));
            }
            catch(Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
