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
        public void PostNewVote([FromBody] List<SaveForm> value)
        {
            foreach (var form in value)
            {
                var vote = new Vote();
                vote.SubjectId = form.SubjectId;
                vote.VoteDate = DateTime.Now;
                vote.TeacherId = form.TeacherId;
                vote.FacultyId = 1;
                vote.VoterId = 1;
                foreach (var quest in form.Answers)
                {
                    vote.AnswerId = quest.AnswerId;
                    vote.QuestionId = quest.QuestionId;
                    votesRepository.SaveVote(vote);
                }
            }
        }
    }
}