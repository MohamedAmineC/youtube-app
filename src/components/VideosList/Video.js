
const Video = (props) => {
    const {video} = props
    return(
        <div className="video">
                        <a href={video.url} target="_blank" rel="noreferrer">

                        <div className="video-thumbnail" style={{
                            backgroundImage: `url(${video.img})`
                        }}>
                            <p className="length">{video.length}</p>
                            <p className="hover">Maintenez la souris sur la vidéo pour lancer la lecture</p>
                        </div>
                        <div className="video-content">
                            <div className="author-profile">
                                <img src={video.authorProfile} alt={video.author} />
                            </div>
                            <div className="video-info">
                                <h3>{video.title}</h3>
                                <a href={video.authorUrl} targget="_blank" rel="noreferrer">{video.author}</a>
                                <p>{video.vues} vues . il y a {video.date}</p>
                                
                            </div>
                        </div>
                        </a>
                        <div className="video-info-hover">
                                    <div>
                                        <i class="bi bi-clock"></i>
                                        <p>à regarder plus tard</p>
                                    </div>
                                    <div>
                                        <i class="bi bi-list-check"></i>
                                        <p>Ajouter à la file d'attente</p>
                                    </div>
                        </div>
        </div>
    )
}
export default Video;