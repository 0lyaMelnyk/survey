using System.Threading.Tasks;
using VotingSystemBackend.Models;
using VotingSystemBackend.Requests;

namespace VotingSystemBackend.RequestHandlers
{
    public class PostVoterDataRequestHandler: IRequestHandlerMarker
    {
        public async Task<InitialDataDto> Handle(PostVoterDataRequest request)
        {
            //DataBaseReader
            //var faculty = request.Faculty;
            //var teacherList = 
            return new InitialDataDto();
        }

        public string GetTeacherQuery = "select t.TeacherId, t.TeacherName " +
            "from FacultyTeacher ft " +
            "join Teacher t on ft.TeacherId=t.TeacherId" +
            "where ft.FacultyId = @id";
    }
}
