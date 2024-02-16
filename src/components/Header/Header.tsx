import React from 'react';
import styles from './Header.module.scss';

export const Header = () => {
	return (
		<header className={styles.header}>
			<h1 className={styles.header__title}>Лаборатория</h1>
			<div className={styles.header__image}>
				<img src='images/main_bgc.png' alt='laboratory' />
			</div>
			<p className={styles.header__description}>
				Наша лаборатория готова провести комплексную наладку ваших электроустановок и/или
				оборудования и предоставить полный пакет документов, необходимых для их успешного
				запуска и надёжной работы.
			</p>
			<button type='button' className={styles.header__button}>
				Подробнее
			</button>
		</header>
	);
};
