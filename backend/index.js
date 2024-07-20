import express from "express"

const PORT = 8000;

const app = express();

app.get("/", (req, res) => {
    return res.status(200).json("BACKEND RABOTAET TI NE DEBIL");
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));