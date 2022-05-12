CREATE DATABASE VotingSystemDB;
--drop database VotingSystemDB 
--use VotingSystemDB;
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
FacultyTeacherId int NOT NULL,
FacultyId int NOT NULL,
TeacherId int NOT NULL,
FOREIGN KEY (TeacherId) REFERENCES Teacher (TeacherId),
FOREIGN KEY (FacultyId) REFERENCES Faculty (FacultyId),
PRIMARY KEY(FacultyTeacherId)
);

CREATE TABLE SubjectTeacher(
SubjectTeacherId int NOT NULL,
SubjectId int NOT NULL,
TeacherId int NOT NULL,
FOREIGN KEY (TeacherId) REFERENCES Teacher (TeacherId),
FOREIGN KEY (SubjectId) REFERENCES Subject (SubjectId),
PRIMARY KEY(SubjectTeacherId)
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
FormMode int,
PRIMARY KEY (QuestionId)
);

CREATE TABLE QuestionMark(
QuestionMarkId int NOT NULL,
QuestionId int NOT NULL,
MarkId int NOT NULL,
FOREIGN KEY (QuestionId) REFERENCES Question(QuestionId),
FOREIGN KEY (MarkId) REFERENCES Mark(MarkId),
PRIMARY KEY (QuestionMarkId)
);

CREATE TABLE EducationalProgram(
EducationalProgramId int,
EducationalProgramName NVARCHAR,
PRIMARY KEY(EducationalProgramId)
);

CREATE TABLE Voter(
VoterId int NOT NULL,
LevelId int, 
Semester int,
Course int,
EducationalProgramId int, 
PRIMARY KEY(VoterId),
FOREIGN KEY (LevelId) REFERENCES GraduateLevel(LevelId),
FOREIGN KEY (EducationalProgramId) REFERENCES EducationalProgram(EducationalProgramId)
);

CREATE TABLE Vote(
VoteId int NOT NULL,
VoterId int NOT NULL,
FacultyTeacherId int NOT NULL,
SubjectTeacherId int NOT NULL,
QuestionMarkId int NOT NULL,
VoteDate Date, 
PRIMARY KEY(VoteId),
FOREIGN KEY (VoterId) REFERENCES Voter(VoterId),
FOREIGN KEY (FacultyTeacherId) REFERENCES FacultyTeacher(FacultyTeacherId),
FOREIGN KEY (SubjectTeacherId) REFERENCES SubjectTeacher(SubjectTeacherId),
FOREIGN KEY (QuestionMarkId) REFERENCES QuestionMark(QuestionMarkId)
);
