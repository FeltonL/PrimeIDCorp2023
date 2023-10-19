const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const cors = require('cors')
const port = 8091

const app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({ origin: "*" }));

app.use(express.static(path.join(__dirname, './build')));

app.get("/", (req, res) => {
    res.sendFile(path.join('/index.html'));
})

app.get("/download", (req, res) => {
    res.sendFile(path.join(__dirname, './content/download', '/index.html'));
})

app.get("/privacy", (req, res) => {
    res.sendFile(path.join(__dirname, './content/privacy', '/index.html'));
})

app.use('/content', express.static(__dirname + '/content'));

app.listen(port, () => {
    console.log(`https server running on port ${port}`);
});
