import cors from 'cors';
import express from 'express';

const app = express();

// middleware for json parsing
app.use(express.json());

// middleware for allow cross origin request
app.use(cors());

const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
    res.send(`Let's build something great together...`)
  })

app.listen(port, () =>
	console.log(`Application is running at http://localhost:${port}`)
);
