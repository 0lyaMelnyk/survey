using System.Collections.Generic;

namespace VotingSystemBackend.Models
{
    public class SaveForm
    {
        public int FormId { get; set; }
        public string Title { get; set; }
        public int Type { get; set; }
        public int TeacherId { get; set; }
        public int SubjectId { get; set; }
        public List<QuestionAnswer> Answers { get; set; }
    }
}