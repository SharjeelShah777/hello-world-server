import express from 'express';

const app = express();

// http://192.168.210.35:3000/profile
app.get('/', (req, res) => {
    console.log('Hello World!', new Date());
    res.send('Hello World!' + new Date());
})
app.get('/profile', (req, res) => {
    console.log('This is my first server!', new Date());
    res.send('This is my first server' + new Date());
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`hello world server is listening on port ${PORT}`)
})