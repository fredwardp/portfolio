import "./Nav.css"
import { Link, useLocation} from "react-router-dom";
import {useNavColor } from "../context";
import { useState } from "react";
import ColorMode from "../ColorMode/ColorMode";

const Nav: React.FC = () => {
    const [colorPopup, setColorPopup] = useState(false)
    const [colorChanger, setColorChanger] = useState({primary: "#183d3d", secondary: "#0b2129", bg:  "#ffffff", text: "#25313c" , text2: "#6d7d8b"}) 
    const { navColor } = useNavColor();

    const location = useLocation();
    const isHome = location.pathname === "/"


    return (  
        <nav className="container">
        <Link style={{color: !isHome && navColor}} className="logo" to="/">Frederick Pawelzik</Link>
        <div>

        </div>
        <button onMouseEnter={()=> setColorPopup(true)} onMouseLeave={()=> setColorPopup(false)} className="no_btn">
            <article className="color_popup_wrapper">
{colorPopup && <ColorMode colorChanger={colorChanger} setColorChanger={setColorChanger}/>}
            <svg  width="21" height="41" viewBox="0 0 21 41" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_41_2521)">
            <path d="M18.873 20.2881L19.7475 20.2605C19.739 19.9894 19.6052 19.7375 19.3852 19.5787C19.1652 19.4198 18.884 19.372 18.624 19.4492L18.873 20.2881ZM11.2544 12.6695L12.0932 12.9185C12.1704 12.6584 12.1226 12.3772 11.9638 12.1573C11.805 11.9373 11.5531 11.8035 11.282 11.7949L11.2544 12.6695ZM18.624 19.4492C18.1506 19.5898 17.6484 19.6655 17.127 19.6655V21.4155C17.8188 21.4155 18.4887 21.3149 19.122 21.1269L18.624 19.4492ZM17.127 19.6655C14.2275 19.6655 11.877 17.315 11.877 14.4155H10.127C10.127 18.2815 13.261 21.4155 17.127 21.4155V19.6655ZM11.877 14.4155C11.877 13.8941 11.9527 13.3919 12.0932 12.9185L10.4156 12.4205C10.2276 13.0538 10.127 13.7237 10.127 14.4155H11.877ZM11.002 13.5405C11.0772 13.5405 11.1522 13.5417 11.2269 13.5441L11.282 11.7949C11.189 11.792 11.0956 11.7905 11.002 11.7905V13.5405ZM4.00195 20.5405C4.00195 16.6745 7.13596 13.5405 11.002 13.5405V11.7905C6.16946 11.7905 2.25195 15.708 2.25195 20.5405H4.00195ZM11.002 27.5405C7.13596 27.5405 4.00195 24.4065 4.00195 20.5405H2.25195C2.25195 25.373 6.16946 29.2905 11.002 29.2905V27.5405ZM18.002 20.5405C18.002 24.4065 14.8679 27.5405 11.002 27.5405V29.2905C15.8344 29.2905 19.752 25.373 19.752 20.5405H18.002ZM17.9984 20.3156C18.0008 20.3903 18.002 20.4652 18.002 20.5405H19.752C19.752 20.4469 19.7505 20.3535 19.7475 20.2605L17.9984 20.3156Z" fill={!isHome ?navColor : "var(--main-color)"}/>
            </g>
            <defs>
            <clipPath id="clip0_41_2521">
            <rect width="21" height="39.9851" fill="white" transform="translate(0 0.540527)"/>
            </clipPath>
            </defs>
        </svg>
            </article>


        </button>
    </nav>
    );
}
 
export default Nav;