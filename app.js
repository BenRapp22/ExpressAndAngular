
const express = require('express');
const Joi = require('joi');
const app = express();

// app.use(express.json());

app.use(express.static('public'))

const images = [
    { id: 1, name: 'image1' }, 
    { id: 2, name: 'image2' },
    { id: 3, name: 'image3' },
];


// If you add the image id to the end of the URI string it returns that numbered image
// If the file specified by the id doesn't exist, it throws a 404 error
app.get('/api/images/:id', (req, res) => {
    const image = images.find(i => i.id === parseInt(req.params.id));
    if(!image){
        return res.status(404).send("The image with the given id was not found.");
    }
    res.send(image);
});

// Shows user the dataset
app.get('/api/images', (req,res)=>{
    res.send(images);
})


// If you want to create a new image with a post request this does so and gives it a new id 
// returns the new image object
app.post('/api/images/' , (req,res) => {

    //Error Handling
    const schema = Joi.object({
        name: Joi.string().min(3).required()
    });
    const { error } = schema.validate(req.body);
    if(error){
        // 400 Bad Request
        return res.status(400).send(error.details[0].message);
    }

    // Define the json object needed to create a new image
    const image = {
        id: images.length + 1,
        name: req.body.name
    };

    images.push(image);
    res.send(image);
});

// When the user wants to update an image's name, they navigate by id and send the new name
app.put('/api/images/:id', (req,res)=>{

    //Error Handling
    const schema = Joi.object({
        name: Joi.string().min(3).required()
    });
    const { error } = schema.validate(req.body);;
    if(error){
        // 400 Bad Request
        return res.status(400).send(error.details[0].message);
    }

    const image = images.find(i => i.id === parseInt(req.params.id));
    if (!image){
        return res.status(404).send('The image with the given ID was not found');
    } 

    image.name = req.body.name;
    res.send(image);
})


app.delete( '/api/images/:id', (req,res) => {

    //Error Handling
    const schema = Joi.object({
        name: Joi.string().min(3).required()
    });
    const { error } = schema.validate(req.body);;
    if(error){
        // 400 Bad Request
        return res.status(400).send(error.details[0].message);
    }

    const image = images.find(i => i.id === parseInt(req.params.id));
    if (!image){
        return res.status(404).send('The image with the given ID was not found');
    } 

    const index = images.indexOf(image);
    images.splice(image, 1);
    res.send(image);
});


app.get('/', (req, res) => { 
    res.send('Welcome');
});


const port = process.env.PORT || 3000; 
app.listen(port, (req,res) => {
    console.log(`Listening on port ${port}...`);
});
