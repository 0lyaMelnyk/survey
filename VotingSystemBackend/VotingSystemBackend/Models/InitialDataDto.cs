using System.Collections.Generic;
using VotingProcess.Models;

namespace VotingSystemBackend.Models
{
    public class InitialDataDto
    {
        public int Id { get; set; } = 1;
        public string ProgramName { get; set; } = "Системне адміністрування";
        public string LevelName { get; set; } = "Бакалавр";
        public List<SubjectDto> SubjectDtos { get; set; } = new List<SubjectDto>()
        {
            new SubjectDto(){ Faculty="ФРЕКС", Semester=8, SubjectName="САП", SubjectId = 1},
            new SubjectDto(){ Faculty="ФРЕКС", Semester=8, SubjectName="Мікропроцесорна техніка", SubjectId=2}
        };
        public List<TeacherDto> TeacherDtos { get; set; } = new List<TeacherDto>()
        {
            new TeacherDto(){ TeacherId=1, TeacherName="Коба Бла Бла"},
            new TeacherDto(){TeacherId=2,TeacherName="Загороднюк Сергій Петрович"}
        };
    }
}
