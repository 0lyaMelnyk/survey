using Dapper;
using System.Data.SqlClient;
using VotingProcess.Extensions;
using VotingProcess.Models;
using VotingSystemBackend.Models;

namespace VotingSystemBackend.Repositories
{
    internal class VotesRepository<TEntity, TModel> : BaseRepository<TEntity, TModel> where TEntity : VoteDto where TModel : Vote
    {
        internal VotesRepository()
        {
            sqlBuilder = new VoteSqlBuilder();
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