using System.Collections.Generic;
using VotingProcess.Models;

namespace VotingSystemBackend.Models
{
    public class FormDto
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Type { get; set; }
        public int TeacherId { get; set; }
        public int SubjectId { get; set; }
        public List<Question> Questions { get; set; }
    }
}
