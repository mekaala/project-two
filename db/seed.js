let Region = require('../models/region.js')
let Area = require('../models/area.js');




// let newRegion = [
//     { region: 'Midtown' },
//     { region: 'Brookhaven' }
// ]

let newArea = [
    {    
        region: '5e557f1315949a08247ca994',
        name: 'Midtown',
        place: 'Fourth Ward',
        description: 'String',
        rules: 'String', 
        img: 'https://www.asce.org/uploadedImages/Issues_and_Advocacy/Our_Initiatives/Sustainability/Sustainable_Project_Profiles/Atlanta%20BeltLine%20Historic%20Fourth%20Ward%20Park.jpg'
    },
    {
        region: '5e557f1315949a08247ca994',
        name: 'Midtown',
        place: 'Piedmont Park',
        description: 'String',
        rules: 'String',
        img: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages1.newscred.com%2FZz00YmViYzQ0ODg3NmExN2I0OWQwNDFkMjlmYzEzYzZmYw%3D%3D%3Fheight%3D480%26width%3D800&imgrefurl=https%3A%2F%2Fwww.atlanta.net%2FBlog%2FBest-Things-to-Do-at-Piedmont-Park%2F&tbnid=lyXMpi7t1M-goM&vet=12ahUKEwjY8MbTw-rnAhVJ3VMKHVWRC10QMygFegUIARCPAg..i&docid=h9Pq5zQHFdRN5M&w=800&h=480&q=piedmont%20park&hl=en&ved=2ahUKEwjY8MbTw-rnAhVJ3VMKHVWRC10QMygFegUIARCPAg'
    },
    {
        region: '5e557f1315949a08247ca996',
        name: 'Brookhaven',
        place: 'Lenox Park',
        description: 'String',
        rules: 'String',
        img: 'String'
    },
    {
        region: '5e557f1315949a08247ca996',
        name: 'Brookhaven',
        place: 'Brookhaven Park',
        description: 'String',
        rules: 'String',
        img: 'String'
    }
]

// Region.deleteMany()
//     .then(() => {
//         return Region.create(newRegion)
// });
Area.deleteMany()
    .then(() => {
        return Area.create(newArea)
});