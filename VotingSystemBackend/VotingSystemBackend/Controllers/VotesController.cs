using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System;
using VotingSystemBackend.Models;
using VotingSystemBackend.Repositories;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace VotingSystemBackend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class VotesController : ControllerBase
    {
        private readonly VotesRepository votesRepository = new VotesRepository();

        [HttpGet]
        public string GetVotesByTeacher(int teacherID)
        {
            return JsonConvert.SerializeObject(votesRepository.GetVotesByTeacher(teacherID));
        }

        // POST api/<VotesController>
        [HttpPost]
        public void PostNewVote([FromBody] string value)
        {
            votesRepository.SaveVote(new Vote
            {
                VoteId = 1,
                VoterId = 1,
                FacultyTeacherId = 1,
                SubjectTeacherId = 1,
                QuestionMarkId = 1,
                VoteDate = new DateTime(2022, 12, 1)
            });
        }
    }
}