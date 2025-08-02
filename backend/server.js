require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const authRoutes = require('./routes/authRoutes');
const pnlRoutes = require('./routes/pnlRoutes');

app.use('/api/auth', authRoutes);
app.use('/api/pnl', pnlRoutes);
app.use('/uploads', express.static('uploads'));

app.get('/api/test', (req, res) => {
  res.json({ message: "✅ Frontend is connected to Backend!" });
});

app.get('/',(req,res)=> {
  res.json("hello world ")
})

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
