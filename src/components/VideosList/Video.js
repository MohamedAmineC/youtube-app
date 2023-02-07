
const Video = (props) => {
    const {video} = props
    return(
        <div className="video">
                        <a href={video.url} target="_blank" rel="noreferrer">

                        <div className="video-thumbnail">
                            <img src={video.img} alt={video.title} />
                            <p className="length">{video.length}</p>
                        </div>
                        <div className="video-content">
                            <div className="author-profile">
                                <img src={video.authorUrl} alt={video.author} title={video.author} />
                            </div>
                            <div className="video-info">
                                <h3>{video.title}</h3>
                                <a href={video.authorUrl} targget="_blank" rel="noreferrer">{video.author}</a>
                                <p>{video.vues} vues . il y a {video.date}</p>
                            </div>
                        </div>
                        </a>
        </div>
    )
}
export default Video;