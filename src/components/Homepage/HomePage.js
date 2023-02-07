import { useState } from "react";
import Header from "../Header/Header";
import LeftMenu from "../Left-menu/LeftMenu"
import RightMenu from "../Right-menu/RightMenu";
import './HomePage.css';

const HomePage = () => {
    const [visible,setVisible] = useState(false);
    const toggle = () => {
        visible ? setVisible(false) : setVisible(true);
    }
    return (
        <>
            <Header toggle={toggle} />
            <main>
                <LeftMenu visible={visible} />
                <RightMenu />
            </main>
        </>
    )
}
export default HomePage;