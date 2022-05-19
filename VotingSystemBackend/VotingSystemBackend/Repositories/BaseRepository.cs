using AutoMapper;
using VotingProcess.Models;
using VotingSystemBackend.Models;

namespace VotingSystemBackend.Repositories
{
    internal abstract class BaseRepository
    {
        private MapperConfiguration mapperConfiguration;
        protected string connectionString = @"Data Source=5CD9056Z9W\SQLEXPRESS;Initial Catalog=VotingSystemDB;Trusted_Connection=True";

        protected BaseRepository()
        {
            CreateMapperConfiguration();
        }

        protected virtual IMapper GetMapper
        {
            get
            {
                return mapperConfiguration.CreateMapper();
            }
        }

        private void CreateMapperConfiguration()
        {
            mapperConfiguration = new MapperConfiguration(configuration =>
            {
                configuration.CreateMap<Vote, VoteDto>();
                configuration.CreateMap<VoteDto, Vote>();
            });
        }
    }
}