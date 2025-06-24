import '../styles/Navigation.style'
import { NavigationContainer } from "../styles/Navigation.style";
import { FaWhatsapp } from "react-icons/fa";
import { GrUp } from "react-icons/gr";

function Navigation() {
    return (
        <NavigationContainer>
            <div className='arrow_icon'>
                <i onClick={() => { window.scrollTo({ top: 0, left: 0, behavior: 'smooth' }); }}><GrUp /></i>
            </div>
            <div className='wpp_icon'> 
                <a href="https://wa.me/5516992228343?text=Ol%C3%A1%20Rafael%2C%20gostaria%20de%20uma%20cota%C3%A7%C3%A3o%20dos%20servi%C3%A7os.">
                    <i><FaWhatsapp /></i>
                </a>
            </div>
        </NavigationContainer>
    );
}

export default Navigation;