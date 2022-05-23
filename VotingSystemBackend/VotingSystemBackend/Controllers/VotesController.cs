using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using VotingProcess.Models;
using VotingSystemBackend.Models;
using VotingSystemBackend.Repositories;

namespace VotingSystemBackend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class VotesController : ControllerBase
    {
        private readonly VotesRepository<VoteDto, Vote> votesRepository = new VotesRepository<VoteDto, Vote>();

        [HttpGet]
        public string GetVotesByTeacher(int id)
        {
            return JsonConvert.SerializeObject(votesRepository.GetModelsByEntityID(id));
        }

        // POST api/<VotesController>
        [HttpPost]
        public void PostNewVote([FromBody] List<FormDto> value)
        {
            foreach (var form in value)
            {
                foreach (var quest in form.Questions)
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
    }
}