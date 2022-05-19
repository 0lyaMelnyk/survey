using Dapper;
using System.Collections.Generic;
using System.Data.SqlClient;
using VotingProcess.Extensions;
using VotingProcess.Models;
using VotingSystemBackend.Models;

namespace VotingSystemBackend.Repositories
{
    internal class VotesRepository : BaseRepository
    {
        public List<Vote> GetVotesByTeacher(int teacherID)
        {
            IEnumerable<VoteDto> votesByTeacherID;
            var votesByTeacher = new List<Vote>();
            using (var connection = new SqlConnection(connectionString))
            {
                votesByTeacherID = connection.Query<VoteDto>(new VoteSqlBuilder().SelectVotesByTeacherID(teacherID));
            }
            (votesByTeacherID as List<VoteDto>).ForEach(voteDto => votesByTeacher.Add(GetMapper.Map<Vote>(voteDto)));
            return votesByTeacher;
        }

        public void SaveVote(Vote vote)
        {
            using (var connection = new SqlConnection(connectionString))
            {
                connection.Execute(new VoteSqlBuilder().InsertVote(GetMapper.Map<VoteDto>(vote)));
            }
        }
    }
}