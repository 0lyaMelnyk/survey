using System.Collections.Generic;
using VotingProcess.Extensions;
using VotingProcess.Models;
using VotingSystemBackend.Models;

namespace VotingSystemBackend.Repositories
{
    internal class TeacherRepository<TEntity, TModel> : BaseRepository<TEntity, TModel> where TEntity : TeacherDto where TModel : Teacher
    {
        private readonly TeacherSqlBuilder teacherSqlBuilder = new TeacherSqlBuilder();

        public List<TModel> GetTeachersByFaculty(int facultyID)
        {
            return base.GetModelsByEntityID(teacherSqlBuilder, facultyID);
        }
    }
}