import { useContext } from 'react';
import { ProjectContext } from '~/Context';
import linkedin from '@/social/linkedin.svg';
import twitter from '@/social/twitter.svg';
import telegram from '@/social/telegram.svg';
import email from '@/social/email.svg';

function Footer() {
    const { project } = useContext(ProjectContext);

    return (
        <footer className="footer">
            {
                project != 'home' ? '' : <div className="seperator"></div>
            }
            <div className="logo logo--default"></div>
            <div className="footer__contact">
                <a href="mailto:howdy@kierannoble.dev">howdy@kierannoble.dev</a>
            </div>
            <div className="footer__contact-note">Feel free to drop me an email, I'd ❤️ to hear from you!</div>
            <div className="footer__socialLinks">
                <a href="https://www.linkedin.com/in/kierannoble/" className="socialLink">
                    <img className="socialLink__image" src={linkedin} alt="LinkedIn" loading="lazy" decoding="async" />
                </a>
                <a href="https://twitter.com/aylokieran" className="socialLink">
                    <img className="socialLink__image" src={twitter} alt="Twitter" loading="lazy" decoding="async" />
                </a>
                <a href="https://t.me/aylokieran" className="socialLink">
                    <img className="socialLink__image" src={telegram} alt="Telegram" loading="lazy" decoding="async" />
                </a>
                <a href="mailto:howdy@kierannoble.dev" className="socialLink">
                    <img className="socialLink__image" src={email} alt="Email" loading="lazy" decoding="async" />
                </a>
            </div>
            <div className="footer__version">{__APP_VERSION__}</div>
        </footer>
    );
}

export default Footer