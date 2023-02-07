import CategoriesMenu from '../Categories-menu/Categories-menu';
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
    return(
        <div id="column-2">  
            <CategoriesMenu categories={categories} />
        </div>
    )
}
export default RightMenu;