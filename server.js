const express = require('express');
const PORT = process.env.PORT || 80;

const app = express();

//express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
});

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});