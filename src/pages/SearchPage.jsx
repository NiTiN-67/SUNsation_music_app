// import { useEffect,useState } from "react";
// import { Search } from "../components/Search";
// import { Songs } from "../components/Songs";
// import { getSongs } from "../services/api-client";
// import { Player } from "../components/Player";
// import { Navbar } from "../components/Navbar";

// export const SearchPage = ()=>{
//     const[allSongs ,setSongs ] = useState([]);
//     //Component Life Cycle 
//     const [flag,setFlag]= useState(false);
//     const[song,setPlayerSong]= useState(null);
//     const loadSongs = async()=>{
//         setSongs(await getSongs('Latest Songs'));
//     }
//     useEffect(()=>{
//         loadSongs();
//     },[])
//     const togglePlayer = (flag,songarg)=>{
//         setPlayerSong(songarg);
// setFlag(flag);
//     }
//     const getArtistName = async (artistName)=>{
//         console.log("Artist Name : ", artistName);
//          setSongs(await getSongs(artistName));
//     }
// const jsx = <> <Search fn = {getArtistName}/>
//  <Songs fn = {togglePlayer} allsongs = {allSongs} />
// </>

//     return(
//         <>
//         <Navbar/>
//         <div className = "container">
//             {/* <h1 className="alert alert-info text-center">SUNsation</h1> */}
//             {flag?<Player fn ={togglePlayer} song = {song}/>:jsx}
       
//   </div>
//   </>);
// }

import { useEffect, useState } from "react";
import { Search } from "../components/Search";
import { Songs } from "../components/Songs";
import { getSongs } from "../services/api-client";
import { Player } from "../components/Player";
import '../stylesheet/Navbar.css';

export const SearchPage = () => {
    const [allSongs, setSongs] = useState([]);
    //Component Life Cycle 
    const [flag, setFlag] = useState(false);
    const [song, setPlayerSong] = useState(null);
    const loadSongs = async () => {
        setSongs(await getSongs('Latest Songs'));
    }
    useEffect(() => {
        loadSongs();
    }, [])
    const togglePlayer = (flag, songarg) => {
        setPlayerSong(songarg);
        setFlag(flag);
    }
    const getArtistName = async (artistName) => {
        console.log("Artist Name : ", artistName);
        setSongs(await getSongs(artistName));
    }
    const jsx = <> 
        <Songs fn={togglePlayer} allsongs={allSongs} />
    </>

    return (<>
        <nav id="navbar">
            <div id="logo">
                <img src="https://o.remove.bg/downloads/1a81576e-42d0-4458-a779-9d960da2b11a/download1-removebg-preview.png" alt="" />
            </div>
            <ul>
                <li class="items"><a href="#">Home</a></li>
                <li class="items"><a href="#">Playlist</a></li>
                <li class="items"><a href="#">Your Library</a></li>
                <li class="items"><a href="#">Top Songs</a></li>
            </ul>
            <div class="searchbox">
                <div className="container">
                <Search fn={getArtistName} />
                </div>
            </div>
        </nav>
        {flag ? <Player fn={togglePlayer} song={song} /> : jsx}
        {/* <div className="container">
            <h1 className="alert alert-info text-center">SUN_Music</h1>
            {flag ? <Player fn={togglePlayer} song={song} /> : jsx}
        </div> */}
        </>);
}