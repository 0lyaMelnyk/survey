using AutoMapper;
using Dapper;
using System.Collections.Generic;
using System.Data.SqlClient;
using VotingProcess.Extensions;
using VotingProcess.Models;
using VotingSystemBackend.Models;

namespace VotingSystemBackend.Repositories
{
    internal abstract class BaseRepository<TEntity, TModel>
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
                configuration.CreateMap<SubjectDto, Subject>();
            });
        }

        public virtual List<TModel> GetModelsByEntityID(BasicSqlBuilder sqlBuilder, int entityID)
        {
            IEnumerable<TEntity> entities;
            var models = new List<TModel>();
            using (var connection = new SqlConnection(connectionString))
            {
                entities = connection.Query<TEntity>(sqlBuilder.SelectModelsByEntityID(entityID));
            }
            (entities as List<TEntity>).ForEach(dto => models.Add(GetMapper.Map<TModel>(dto)));
            return models;
        }
    }
}