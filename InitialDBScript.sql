--CREATE DATABASE VotingSystemDB;
--drop database VotingSystemDB 
use VotingSystemDB;
CREATE TABLE Teacher(
TeacherId  int,
TeacherName NVARCHAR,
FacultyTeacherId int,
SubjectTeacherId int,
PRIMARY KEY(TeacherId)
);  

CREATE TABLE Faculty(
FacultyId int,
FacultyName NVARCHAR,
PRIMARY KEY (FacultyId)
);

CREATE TABLE Subject(
SubjectId int,
SubjectName NVARCHAR,
Semester int,
Faculty NVARCHAR,
PRIMARY KEY (SubjectId)
);

CREATE TABLE FacultyTeacher(
FacultyId int NOT NULL,
TeacherId int NOT NULL,
FOREIGN KEY (TeacherId) REFERENCES Teacher (TeacherId),
FOREIGN KEY (FacultyId) REFERENCES Faculty (FacultyId),
UNIQUE(TeacherId, FacultyId)
);

CREATE TABLE SubjectTeacher(
SubjectId int NOT NULL,
TeacherId int NOT NULL,
FOREIGN KEY (TeacherId) REFERENCES Teacher (TeacherId),
FOREIGN KEY (SubjectId) REFERENCES Subject (SubjectId),
UNIQUE(SubjectId, TeacherId)
);

CREATE TABLE Mark(
MarkId int,
MarkDescription NVARCHAR,
PRIMARY KEY (MarkId)
);

CREATE TABLE GraduateLevel(
LevelId int,
LevelName NVARCHAR,
PRIMARY KEY (LevelId)
);

CREATE TABLE Question(
QuestionId int,
QuestionDescription NVARCHAR,
PRIMARY KEY (QuestionId)
);

CREATE TABLE EducationalProgram(
EducationalProgramId int,
EducationalProgramName NVARCHAR,
PRIMARY KEY(EducationalProgramId)
);

CREATE TABLE Vote(
VoteId int NOT NULL,
VoterRandomId int NOT NULL,
FacultyId int,
TeacherId int NOT NULL,
SubjectId int NOT NULL,
MarkId int NOT NULL,
QuestionId int NOT NULL,
LevelId int, 
Semester int,
Course int,
VoteDate Date,
EducationalProgramId int, 
PRIMARY KEY(VoteId),
FOREIGN KEY (FacultyId) REFERENCES Faculty(FacultyId),
FOREIGN KEY (TeacherId) REFERENCES Teacher(TeacherId),
FOREIGN KEY (SubjectId) REFERENCES Subject(SubjectId),
FOREIGN KEY (MarkId) REFERENCES Mark(MarkId),
FOREIGN KEY (LevelId) REFERENCES GraduateLevel(LevelId),
FOREIGN KEY (QuestionId) REFERENCES Question(QuestionId)
);
