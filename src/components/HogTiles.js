import {useState} from "react";
function HogTiles({name,specialty,greased,weight,highestMedal, image}) {
    const [clickState, setClickState] = useState(false)

    function handleClick () {
        setClickState(!clickState)
    }
    return (
        <div className="ui grid container">
            <h4 className="ui eight wide column">{name}</h4>
            <img src={image} alt="pig" className="ui eight wide column"></img>
            <button onClick={handleClick} className="ui eight wide column" >Show Details</button>
            {clickState ? (<div id="details">
            <p className="ui eight wide column">{greased}</p>
            <p className="ui eight wide column">{specialty}</p>
            <p className="ui eight wide column">{weight}</p>
            <p className="ui eight wide column">{highestMedal}</p>
            </div> ) : "" }
            
            
        </div>
    )
}



export default HogTiles