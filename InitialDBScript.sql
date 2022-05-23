--CREATE DATABASE VotingSystemDB;
--drop database VotingSystemDB 
--use VotingSystemDB;
CREATE TABLE Teacher(
TeacherId int IDENTITY(1,1) PRIMARY KEY,
TeacherName VARCHAR(max),
FacultyTeacherId int,
SubjectTeacherId int
);  

CREATE TABLE Faculty(
FacultyId int IDENTITY(1,1) PRIMARY KEY,
FacultyName VARCHAR(max)
);

CREATE TABLE Subject(
SubjectId int IDENTITY(1,1) PRIMARY KEY,
SubjectName VARCHAR(max),
Semester int,
FacultyId int
);

CREATE TABLE FacultyTeacher(
FacultyTeacherId int NOT NULL IDENTITY(1,1) PRIMARY KEY,
FacultyId int NOT NULL,
TeacherId int NOT NULL,
FOREIGN KEY (TeacherId) REFERENCES Teacher (TeacherId),
FOREIGN KEY (FacultyId) REFERENCES Faculty (FacultyId)
);

CREATE TABLE SubjectTeacher(
SubjectTeacherId int NOT NULL IDENTITY(1,1) PRIMARY KEY,
SubjectId int NOT NULL,
TeacherId int NOT NULL,
FOREIGN KEY (TeacherId) REFERENCES Teacher (TeacherId),
FOREIGN KEY (SubjectId) REFERENCES Subject (SubjectId)
);

CREATE TABLE Mark(
MarkId int IDENTITY(1,1) PRIMARY KEY,
MarkDescription VARCHAR(max)
);

CREATE TABLE GraduateLevel(
LevelId int IDENTITY(1,1) PRIMARY KEY,
LevelName VARCHAR(max)
);

CREATE TABLE Question(
QuestionId int IDENTITY(1,1) PRIMARY KEY,
QuestionDescription VARCHAR(max),
FormMode int
);

CREATE TABLE QuestionMark(
QuestionMarkId int NOT NULL IDENTITY(1,1) PRIMARY KEY,
QuestionId int NOT NULL,
MarkId int NOT NULL,
FOREIGN KEY (QuestionId) REFERENCES Question(QuestionId),
FOREIGN KEY (MarkId) REFERENCES Mark(MarkId)
);

CREATE TABLE EducationalProgram(
EducationalProgramId int IDENTITY(1,1) PRIMARY KEY,
EducationalProgramName VARCHAR(max)
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
FacultyTeacherId int NOT NULL,
SubjectTeacherId int NOT NULL,
QuestionMarkId int NOT NULL,
VoteDate Date, 
FOREIGN KEY (VoterId) REFERENCES Voter(VoterId),
FOREIGN KEY (FacultyTeacherId) REFERENCES FacultyTeacher(FacultyTeacherId),
FOREIGN KEY (SubjectTeacherId) REFERENCES SubjectTeacher(SubjectTeacherId),
FOREIGN KEY (QuestionMarkId) REFERENCES QuestionMark(QuestionMarkId)
);