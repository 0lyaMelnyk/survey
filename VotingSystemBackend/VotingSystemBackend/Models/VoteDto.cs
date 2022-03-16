using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace VotingProcess.Models
{
    internal class VoteDto
    {
        public int VoteId { get; set; } = 1;
        public int VoterRandomId { get; set; } = 1;
        public int FacultyId { get; set; } = 1;
        public string FacultyName { get; set; } = "ФРЕКС";
        public int TeacherId { get; set; } = 1;
        public string TeacherName { get; set; } = "Загороднюк Сергій Петрович";
        public int MarkId { get; set; } = 1;
        public int QuestionId { get; set; } = 1;
        public int LevelId { get; set; } = 1;
        public int Semester { get; set; } = 1;
        public int Course { get; set; } = 1;
        public DateTime VoteDate { get; set; }=new DateTime(2022,1,2);  
    }
}
