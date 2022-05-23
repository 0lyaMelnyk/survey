using System.Collections.Generic;
using VotingProcess.Extensions;
using VotingProcess.Models;
using VotingSystemBackend.Models;

namespace VotingSystemBackend.Repositories
{
    internal class SubjectRepository<TEntity, TModel> : BaseRepository<TEntity, TModel> where TEntity : SubjectDto where TModel : Subject
    {
        private readonly SubjectSqlBuilder subjectSqlBuilder = new SubjectSqlBuilder();

        public List<TModel> GetSubjectsByFaculty(int facultyID)
        {
            return base.GetModelsByEntityID(subjectSqlBuilder, facultyID);
        }
    }
}