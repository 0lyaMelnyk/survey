namespace VotingProcess.Extensions
{
    public class TeacherSqlBuilder : BasicSqlBuilder
    {
        public override string SelectModelsByEntityID(int entityID)
        {
            return @$"SELECT * FROM Teacher teacher";
        }
    }
}