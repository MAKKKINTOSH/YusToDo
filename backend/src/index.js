import express from 'express';
import "reflect-metadata"

const PORT = 8000;
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).json("BACKEND RABOTAET TI NE DEBIL");
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));