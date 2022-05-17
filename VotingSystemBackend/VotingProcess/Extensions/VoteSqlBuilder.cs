using VotingProcess.Models;

namespace VotingProcess.Extensions
{
    public class VoteSqlBuilder
    {
        public string InsertVote(VoteDto vote)
        {
			return @$"INSERT INTO Vote(VoteId, VoterId, FacultyTeacherId, SubjectTeacherId, QuestionMarkId, VoteDate)
						    VALUES({vote.VoteId}, {vote.VoterId}, {vote.FacultyTeacherId}, {vote.SubjectTeacherId}, {vote.QuestionMarkId}, '05-05-2022')";

		}
    }
}