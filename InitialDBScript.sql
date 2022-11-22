--CREATE DATABASE VotingSystemDB;
drop database VotingSystemDB 
--use VotingSystemDB;
CREATE TABLE Teacher(
TeacherId int IDENTITY(1,1) PRIMARY KEY,
TeacherName NVARCHAR(max)
);  

CREATE TABLE Faculty(
FacultyId int IDENTITY(1,1) PRIMARY KEY,
FacultyName NVARCHAR(max)
);

CREATE TABLE Subject(
SubjectId int IDENTITY(1,1) PRIMARY KEY,
SubjectName NVARCHAR(max),
Semester int,
FacultyId int,
FOREIGN KEY (FacultyId) REFERENCES Faculty (FacultyId)
);

CREATE TABLE Answer(
AnswerId int IDENTITY(1,1) PRIMARY KEY,
AnswerDescription NVARCHAR(max)
);

CREATE TABLE GraduateLevel(
LevelId int IDENTITY(1,1) PRIMARY KEY,
LevelName NVARCHAR(max)
);

CREATE TABLE Question(
QuestionId int IDENTITY(1,1) PRIMARY KEY,
QuestionDescription NVARCHAR(max),
FormMode int
);

CREATE TABLE EducationalProgram(
EducationalProgramId int IDENTITY(1,1) PRIMARY KEY,
EducationalProgramName NVARCHAR(max)
);

CREATE TABLE Voter(
VoterId int NOT NULL IDENTITY(1,1) PRIMARY KEY,
LevelId int, 
Semester int,
Course int,
EducationalProgramId int, 
FOREIGN KEY (LevelId) REFERENCES GraduateLevel(LevelId),
FOREIGN KEY (EducationalProgramId) REFERENCES EducationalProgram(EducationalProgramId)
);

CREATE TABLE Vote(
VoteId int NOT NULL IDENTITY(1,1) PRIMARY KEY,
VoterId int NOT NULL,
FacultyId int NOT NULL,
SubjectId int NOT NULL,
TeacherId int NOT NULL,
QuestionId int NOT NULL,
AnswerId int NOT NULL,
VoteDate Date, 
FOREIGN KEY (VoterId) REFERENCES Voter(VoterId),
FOREIGN KEY (FacultyId) REFERENCES Faculty(FacultyId),
FOREIGN KEY (SubjectId) REFERENCES Subject(SubjectId),
FOREIGN KEY (AnswerId) REFERENCES Answer(AnswerId),
FOREIGN KEY (TeacherId) REFERENCES Teacher(TeacherId),
FOREIGN KEY (QuestionId) REFERENCES Question(QuestionId)
);