import React from 'react';
import styles from './styles.module.scss';

const Sidebar = ({ links }) => {
    return (
        <div className={styles.container}>
            <ul>
                {links.map(({link, title}) => (
                    <li><a href={link}>{title}</a></li>
                ))}
            </ul>
        </div>
    )
}

export default Sidebar;