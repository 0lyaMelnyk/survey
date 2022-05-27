namespace VotingProcess.Models
{
    public class VoteDto
    {
        public int VoteId { get; set; }
        public int VoterId { get; set; }
        public int FacultyId { get; set; }
        public int SubjectId { get; set; }
        public int QuestionId { get; set; }
        public int TeacherId { get; init; }
        public int AnswerId { get; set; }
        public DateTimeOffset VoteDate { get; set; }
    }
}