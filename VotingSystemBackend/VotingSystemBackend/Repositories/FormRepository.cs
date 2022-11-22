using Dapper;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using VotingProcess.Extensions;
using VotingProcess.Models;
using VotingSystemBackend.Models;

namespace VotingSystemBackend.Repositories
{
    internal class FormRepository<TEntity, TModel> : BaseRepository<TEntity, TModel> where TEntity : FormDto where TModel : Form
    {
        internal FormRepository()
        {
            sqlBuilder = new FormSqlBuilder();
        }

        public async Task<List<Form>> GetFormsByTeacherID(Tuple<int, int> parameters)
        {
            IEnumerable<QuestionDto> questions;
            var q = new List<Question>();
            var t = new TeacherDto();
            var teacherSqlScript = (sqlBuilder as FormSqlBuilder).SelectTeacherByTeacherID(parameters.Item1);
            var questionsSqlScript = (sqlBuilder as FormSqlBuilder).SelectQuestionsByFormMode(parameters.Item2);
            using (var connection = new SqlConnection(connectionString))
            {
                questions = await connection.QueryAsync<QuestionDto>(questionsSqlScript);
                t = await connection.QueryFirstOrDefaultAsync<TeacherDto>(teacherSqlScript);
            }
            var forms = new List<Form>();
            questions.ToList().ForEach(dto => q.Add(GetMapper.Map<Question>(dto)));
            forms.Add(new Form
            {
                FormId = 3,
                Title = t.TeacherName,
                Type = questions.FirstOrDefault().FormMode,
                TeacherId = t.TeacherId,
                SubjectId = 0,
                Questions = questions.ToList()
            });
            return forms;
        }
    }
}