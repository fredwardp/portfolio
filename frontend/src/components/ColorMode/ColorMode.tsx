import { useEffect} from "react";
import "./ColorMode.css"
import colorPairs from "./colors.js"

const ColorMode = ({colorChanger, setColorChanger}) => {

console.log(colorChanger);

useEffect(() => {
    document.documentElement.style.setProperty("--main-color-gradient", `radial-gradient(circle at top left, ${colorChanger.primary}, ${colorChanger.secondary})` );
    document.documentElement.style.setProperty("--main-color", `${colorChanger.primary}`);
    document.documentElement.style.setProperty("--main-bg-color", `${colorChanger.bg}`);
    document.documentElement.style.setProperty("--dark-text-color", `${colorChanger.text}`);
    document.documentElement.style.setProperty("--bright-text-color", `${colorChanger.text2}`);
})

    return ( <article className="color_popup">
        {colorPairs.map((color) => (
            <div onMouseEnter={() => setColorChanger({primary: color.primary, secondary: color.secondary, bg: color.bg, text: color.text, text2: color.text2})} className="color_dot" style={{background: `radial-gradient(circle at top left, ${color.primary}, ${color.secondary})`}}></div>
        ))}
    </article> );
}
 
export default ColorMode;