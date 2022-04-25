SELECT ep.EducationalProgramName, 
gl.LevelName,
v.Course, 
s.SubjectName,
t.TeacherName,
q.QuestionDescription, 
v.MarkId 
FROM
Vote v join EducationalProgram ep on v.EducationalProgramId = ep.EducationalProgramId
join GraduateLevel gl on v.LevelId = gl.LevelId 
join Subject s on v.SubjectId = s.SubjectName
join Teacher t on v.TeacherId = t.TeacherName
join Question q on v.QuestionId = q.QuestionId
WHERE
v.VoteDate <= '2021-12-01' AND v.VoteDate >= '2021-11-22'
AND t.TeacherName = 'Слюсар Євген Андрійович'
