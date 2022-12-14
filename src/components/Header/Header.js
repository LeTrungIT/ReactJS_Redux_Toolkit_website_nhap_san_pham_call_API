import React from 'react';
import styles from './Header.module.scss';

function Header() {
    return (
        <div className={styles.headerContainer}>
            <div className={styles.projectHeader}>
                <nav className={styles.headerNavbar}>
                    <ul className={styles.headerMenu}>
                        <li className={styles.headerItem}>Thông báo</li>
                        <li className={styles.headerItem}>Vào cửa hàng</li>
                        <li className={`${styles.headerItem} ${styles.hasDivide}`}>Kết nối</li>
                    </ul>
                    <ul className={styles.headerMenu}>
                        <li className={styles.headerItem}>Đăng ký</li>
                        <li className={`${styles.headerItem} ${styles.hasDivide}`}>Đăng nhập</li>
                    </ul>
                </nav>
                <div className={styles.projectName}>Project website quản lý sản phẩm bằng REDUX+mockAPI</div>
            </div>
        </div>
    );
}

export default Header;
