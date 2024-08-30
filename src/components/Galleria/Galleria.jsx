import "./Galleria.css"
import Starry from "/assets/image/starry-night.jpg"
import Girl from "/assets/image/girl-with-pearl-earring.jpg"
import Guernica from "/assets/image/guernica.jpg"
import Penitent from "/assets/image/penitent-magdalene.jpg"
import Storm from "/assets/image/the-storm-on-the-sea-of-galilee.jpg"
import Great from "/assets/image/the-great-wave-off-kanagawa.jpg"
import Van from "/assets/image/van-gogh-self-portrait.jpg"
import Sleeping from "/assets/image/the-sleeping-gypsy.jpg"
import Lady from "/assets/image/lady-with-an-ermine.jpg"
import Night from "/assets/image/the-night-cafe.jpg"
import Basket from "/assets/image/the-basket-of-apples.jpg"
import Boy from "/assets/image/the-boy-in-the-red-vest.jpg"
import Arnolfini from "/assets/image/arnolfini-portrait.jpg"
import Mona from "/assets/image/mona-lisa.jpg"
import Swing from "/assets/image/the-swing.jpg"
import { Link } from "react-router-dom";


function Galleria(){
    const arrayOfimages = [
        {id:1, name:"Starry Night", artist:"Vincent Van Gogh",
            image: Starry, grid: "Starry1" , sizeimg: "size1",
        },
        {id:2, name:"Girl with a Pearl Earring", artist:"Johannes Vermeer",
            image: Girl, grid: "Girl2",sizeimg: "size2",},
        {id:3, name:"Guernica", artist:"Pablo Picasso",
            image: Guernica, grid: "Guernica3",sizeimg: "size3",},
        {id:4, name:"Penitent Magdalene", artist:"Artemisia Gentileschi",
            image: Penitent, grid: "Penitent4",sizeimg: "size4",},
        {id:5, name:"The Storm on the Sea of Galilee", artist:"Rembrandt Gogh",
            image: Storm, grid: "Storm5",sizeimg: "size5",},
        {id:6, name:"The Great Wave off Kanagawa", artist:"Hokusai",
            image: Great, grid: "Great6",sizeimg: "size6",},
        {id:7, name:"Van Gogh Self-portrait", artist:"Vincent Van Gogh",
            image: Van, grid: "Van7",sizeimg: "size7",},
        {id:8, name:"The Sleeping Gypsy", artist:"Henri Rousseau",
            image: Sleeping, grid: "Sleeping8",sizeimg: "size8",},
        {id:9, name:"Lady with an Ermine", artist:"Leonardo da Vinci",
            image: Lady, grid: "Lady9",sizeimg: "size9",},
        {id:10, name:"The Night Café", artist:"Vincent Van Gogh",
            image: Night, grid: "Night10",sizeimg: "size10",},
        {id:11, name:"The Basket of Apples", artist:"Paul Cézanne",
            image: Basket, grid: "Basket11",sizeimg: "size11",},
        {id:12, name:"The Boy in the Red Vest", artist:"Paul Cézanne",
            image: Boy, grid: "Boy12",sizeimg: "size12",},
        {id:13, name:"Arnolfini Portrait", artist:"Jan van Eyck",
            image: Arnolfini, grid: "Arnolfini13",sizeimg: "size13",},
        {id:14, name:"Mona Lisa", artist:"Leonardo da Vinci",
            image: Mona, grid: "Mona14",sizeimg: "size14",},
        {id:15, name:"The Swing", artist:"Jean-Honoré Fragonard",
            image: Swing, grid: "Swing15",sizeimg: "size15",},
        
    ]
    return(
        <div id="arraydiv">
        {arrayOfimages.map((images) => {
            return(
                
                <Link to={`/startslideshow/${images.id}/${images.name}`} key={images.id}
                 id="imgdiv" className={images.grid}>
                <img id="imgpic" className={images.sizeimg} src={images.image} />
                <h3 id="nameimg">{images.name}</h3>
                <p id="artist">{images.artist}</p>
                </Link>
                
            )
        })}
        </div>
    )
} 

export default Galleria