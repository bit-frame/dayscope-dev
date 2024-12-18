const express = require('express');
const path = require('path');
const app = express();
const PORT = 2700;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.redirect('staff/dashboard.html');
});

app.get('/student', (req, res) => {
  res.redirect('student/student-dash.html');
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});