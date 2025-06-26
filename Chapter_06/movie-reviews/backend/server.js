import express from 'express' //import middleware
import cors from 'cors'
import movies from './api/movies.route.js' //import route

const app = express(); //We attach the cors and express.json middleware that express will use with:

app.use(cors());
app.use(express.json()); //parsing middleware to enable the server to read and accept JSON in a request’s body

app.use("/api/v1/movies", movies);
app.use('*', (req,res)=>{
res.status(404).json({error: "not found"})
})

export default app;