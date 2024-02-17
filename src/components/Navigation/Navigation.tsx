import React from 'react';
import styles from './Navigation.module.scss';

const menu = [
	'главная',
	'объекты',
	'о нас',
	'лаборатория',
	'сертификаты',
	'контакты',
	'вакансии',
	'продукция',
	'отзывы',
];

export const Navigation = () => {
	return (
		<nav className={styles.navigation}>
			<ul className={styles.navigation__menu}>
				{menu.map((item) => {
					return (
						<li key={item} className={styles.navigation__menu_item}>
							<a href='#'>{item}</a>
						</li>
					);
				})}
			</ul>
		</nav>
	);
};
