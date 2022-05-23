namespace VotingProcess.Extensions
{
    public class TeacherSqlBuilder : BasicSqlBuilder
    {
        public override string SelectModelsByEntityID(int entityID)
        {
            return @$"SELECT * FROM Teacher teacher
                      LEFT JOIN FacultyTeacher facultyTeacher ON teacher.FacultyTeacherId = facultyTeacher.FacultyTeacherId
                      LEFT JOIN Faculty faculty ON facultyTeacher.FacultyId = faculty.FacultyId WHERE faculty.FacultyId = {entityID}";
        }
    }
}