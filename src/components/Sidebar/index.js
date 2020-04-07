import React from 'react';
import styles from './styles.module.scss';

const Sidebar = () => {
    const list=["Overview", "Research", "Design", "Testing", "Final"];
    return (
        <div className={styles.container}>
            <ul className={styles.linkList}>
                {list.map(link => (
                    <li><a href={`#${link}`}>{link}</a></li>
                ))}
            </ul>
        </div>
    )
}

export default Sidebar;