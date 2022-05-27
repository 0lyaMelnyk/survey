using VotingProcess.Models;

namespace VotingProcess.Extensions
{
    public class VoteSqlBuilder : BasicSqlBuilder
    {
        public override string SelectModelsByEntityID(int entityID)
        {
            return @$"SELECT * FROM Vote vote 
                      LEFT JOIN FacultyTeacher facultyTeacher ON vote.FacultyTeacherID = facultyTeacher.FacultyTeacherID
                      LEFT JOIN Teacher teacher ON facultyTeacher.TeacherID = teacher.TeacherID WHERE teacher.TeacherID = {entityID}";

        }

        public string InsertVote(VoteDto vote)
        {
			var r  = @$"INSERT INTO Vote(VoterId,FacultyId,SubjectId,TeacherId,QuestionId,AnswerId,VoteDate)
						    VALUES({vote.VoterId}, {vote.FacultyId}, {vote.SubjectId}, {vote.TeacherId},{vote.QuestionId}, {vote.AnswerId},'{vote.VoteDate.ToString("yyyy-MM-dd")}')";

            return r;

		}
    }
}