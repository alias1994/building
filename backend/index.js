const express = require('express')
const app = express()
const port = 3000

const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/building');
}

const UserSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    username: String,
    password: String,
  });

const User = mongoose.model('User', UserSchema);

app.get('/register', (req, res) => {
  res.send('Hello World!')
})

app.get('/signin', async (req, res) => {
    const mahdi = new User({
        firstname: 'mahdi',
        lastname: 'fayaz',
        username: 'mahdif',
        password: '2222'
    });

    await mahdi.save();
    res.send('save')
})

app.get('/authenticate', async (req, res) => {
    const ali = await User.find({ firstname: 'mahdi' }).exec()
    res.send(ali)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})