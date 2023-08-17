// import { useState } from "react";
import {} from "../pages/SearchPage";
export const Song = ({fn,song})=>{
    console.log(song);
    // const [playerFlag,setPlayerFlag] = useState(false)
    const showPlayer = ()=>{
       fn(true,song);
    }
return(<div className="row">
<div className="col-4">
    <img src ={song.artworkUrl100} alt = "artist img"/>
    </div>
    <div className="col-4">

    {song.artistName} {song.trackName}
    </div>
    <div className="col-4">
    <button onClick={showPlayer} className="btn btn-primary">Play</button>
    </div>
    </div>)
}