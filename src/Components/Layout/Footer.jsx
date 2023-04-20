import { useContext } from 'react';
import { ProjectContext } from '~/Context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';

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
                <a href="https://www.linkedin.com/in/kierannoble/" className="socialLink" style={{ '--socialLink--colour': '0, 119, 181' }}>
                    <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
                <a href="https://twitter.com/aylokieran" className="socialLink" style={{ '--socialLink--colour': '29, 161, 242' }}>
                    <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a href="https://t.me/aylokieran" className="socialLink" style={{ '--socialLink--colour': '42, 171, 238' }}>
                    <FontAwesomeIcon icon={faPaperPlane} />
                </a>
                <a href="mailto:howdy@kierannoble.dev" className="socialLink" style={{ '--socialLink--colour': '66, 103, 178' }}>
                    <FontAwesomeIcon icon={faEnvelope} />
                </a>
            </div>
            <div className="footer__version">{__APP_VERSION__}</div>
        </footer>
    );
}

export default Footer