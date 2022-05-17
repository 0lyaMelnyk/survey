namespace VotingProcess.Models
{
    public class VoteDto
    {
        public int VoteId { get; set; } = 1;
        public int VoterId { get; set; } = 1;
        public int FacultyTeacherId { get; set; } = 1;
        public int SubjectTeacherId { get; set; } = 1;
        public int QuestionMarkId { get; set; } = 1;
        public DateTime VoteDate { get; set; } = new DateTime(2022, 1, 2);  
    }
}