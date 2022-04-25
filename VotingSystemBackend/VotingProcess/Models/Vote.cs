using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace VotingProcess.Models
{
    internal class Vote
    {
        public int VoteId { get; set; } 
        public int VoterRandomId { get; set; }
        public int FacultyId { get; set; }
        public int TeacherId { get; set; }
        public int MarkId { get; set; }
        public int QuestionId { get; set; }
        public int LevelId { get; set; }
        public int Semester { get; set; }
        public int Course { get; set; }
        public DateTime VoteDate { get; set; }  
    }
}
