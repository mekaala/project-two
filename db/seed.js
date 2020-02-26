let Region = require('../models/Region.js')
let Area = require('../models/Area.js');
// let Photo = require('../models/Photo.js')




let newRegion = [
    {
        name: 'Midtown',
        about: 'Located in middle Atlanta, Midtown is known for its bustling urban scene.'
    },
    { name: 'Downtown' },
    { name: 'Brookhaven' },
    { name: 'Sandy Springs' },
    { name: 'Edgewood' },
    { name: 'Decatur' },
]

let newArea = [
    {    
        name: 'Midtown',
        region: '5e56a971e17f16305808b3de',
        place: 'Historic Fourth Ward Park',
        description: 'Across from Ponce City Market lies the gorgeous Historic Fourth Ward Park. Here you can take amazing photos of nature and families.',
        rules: 'Park operates from 6 am to 11 pm every day. Do not feed the ducks and geese! Do not fish either!', 
        img: 'https://www.asce.org/uploadedImages/Issues_and_Advocacy/Our_Initiatives/Sustainability/Sustainable_Project_Profiles/Atlanta%20BeltLine%20Historic%20Fourth%20Ward%20Park.jpg'
    },
    {
        name: 'Midtown',
        region: '5e56a971e17f16305808b3de',
        place: 'Piedmont Park',
        description: 'String',
        rules: 'String',
        img: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages1.newscred.com%2FZz00YmViYzQ0ODg3NmExN2I0OWQwNDFkMjlmYzEzYzZmYw%3D%3D%3Fheight%3D480%26width%3D800&imgrefurl=https%3A%2F%2Fwww.atlanta.net%2FBlog%2FBest-Things-to-Do-at-Piedmont-Park%2F&tbnid=lyXMpi7t1M-goM&vet=12ahUKEwjY8MbTw-rnAhVJ3VMKHVWRC10QMygFegUIARCPAg..i&docid=h9Pq5zQHFdRN5M&w=800&h=480&q=piedmont%20park&hl=en&ved=2ahUKEwjY8MbTw-rnAhVJ3VMKHVWRC10QMygFegUIARCPAg'
    },
    {
        name: 'Brookhaven',
        region: '5e56a971e17f16305808b3e0',
        place: 'Lenox Park',
        description: 'String',
        rules: 'String',
        img: 'String'
    },
    {
        name: 'Brookhaven',
        region: '5e56a971e17f16305808b3e0',
        place: 'Brookhaven Park',
        description: 'String',
        rules: 'String',
        img: 'String'
    }
]

// let newPhoto = [
//     {    
//         name: 'Midtown',
//         region: '5e557f1315949a08247ca994',
//         place: 'Historic Fourth Ward Park',
//         description: 'Across from Ponce City Market lies the gorgeous Historic Fourth Ward Park. Here you can take amazing photos of nature and families.',
//         rules: 'Park operates from 6 am to 11 pm every day. Do not feed the ducks and geese! Do not fish either!', 
//         img: 'https://www.asce.org/uploadedImages/Issues_and_Advocacy/Our_Initiatives/Sustainability/Sustainable_Project_Profiles/Atlanta%20BeltLine%20Historic%20Fourth%20Ward%20Park.jpg'
//     },
//     {
//         name: 'Midtown',
//         region: '5e557f1315949a08247ca994',
//         place: 'Piedmont Park',
//         description: 'String',
//         rules: 'String',
//         img: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages1.newscred.com%2FZz00YmViYzQ0ODg3NmExN2I0OWQwNDFkMjlmYzEzYzZmYw%3D%3D%3Fheight%3D480%26width%3D800&imgrefurl=https%3A%2F%2Fwww.atlanta.net%2FBlog%2FBest-Things-to-Do-at-Piedmont-Park%2F&tbnid=lyXMpi7t1M-goM&vet=12ahUKEwjY8MbTw-rnAhVJ3VMKHVWRC10QMygFegUIARCPAg..i&docid=h9Pq5zQHFdRN5M&w=800&h=480&q=piedmont%20park&hl=en&ved=2ahUKEwjY8MbTw-rnAhVJ3VMKHVWRC10QMygFegUIARCPAg'
//     },
//     {
//         name: 'Brookhaven',
//         region: '5e557f1315949a08247ca996',
//         place: 'Lenox Park',
//         description: 'String',
//         rules: 'String',
//         img: 'String'
//     },
//     {
//         name: 'Brookhaven',
//         region: '5e557f1315949a08247ca996',
//         place: 'Brookhaven Park',
//         description: 'String',
//         rules: 'String',
//         img: 'String'
//     }
// ]

Region.deleteMany()
    .then(() => {
        return Region.create(newRegion)
});
Area.deleteMany()
    .then(() => {
        return Area.create(newArea)
});
// Photo.deleteMany()
//     .then(() => {
//         return Photo.create(newPhoto)
// });