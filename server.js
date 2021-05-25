// import SMTPTransport from 'nodemailer/lib/smtp-transport';
const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

// app.get('/', () => {
//   resizeBy.send('welcome to my forma');
// })

app.post('/api/forma', (req, res) => {
  let data = req.body
  let sntpTransport = nodemailer.createTransport({
    service: 'Gmail',
    port: 465,
    auth: {
      user: 'daniel.guzdek.86@gmail.com',
      pass: 'Beethoven6'
    }
    })

  let mailOptions = {
    from: data.email,
    to: 'daniel.guzdek.86@gmail.com',
    subject: `Message from ${data.name}`,
    html: `
      <h3>Informations</h3>
      <ul>
      <li>Name: ${data.name}</li>
      <li>Lastname: ${data.lastname}</li>
      <li>Email: ${data.email}</li>
      </ul>

      <h3>Message</h3>
      <p>${data.message}</p>
    `
  }

  sntpTransport.sendMail(mailOptions, (error, response)=>{
    if(error) {
      res.send(error);
    }
    else {
      res.send('Success');
    }
  })
  
  sntpTransport.close();
})

const PORT = process.env.PORT||3001;
app.listen(PORT, () => {
  console.log(`Server is listening at port ${PORT}`);
})