namespace VotingProcess.Extensions
{
    public class SubjectSqlBuilder : BasicSqlBuilder
    {
        public override string SelectModelsByEntityID(int entityID)
        {
            return $"SELECT * FROM [Subject] WHERE Faculty IN (SELECT DISTINCT FacultyName FROM Faculty WHERE FacultyId = {entityID})";
        }
    }
}