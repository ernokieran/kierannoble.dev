import linkedin from '../../assets/social/linkedin.svg';
import email from '../../assets/social/email.svg';
const version = 'v1.0.0';

function Footer() {
    return (
        <footer className="footer">
            <div className="seperator"></div>
            <div className="logo logo--default"></div>
            <div className="footer__contact">
                <a href="mailto:howdy@kierannoble.dev">howdy@kierannoble.dev</a>
            </div>
            <div className="footer__contact-note">Feel free to drop me an email, I'd ❤️ to hear from you!</div>
            <div className="footer__socialLinks">
                <a href="https://www.linkedin.com/in/kierannoble/" className="socialLink">
                    <img className="socialLink__image" src={linkedin} alt="LinkedIn" loading="lazy" decoding="async" />
                </a>
                {/* <a href="https://twitter.com/aylokieran" className="socialLink">
                    <img className="socialLink__image" src="/assets/social/twitter.svg" alt="Twitter" loading="lazy" decoding="async" />
                </a>
                <a href="https://t.me/aylokieran" className="socialLink">
                    <img className="socialLink__image" src="/assets/social/telegram.svg" alt="Telegram" loading="lazy" decoding="async" />
                </a> */}
                <a href="mailto:howdy@kierannoble.dev" className="socialLink">
                    <img className="socialLink__image" src={email} alt="Email" loading="lazy" decoding="async" />
                </a>
            </div>
            <div className="footer__version">{version}</div>
            {/* TO DO: dynamic version */}
        </footer>
    );
}

export default Footer