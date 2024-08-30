import "./Detailofimg.css"
import { useParams } from 'react-router-dom';


function Detailofimg(){
    const { id } = useParams();
    const imageId = parseInt(id);// Convert id to a number


    const arrayOfdetails = [
        {picname: "Starry Night", id:1,
    year: 1889,
    description: "Although The Starry Night was painted during the day in Van Gogh's ground-floor studio, it would be inaccurate to state that the picture was painted from memory. The view has been identified as the one from his bedroom window, facing east, a view which Van Gogh painted variations of no fewer than twenty-one times, including The Starry Night. \"Through the iron-barred window,\" he wrote to his brother, Theo, around 23 May 1889, \"I can see an enclosed square of wheat ... above which, in the morning, I watch the sun rise in all its glory.\"",
    source: "https://en.wikipedia.org/wiki/The_Starry_Night",
      artistimg: "/assets/image/Vincent.jpg",
      nameartist: "Vincent Van Gogh",
    imgpic: "/assets/image/starry-night.jpg"},

      {
        picname: "Girl with a Pearl Earring", id:2,
        year: 1665,
        description: "The painting is a tronie, the Dutch 17th-century description of a 'head' that was not meant to be a portrait. It depicts a European girl wearing an exotic dress, an oriental turban, and what was thought to be a very large pearl as an earring. In 2014, Dutch astrophysicist Vincent Icke raised doubts about the material of the earring and argued that it looks more like polished tin than pearl on the grounds of the specular reflection, the pear shape and the large size of the earring.",
        source: "https://en.wikipedia.org/wiki/Girl_with_a_Pearl_Earring",
        artistimg: "/assets/image/Johannes.jpg",
        nameartist: "Johannes Vermeer",
        imgpic: "/assets/image/girl-with-pearl-earring.jpg"
      },
      {
        picname: "Guernica", id:3,
        year: 1937,
        description: "The scene occurs within a room where, on the left, a wide-eyed bull stands over a grieving woman holding a dead child in her arms. In the center of the room a horse falls in agony with a large gaping hole in its side, as if it had just been run through by a spear or javelin. The horse appears to be wearing chain mail armor, decorated with vertical tally marks arranged in rows. A dead and dismembered soldier lies under the horse. The hand of his severed right arm grasps a shattered sword, from which a flower grows.",
        source: "https://en.wikipedia.org/wiki/Guernica_(Picasso)",
        artistimg: "/assets/image/Pablo.jpg",
        nameartist: "Pablo Picasso",
          imgpic: "/assets/image/guernica.jpg"
        },
      
    ];

    // Find the details of the image that matches the id
    const imageDetails = arrayOfdetails.find(details => details.id === imageId);

    // If no matching details, display a message
    if (!imageDetails) {
        return <p>Image details not found!</p>;
    }

    return (
         <div id="detdiv">
            <div>
                <img id="portrit" src={imageDetails.imgpic}/>
            </div>

            <div id="artistdet">
                <h1 id="namepic">{imageDetails.picname}</h1>
                <p id="artname">{imageDetails.nameartist}</p>
                <img id="imgart" src={imageDetails.artistimg} />
            </div>

            <div id="discription">
                <h1 id="year">{imageDetails.year}</h1>
                <p id="descparg">{imageDetails.description}</p>
                <a id="source"
                 href={imageDetails.source} target="_blank">GO TO SOURCE</a>
            </div>

         </div>
    );
}
export default Detailofimg