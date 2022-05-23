using Dapper;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
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

        public List<Form> GetFormsByTeacherID(Tuple<int, int> parameters)
        {
            List<QuestionDto> questions;
            var q = new List<Question>();
            var t = new TeacherDto();
            var teacherSqlScript = (sqlBuilder as FormSqlBuilder).SelectTeacherByTeacherID(parameters.Item1);
            var questionsSqlScript = (sqlBuilder as FormSqlBuilder).SelectQuestionsByFormMode(parameters.Item2);
            using (var connection = new SqlConnection(connectionString))
            {
                questions = connection.Query<QuestionDto>(questionsSqlScript).AsList();
                t = connection.QueryFirstOrDefault<TeacherDto>(teacherSqlScript);
            }
            var forms = new List<Form>();
            questions.ForEach(dto => q.Add(GetMapper.Map<Question>(dto)));
            forms.Add(new Form
            {
                FormId = 3,
                Title = t.TeacherName,
                Type = questions.FirstOrDefault().FormMode,
                TeacherId = t.TeacherId,
                SubjectId = 0,
                Questions = q
            });
            return forms;
        }
    }
}