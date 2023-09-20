const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const User= require('./models/dataSchema')
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://127.0.0.1/', {dbName: 'Portfolio-data', useNewUrlParser: true },err => err ? console.log(err) :
console.log('Connected to Portfolio-data database'));




const port = process.env.PORT || 4000;

// app.get('/', (req, res) => {
//   res.send('<h1>Hello World</h1>');
// })

// app.get('/:name', (req, res) => {
//   res.send(`<h1>Welcome to ${req.params.name}!</h1>`);
// });

app.post('/inse', async(req, res) => {
  const FirstName = req.body.fullName
  const CompanyRole = req.body.email
  const Location = req.body.location
  const Messagee = req.body.msg

  console.log(FirstName, CompanyRole)

  const formData = new User({
      nameS: FirstName,
      roleS: CompanyRole,
      location: Location,
      message:Messagee
  })

  try {
      await formData.save();
      res.send("inserted data..")
  } catch(err) {
      console.log(err)
  }
});
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});