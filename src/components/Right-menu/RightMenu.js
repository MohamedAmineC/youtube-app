import CategoriesMenu from '../Categories-menu/Categories-menu';
import VideosList from '../VideosList/VideosList';
import './RightMenu.css';

const RightMenu = () => {
    const categories = [
        'Tous',
'Actualités',
'En direct',
'Musique',
'Comédie à sketch',
'Jeux-vidéos',
'Jazz',
'Chill-out',
'Destinations touristiques',
'Musique new age',
'Histoire',
'Podcast',
'Pluies',
'Animation',
'Musique pour enfants',
'Films',
'Séries',
'Images',
'Vidéos',
'exemples',
'Histoire',
'Podcast',
'Pluies',
'Animation',
'Musique pour enfants',
'Films',
'Séries',
'Images',
'Vidéos',
'exemples'
]
    const videos = [
    {
        title: 'Try me first',
        url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        img: 'https://images.unsplash.com/photo-1489389944381-3471b5b30f04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
        author: 'he is the author',
        authorProfile: 'https://images.unsplash.com/photo-1517594632980-535c0c33173d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80',
        authorUrl:'https://www.youtube.com/@stalkerna2437',
        vues: '8.2k',
        date: '4 heures',
        length: '4:35'
    },
    ]
    return(
        <div id="column-2">  
            <CategoriesMenu categories={categories} />
            <VideosList videos={videos} />
        </div>
    )
}
export default RightMenu;