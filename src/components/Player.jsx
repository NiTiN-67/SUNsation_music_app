import '../stylesheet/Player.css';
export const Player = ({ fn, song }) => {
    return (<div className='pBody'>

        <button onClick={() => {
            fn(false, null);
        }} className="btn btn-outline-secondary m-3">Back </button>
        <br />
        <br />
        <p className="text-center m-3">
            <img src={song.artworkUrl100} height={400} width={400} alt="artist img" />
            <br />
            Artist Name: <b>{song.artistName}</b> <br />
            Track Name: <b>{song.trackName}</b>
        </p>
        <div className="row text-center">
            <div className="col-2"></div>
            <div className="row col-8 text-center">
                <audio controls>
                    <source src={song?.previewUrl} type="audio/mp4" />
                    Your browser does not support the audio  element
                </audio>
            </div>
            <div className="col-2"></div>
        </div>
    </div>
    )
}