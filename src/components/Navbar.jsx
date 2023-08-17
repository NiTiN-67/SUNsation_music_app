import '../stylesheet/Navbar.css';
export const Navbar = () => {
    return (
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
                <form class="d-flex" role="search">
                    <input type="text" class="form-control me-2 searchIn" placeholder="Search..." aria-label="Search..." />
                    <button class="btn btn-success" type="submit" >Search</button>
                </form>
            </div>
        </nav>
    )
}