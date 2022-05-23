namespace VotingProcess.Extensions
{
    public abstract class BasicSqlBuilder
    {
        public abstract string SelectModelsByEntityID(int entityID);
    }
}