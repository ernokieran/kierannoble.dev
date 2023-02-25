import avatar from '@/me.webp';

function Intro() {
    return (
        <div>
            <header className="intro">
                <img className="intro__avatar" src={avatar} height="150" alt="A photo of Kieran Noble" loading="lazy" decoding="async" />
                <div className="intro__text-container">
                    <div className="intro__name">Howdy, I'm Kieran</div>
                    <div className="intro__title">Full Stack Developer</div>
                    <div className="seperator seperator--small"></div>
                    <div className="intro__description">Hello There! I'm an aspiring and enthusiastic full stack web experience
                        developer 🙋&zwj;♂️</div>
                </div>
            </header>
            <div className="seperator"></div>
        </div>
    );
}

export default Intro