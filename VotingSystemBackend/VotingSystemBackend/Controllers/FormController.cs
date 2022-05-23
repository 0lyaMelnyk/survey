using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
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

        // GET api/Form/5
        [HttpGet("{id}")]
        public string GetSubjectsByFacultyId(int id)
        {
            return JsonConvert.SerializeObject(formRepository.GetModelsByEntityID(id));
        }

        public string GetFormByTeacherId(int id)
        {
            return JsonConvert.SerializeObject(formRepository.GetFormsByTeacherID(new System.Tuple<int, int>(id, 2)));


            //return "{formId: 3," +
            //    "title: \"Форма оцінювання Слюсар (викладач)"
            //    "type: 3," +
            //    "teacherId: 0," +
            //    " subjectId: 1," +
            //    " questions: questionItemsSubject," +
            //    " answers:[] }";
        }
    }
}
