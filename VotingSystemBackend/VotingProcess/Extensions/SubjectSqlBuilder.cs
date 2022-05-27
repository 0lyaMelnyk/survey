namespace VotingProcess.Extensions
{
    public class SubjectSqlBuilder : BasicSqlBuilder
    {
        public override string SelectModelsByEntityID(int entityID)
        {
            return $"SELECT * FROM [Subject] WHERE FacultyId = {entityID}";
        }
    }
}