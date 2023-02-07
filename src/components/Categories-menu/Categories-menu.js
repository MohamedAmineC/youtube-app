import { NavLink } from "react-router-dom";

const CategoriesMenu = (props) => {
    const {categories} = props;
    return (
        <nav id="category-menu">
                <ul>
                    {categories.map((category,index) => (
                        <NavLink to={`/${category}`} className="category">
                            <li key={index}>{category}</li>
                        </NavLink>
                    ))}
                </ul>
        </nav>
    ) 
}
export default CategoriesMenu;