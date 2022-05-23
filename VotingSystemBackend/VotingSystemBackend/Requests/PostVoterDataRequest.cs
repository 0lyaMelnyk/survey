using System.Collections.Generic;
using VotingProcess.Models;

namespace VotingSystemBackend.Requests
{
    public class PostVoterDataRequest
    {
        public int RandomId { get; set; }
        public int Course { get; set; }
        public int Semestr { get; set; }
        public string ProgramName { get; set; }
        public string LevelName { get; set; }
        public string Faculty { get; set; }
        public List<SubjectDto> SubjectList { get; set; }
    }
}
