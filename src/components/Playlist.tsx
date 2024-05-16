import { Spotify } from "react-spotify-embed";
import './Playlist.css';
const Playlist = () => {
    return (
    <section className="dark-bg">
        <div className="playlist">
            <Spotify link="https://open.spotify.com/playlist/1tksYPAqeA7BUxJL3RL9aA?si=b4c01db2433c452c" />
        </div>
    </section>
    );
}
export default Playlist