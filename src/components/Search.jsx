import { useRef } from "react";
import '../stylesheet/Search.css'

export const Search = ({ fn }) => {
    const artist = useRef();
    return (
        <>
            <div className="row">
                <div className="col-10">
                    <input ref={artist} type='text' className="form-control" placeholder="Search..." />
                </div>
                <div className="col-2">
                    <button className="btn btn-success" onClick={() => {
                        fn(artist.current.value);
                    }}>Search</button>
                </div>
            </div>
        </>
    )
}