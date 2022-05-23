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
			return @$"INSERT INTO Vote(VoteId, VoterId, FacultyTeacherId, SubjectTeacherId, QuestionMarkId, VoteDate)
						    VALUES({vote.VoteId}, {vote.VoterId}, {vote.FacultyTeacherId}, {vote.SubjectTeacherId}, {vote.QuestionMarkId}, '05-05-2022')";

		}
    }
}