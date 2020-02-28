let Region = require('../models/Region.js')
let Area = require('../models/Area.js');
let Photographer = require('../models/Photographer.js')

let newRegion = [
    {
        name: 'Midtown',
        about: 'Located in middle Atlanta, Midtown is known for its bustling urban scene.',
        img: 'https://cdngeneral.rentcafe.com/dmslivecafe/3/422030/TS-Atlanta-night-resized.jpg?crop=(0,3.1249999999994884,300,200)&cropxunits=300&cropyunits=200&quality=85&scale=both&',
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
        place: 'Historic Fourth Ward Park',
        description: 'Across from Ponce City Market lies the gorgeous Historic Fourth Ward Park. Here you can take amazing photos of nature and families.',
        rules: 'Park operates from 6 am to 11 pm every day. Do not feed the ducks and geese! Do not fish either!', 
        img: 'https://www.asce.org/uploadedImages/Issues_and_Advocacy/Our_Initiatives/Sustainability/Sustainable_Project_Profiles/Atlanta%20BeltLine%20Historic%20Fourth%20Ward%20Park.jpg'
    },
    {
        name: 'Midtown',
        place: 'Piedmont Park',
        description: 'String',
        rules: 'String',
        img: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages1.newscred.com%2FZz00YmViYzQ0ODg3NmExN2I0OWQwNDFkMjlmYzEzYzZmYw%3D%3D%3Fheight%3D480%26width%3D800&imgrefurl=https%3A%2F%2Fwww.atlanta.net%2FBlog%2FBest-Things-to-Do-at-Piedmont-Park%2F&tbnid=lyXMpi7t1M-goM&vet=12ahUKEwjY8MbTw-rnAhVJ3VMKHVWRC10QMygFegUIARCPAg..i&docid=h9Pq5zQHFdRN5M&w=800&h=480&q=piedmont%20park&hl=en&ved=2ahUKEwjY8MbTw-rnAhVJ3VMKHVWRC10QMygFegUIARCPAg'
    },
    {
        name: 'Brookhaven',
        place: 'Lenox Park',
        description: 'String',
        rules: 'String',
        img: 'String'
    },
    {
        name: 'Brookhaven',
        place: 'Brookhaven Park',
        description: 'String',
        rules: 'String',
        img: 'String'
    }
]

let newPhotographer = [
    {    
        name: 'Mekaal Ahmad',
        insta: 'https://www.instagram.com/mekastro/?hl=en',
        username: 'mekastro',
        faceImg: 'https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/83127567_10221837998763783_7294035747823157248_o.jpg?_nc_cat=104&_nc_sid=85a577&_nc_ohc=LxfdBqYWUvAAX_4jhqh&_nc_ht=scontent-atl3-1.xx&oh=4de577326282c0834f852f99dcc61a2a&oe=5EB8DE25',
        about: 'From Brookhaven. Loves capturing the bustle of the city and the quaint life of the parks in Atlanta.'
    },
    {
        name: 'Coffee Meek',
        faceImg: 'https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/51970672_10218772123878827_133737138339446784_o.jpg?_nc_cat=102&_nc_sid=7aed08&_nc_ohc=YBh0KsJfIgIAX9s0fAB&_nc_ht=scontent-atl3-1.xx&oh=6eb390dec27d35b393cf77ef6ddb0a52&oe=5F0124E0'
    },
    {
        name: 'Light Meek',
        faceImg: 'https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/37388625_10217087538645249_7511305275605778432_o.jpg?_nc_cat=103&_nc_sid=7aed08&_nc_ohc=JDWuAjNKTBoAX84rp2A&_nc_ht=scontent-atl3-1.xx&oh=ca41ff5f5c891ae0900c1480e1c176b7&oe=5EF4511A'
    },
    {
        name: 'Deer Meek',
        faceImg: 'https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/35332748_10216829720999969_2459576183843454976_o.jpg?_nc_cat=100&_nc_sid=7aed08&_nc_ohc=XvWR4WQuMMAAX8H22FW&_nc_ht=scontent-atl3-1.xx&oh=f6ce48b3f8c733641bdcda2f08faa989&oe=5EF9DCDF'
    },
    {
        name: 'ULTRA RAD',
        faceImg: 'https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/29594525_10216227717430256_1632470698416872435_n.jpg?_nc_cat=104&_nc_sid=7aed08&_nc_ohc=GaklOqU3TXYAX8ss8pr&_nc_ht=scontent-atl3-1.xx&oh=2887723a2ee638c1d7818ddd9f6367da&oe=5F028611'
    },
    {
        name: 'M O O K',
        faceImg: 'https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/80070378_10221506665320654_855583070483382272_o.jpg?_nc_cat=109&_nc_sid=7aed08&_nc_ohc=Ig3fhuBE9DAAX-8VREH&_nc_ht=scontent-atl3-1.xx&oh=08221215432bedee2d90c2ad3e43592b&oe=5EF601AB'
    }
]

Region.deleteMany()
    .then(() => {
        return Region.create(newRegion)
});
Area.deleteMany()
    .then(() => {
        return Area.create(newArea)
});
Photographer.deleteMany()
    .then(() => {
        return Photographer.create(newPhotographer)
});