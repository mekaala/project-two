I decided with this project to create a photography database for Atlanta, showing off different locations within different regions of Atlanta for photography, as well as a catalogue of photographers to reach out to.
Honestly, this was easier said than done. This project called for a lot of nesting, for which I did not have enough experience.
Originally, the regions schema had an area schema nested within it, and that schema had a photo album schema within it. However, I decided to separate all three schemas, only connecting the regions with their areas by hosting the same region name in their objects.
Each region contains a name, some information, and a photo.
Each area contains its own name as well as a region name, a description, rules, one cover photo, and the option to add up to three photos of that area. To encourage citing works, I added a source object that should contain the name of the source.
Instead of an album, I decided to implement a database of photographers that was developed in a separate manner from the regions and areas. I felt that implementing a photographer database into my app would help develop the business of younger photographers who want to market their work. Each photographer page features a name, an instagram/professional portfolio site link, a username, and a profile picture.
I formatted the styles to give a serene and relaxing appearance, opting for rounded borders to give a welcoming appearance.

<img src="wirefreams/Web 1920 - 2.png">
<img src="wireframes/Web 1920 – 1.png">
<img src="wireframes/Web 1920 – 3.png">
<img src="wireframes/Web 1920 – 4.png">
<img src="wireframes/Web 1920 – 5.png">
<img src="wireframes/Web 1920 – 6.png">

<a href="https://mekaala-atl-photos.herokuapp.com/">Heroku Application</a><br/>
<a href="https://trello.com/b/MXrS9Chd/project-two">Trello Board</a>