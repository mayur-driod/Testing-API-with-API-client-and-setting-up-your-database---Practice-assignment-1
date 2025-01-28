// API: Retrieve Students Above Threshold
// ---------------------------------------
// Task:
// Implement an API to fetch students whose total marks exceed a given threshold.
//
// Endpoint:
// POST /students/above-threshold
//
// Request Body:
// {
//   "threshold": <number>
// }
//
// Response:
// Success: List of students with their names and total marks who meet the criteria.
// Example:
// {
//   "count": 2,
//   "students": [
//     { "name": "Alice Johnson", "total": 433 },
//     { "name": "Bob Smith", "total": 410 }
//   ]
// }
//
// No Matches:
// {
//   "count": 0,
//   "students": []
// }
//
// Purpose:
// Help teachers retrieve and analyze student performance efficiently.

const express = require('express');

const app = express();
app.use(express.json());
const PORT = 3000;
const studentData = require('./data.json');

app.post('/students/above-threshold', (req, res) => {
  const { threshold } = req.body;

  if (threshold === undefined || typeof threshold !== 'number') {
    return res.status(400).json({ error: 'threshold must be a number' });
  }

  const filteredStudents = studentData
    .filter((student) => student.total > threshold)
   

  res.json({
    count: filteredStudents.length,
    students: filteredStudents,
  });

  console.log({count: filteredStudents.length,
    students: filteredStudents,})
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
