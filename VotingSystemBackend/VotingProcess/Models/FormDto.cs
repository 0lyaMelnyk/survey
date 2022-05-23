namespace VotingProcess.Models
{
    public class FormDto
    {
        public int FormId { get; set; }
        public string Title { get; set; }
        public string Type { get; set; }
        public int TeacherId { get; set; }
        public int SubjectId { get; set; }
        public List<QuestionDto> Questions { get; set; }
    }
}