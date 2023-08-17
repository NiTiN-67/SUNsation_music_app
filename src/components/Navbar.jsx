import '../stylesheet/Navbar.css';
import { Search } from './Search';
export const Navbar = () => {
    return (
        <nav id="navbar">
            <div id="logo">
                <img src="https://o.remove.bg/downloads/1a81576e-42d0-4458-a779-9d960da2b11a/download1-removebg-preview.png" alt="" />
            </div>
            <ul>
                <li className="items"><a href="#">Home</a></li>
                <li className="items"><a href="#">Playlist</a></li>
                <li className="items"><a href="#">Your Library</a></li>
                <li className="items"><a href="#">Top Songs</a></li>
            </ul>
            <div className="searchbox">
                <form className="d-flex" role="search">
                    <input type="text" className="form-control me-2 searchIn" placeholder="Search..." aria-label="Search..." />
                    <button className="btn btn-success" type="submit" >Search</button>
                </form>
            </div>
        </nav>
    )
}