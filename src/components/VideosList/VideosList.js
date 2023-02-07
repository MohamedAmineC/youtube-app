import './VideosList.css';
import Video from './Video';

const VideosList = (props) => {
    const {videos} = props;
    const handleHover = (e) => {
        e.target.innerHTML = 'Maintenez la souris sur la vidéo pour lancer la lécture'
    }
    return (
        <div id='video-list'>
            <ul>
                {videos.map((video,index) => 
                   ( 
                    <Video key={index} video={video} />
                   ))}
            </ul>
        </div>
    )
}
export default VideosList;