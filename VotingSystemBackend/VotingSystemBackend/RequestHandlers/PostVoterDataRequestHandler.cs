using System.Threading.Tasks;
using VotingSystemBackend.Models;

namespace VotingSystemBackend.RequestHandlers
{
    public class PostVoterDataRequestHandler: IRequestHandlerMarker
    {
        public async Task<InitialDataDto> Handle()
        {
            return new InitialDataDto();
        }
    }
}
