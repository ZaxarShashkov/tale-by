import React from 'react';
import style from './Footer.module.scss';
import Logo from '../../static/logo.png';
import instagramm from '../../static/Link - Instagram.svg';
import facebook from '../../static/Link - Facebook.svg';

export const Footer = () => {
	return (
		<footer className={style.footer}>
			<div className={style.footer__contact}>
				<img src={Logo} alt='Logo' />
				<p className={style.footer__description}>
					Разнообразный и богатый опыт постоянный количественный рост и сфера нашей
					активности позволяет оценить значение дальнейших направлений развития. Товарищи!
				</p>
				<div className={style.footer__social}>
					<img src={instagramm} alt='instagramm' />
					<img src={facebook} alt='facebook' />
					<span className={style.footer__text}> Присоединяйтесь 😉</span>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
