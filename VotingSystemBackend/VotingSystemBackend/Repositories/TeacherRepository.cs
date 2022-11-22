using VotingProcess.Extensions;
using VotingProcess.Models;
using VotingSystemBackend.Models;

namespace VotingSystemBackend.Repositories
{
    internal class TeacherRepository<TEntity, TModel> : BaseRepository<TEntity, TModel> where TEntity : TeacherDto where TModel : Teacher
    {
        internal TeacherRepository()
        {
            sqlBuilder = new TeacherSqlBuilder();
        }
    }
}