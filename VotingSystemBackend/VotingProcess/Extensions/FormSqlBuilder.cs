namespace VotingProcess.Extensions
{
    public class FormSqlBuilder : BasicSqlBuilder
    {
        public string SelectTeacherByTeacherID(int teacherID)
        {
            return $"SELECT * FROM Teacher WHERE TeacherId = {teacherID}";
        }

        public string SelectQuestionsByFormMode(int formMode)
        {
            return $"SELECT * FROM Question WHERE FormMode = {formMode}";
        }

        public override string SelectModelsByEntityID(int entityID)
        {
            throw new NotImplementedException();
        }
    }
}