require('dotenv').config();
const express = require('express');
const { Sequelize } = require('sequelize');
const { sequelize, Schedule } = require('./models');
const ejs = require('ejs');
const app = express()
const port = process.env.PORT;

app.use(express.json());
app.set('view engine', 'ejs');

// const sequelize = new Sequelize
// ('postgres://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:5432/schedules')

sequelize
.authenticate()
.then(() => {
console.log('Connection has been established successfully.');
})
.catch(err => {
console.error('Unable to connect to the database:', err);
});

app.get('/', async (req, res) => {
    try {
      const schedules = await Schedule.findAll;
      res.json(schedules);
    } catch(err) {
      console.log(err);
      res.status(500).json({ error: 'Something went wrong' });
    }
  // res.render('schedules', { title: 'Schedules' });
})

app.get('/new', (req, res) => {
  // res.render('form', { title: 'New Schedule' });
});

app.post('/new', async (req, res) => {
  const { userName, day, start_at, end_at } = req.body;
  try {
    const schedule = await Schedule.create({ userName, day, start_at, end_at });
    res.json(schedule);
  } catch(err) {
    console.log(err)
    res.status(500).json(err);
  }
  res.redirect('/new');
})


app.listen(port, async () => {
  console.log(`Prototype app listening on port ${port}`)
  // await sequelize.sync( { force: true })
  // console.log('Database synced')
})

// const Schedule = sequelize.define('schedule', {
//     userName: {
//       type: Sequelize.STRING,
//       allowNull: false
//     },
//     day: {
//       type: Sequelize.INTEGER,
//       allowNull: false,
//     },
//     start_at: {
//         type: Sequelize.TIME,
//         allowNull: false,
//     },
//     end_at: {
//         type: Sequelize.TIME,
//         allowNull: false,
//     },
//     }, {});

// Schedule.sync({ force: false })