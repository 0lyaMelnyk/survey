using VotingProcess.Extensions;
using VotingProcess.Models;
using VotingSystemBackend.Models;

namespace VotingSystemBackend.Repositories
{
    internal class SubjectRepository<TEntity, TModel> : BaseRepository<TEntity, TModel> where TEntity : SubjectDto where TModel : Subject
    {
        internal SubjectRepository()
        {
            sqlBuilder = new SubjectSqlBuilder();
        }
    }
}