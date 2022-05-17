using System;

namespace VotingSystemBackend.Models
{
    public class Vote
    {
        public int VoteId { get; set; } 
        public int VoterId { get; set; }
        public int FacultyTeacherId { get; set; }
        public int SubjectTeacherId { get; set; }
        public int QuestionMarkId { get; set; }
        public DateTime VoteDate { get; set; }  
    }
}