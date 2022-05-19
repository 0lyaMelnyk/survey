using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace VotingSystemBackend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FormController : ControllerBase
    {
        // GET api/Form/5
        [HttpGet("{id}")]
        public string GetFormByTeacherId(int id)
        {
            return "{formId: 3," +
                "title: \"Форма оцінювання Комп'ютерних систем\"," +
                "type: 3," +
                "teacherId: 0," +
                " subjectId: 1," +
                " questions: questionItemsSubject," +
                " answers:[] }";
        }
    }
}
