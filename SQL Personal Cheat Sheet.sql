-- https://www.geeksforgeeks.org/sql-query-interview-questions/

-- 1. Write a SQL query to fetch "FIRST_NAME" from the Student table in upper case and use ALIAS name as STUDENT_NAME.
SELECT upper(FIRST_NAME) AS STUDENT_NAME
FROM Student

-- 2. Write a SQL query to fetch unique values of MAJOR Subjects from Student table.
SELECT DISTINCT MAJOR 
FROM Student

-- Write a SQL query to print the first 3 characters of FIRST_NAME from Student table.
SELECT SUBSTRING(FIRST_NAME, 1, 3) 
FROM Student

-- 4. Write a SQL query to find the position of alphabet ('a') int the first name column 'Shivansh' from Student table.
SELECT INSTR(FIRST_NAME, a) 
FROM Student
WHERE Name = 'Shivansh'

-- 5. Write a SQL query that fetches the unique values of MAJOR Subjects from Student table and print its length.
SELECT DISTINCT MAJOR, LENGTH(MAJOR)
FROM Student

-- 6. Write a SQL query to print FIRST_NAME from the Student table after replacing 'a' with 'A'.
SELECT REPLACE(FIRST_NAME, a, A)
FROM Student

-- 7. Write a SQL query to print the FIRST_NAME and LAST_NAME from Student table into single column COMPLETE_NAME.
SELECT CONCAT(FIRST_NAME, ' ', LAST_NAME) AS COMPLETE_NAME
FROM Student

-- 8. Write a SQL query to print all Student details from Student table order by FIRST_NAME Ascending and MAJOR Subject descending .
SELECT * 
FROM Student
ORDER BY Name, Major DESC

-- 9. Write a SQL query to print details of the Students with the FIRST_NAME as 'Prem' and 'Shivansh' from Student table.
SELECT * 
FROM Student
WHERE Name IN('PREM', 'Shivansh')

-- 10. Write a SQL query to print details of the Students excluding FIRST_NAME as 'Prem' and 'Shivansh' from Student table.
SELECT * 
from Student 
WHERE FIRST_NAME NOT IN ('Prem', 'Shivansh');

-- 11. Write a SQL query to print details of the Students whose FIRST_NAME ends with 'a'.
SELECT *
FROM Student
WHERE Name LIKE '%a'

-- 12. Write an SQL query to print details of the Students whose FIRST_NAME ends with ‘a’ and contains five alphabets.
SELECT *
FROM Student
WHERE Name LIKE '____a'

-- 13. Write an SQL query to print details of the Students whose GPA lies between 9.00 and 9.99.
SELECT * 
FROM Student
WHERE GPA BETWEEN 9.00 AND 9.99

-- 14. Write an SQL query to fetch the count of Students having Major Subject ‘Computer Science’.
SELECT MAJOR, COUNT(*) as TOTAL_COUNT
FROM Student
WHERE Major = 'Computer Science'

-- 15. Write an SQL query to fetch Students full names with GPA >= 8.5 and <= 9.5.
SELECT CONCAT(FIRST_NAME, ' ', LAST_NAME) AS FULL_NAME
FROM Student
WHERE GPA BETWEEN 8.5 AND 9.5

-- 16. Write an SQL query to fetch the no. of Students for each MAJOR subject in the descending order.
SELECT MAJOR, COUNT(MAJOR)
FROM Student
GROUP BY MAJOR
ORDER BY COUNT(MAJOR) DESC

-- 17. Display the details of students who have received scholarships, 
-- including their names, scholarship amounts, and scholarship dates.
SELECT  Student.FIRST_NAME, Student.LAST_NAME, Scholarship.SCHOLARSHIP_AMOUNT, Scholarship.SCHOLARSHIP_DATE
FROM Student
INNER JOIN Scholarship ON Student.studenID = Scholarship.Student.ref.id

-- 18. Write an SQL query to show only odd rows from Student table
SELECT * 
FROM Student
WHERE studentId % 2 != 0

-- 19. Write an SQL query to show only even rows from Student table.
SELECT * 
FROM Student
WHERE studentId % 2 = 0

-- 20. List all students and their scholarship amounts if they have received any. If a student has not received a scholarship,
-- display NULL for the scholarship details.
SELECT 
    Student.FIRST_NAME,
    Student.LAST_NAME,
    Scholarship.SCHOLARSHIP_AMOUNT,
    Scholarship.SCHOLARSHIP_DATE
FROM 
    Student
LEFT JOIN 
    Scholarship ON Student.STUDENT_ID = Scholarship.STUDENT_REF_ID;


-- 21. Write an SQL query to show the top n (say 5) records of Student table order by descending GPA.
SELECT * 
FROM Student
ORDER BY GPA DESC
LIMIT 5

-- 22. Write an SQL query to determine the nth (say n=5) highest GPA from a table.
SELECT * FROM Student ORDER BY GPA DESC LIMIT 5, 1;

-- 23. Write an SQL query to determine the 5th highest GPA without using LIMIT keyword.
SELECT * FROM Student s1 
WHERE 4 = (
    SELECT COUNT(DISTINCT (s2.GPA)) 
    FROM Student s2
    WHERE s2.GPA >= s1.GPA
);

-- 24. Write an SQL query to fetch the list of Students with the same GPA.
SELECT s1.* FROM Student s1, Student s2 WHERE s1.GPA = s2.GPA AND s1.Student_id != s2.Student_id;

-- 
