import React, { useState } from 'react';
import { Link } from 'gatsby';
import styles from './styles.module.scss';
import cx from 'classnames';

const Header = () => {
    const [hide, setHide] = useState(true);
    const toggle = () => {
        setHide(!hide);
    };
    return (
        <div id='header' className={styles.header}>
            <div id='container' className={styles.container}>
                <div id='header-items' className={styles.items}>
                    <div id='toggle' className={styles.toggle} onClick={toggle}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div id='headline' className={styles.infoItem}>
                        <p className={styles.headline}>Hathaitorn Rojnirun</p>
                    </div>
                </div>
                <ul id='nav-links' className={cx(styles.navlinks, { [styles.active]: !hide })}>
                    <li><Link to='/'><button className={styles.navlink}>About Me</button></Link></li>
                    <li><Link to='/skills'><button className={styles.navlink}>Skills</button></Link></li>
                    <li><Link to='/portfolio'><button className={styles.navlink}>Portfolio</button></Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Header;