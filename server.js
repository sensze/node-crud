const express = require('express');
const cors = require('cors');

const app = express();

var corsOptions = {
    origin: "http://localhost:5000"
}


app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

const router = require('./routes/MahasiswaRoutes.js');
app.use('/api/mahasiswa', router);

app.get("/", (req, res) => {
    res.json({ message: "Welcome to the application."});
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});