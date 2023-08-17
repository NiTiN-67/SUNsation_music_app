import { Search } from "../components/Search"
import { Songs } from "../components/Songs";
import { getSongs } from "../services/api-client";

export const SearchPage = ()=>{
    const getArtistName = (artistName)=>{
        console.log("Artist Name : ", artistName);
        getSongs(artistName);
    }
    return(
        <div className = "container">
            <h1 className="alert alert-info text-center">SUNsation</h1>
        <Search fn = {getArtistName}/>
        <Songs/>
    </div>);
}