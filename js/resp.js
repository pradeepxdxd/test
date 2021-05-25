burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navList = document.querySelector('.nav-list')
rightNav = document.querySelector('.rightNav')
 


burger.addEventListener('click', ()=>{
    rightNav.classList.toggle('v-class-resp');
    navList.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-nav-resp');
    
})

// getting-started.js
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/iEducation', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

// db.once('open', function() {
//     // we're connected!
//     console.log("we are connected chintu");
// });

const contactSchema = new mongoose.Schema({
    name: String,
    phone: String,
    email: String,
    text: String
  });