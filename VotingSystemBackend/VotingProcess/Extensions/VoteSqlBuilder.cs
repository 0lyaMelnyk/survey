using VotingProcess.Models;

namespace VotingProcess.Extensions
{
    public class VoteSqlBuilder
    {
        public string SelectVotesByTeacherID(int teacherID)
        {
            return @$"SELECT * FROM Vote vote 
                      INNER JOIN FacultyTeacher facultyTeacher ON vote.FacultyTeacherID = facultyTeacher.FacultyTeacherID
                      INNER JOIN Teacher teacher ON facultyTeacher.TeacherID = teacher.TeacherID WHERE teacher.TeacherID = {teacherID}";

        }

        public string InsertVote(VoteDto vote)
        {
			return @$"INSERT INTO Vote(VoteId, VoterId, FacultyTeacherId, SubjectTeacherId, QuestionMarkId, VoteDate)
						    VALUES({vote.VoteId}, {vote.VoterId}, {vote.FacultyTeacherId}, {vote.SubjectTeacherId}, {vote.QuestionMarkId}, '05-05-2022')";

		}
    }
}