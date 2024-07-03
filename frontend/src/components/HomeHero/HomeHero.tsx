import "./HomeHero.css"


const HomeHero = () => {
    return ( <header className="home_header">
    <div className="container">
        <article className="home_hero_content">
            <p className="heading_description">Mein Name ist</p>
            <h1>Frederick Pawelzik</h1>
            <p className="hero_fullstack">fullstack entwickler</p>
            <p className="hero_description">Willkommen auf meiner Seite. Ich möchte euch gerne etwas über meinen Werdegang erzählen und zeigen, welche Fähigkeiten und Projekte ich bisher entwickelt habe.</p>
            <a className="btn" href="mailto:frederickpawelzik@gmail.com">Contact me</a>
            <div>
                <a href="https://github.com/fredwardp" target="_blank">Github</a>
                <a href="https://www.linkedin.com/in/frederick-pawelzik-767171264/" target="_blank">LinkedIn</a>
                <a href="/Lebenslauf_Frederick_Pawelzik.pdf" className="download-button" download="Lebenslauf_Frederick_Pawelzik.pdf">DownloadCV</a>
            </div>
        </article>
        <article className="home_hero_bg">
            <div className="green_small_div"></div>
            <div className="green_small_div"></div>
            <div className="green_big_div"></div>
        </article>
    </div>
    <img className="home_hero_img" src="/img/home_hero_img.png" alt="" />
</header>  );
}
 
export default HomeHero;