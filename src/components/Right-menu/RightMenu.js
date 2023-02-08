import CategoriesMenu from '../Categories-menu/Categories-menu';
import VideosList from '../VideosList/VideosList';
import './RightMenu.css';
import { videos,categories } from './data';

const RightMenu = () => {    
    return(
        <div id="column-2">  
            <CategoriesMenu categories={categories} />
            <VideosList videos={videos} />
        </div>
    )
}
export default RightMenu;