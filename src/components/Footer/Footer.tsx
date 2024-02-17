import React from 'react';
import { Navigation } from '../Navigation/Navigation';
import Logo from '../../static/logo.png';
import instagramm from '../../static/Link - Instagram.svg';
import facebook from '../../static/Link - Facebook.svg';
import prom from '../../static/prom.png';
import energy from '../../static/energy.png';
import test from '../../static/test.png';
import human from '../../static/human.png';
import style from './Footer.module.scss';

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
			<Navigation />
			<div className={style.footer__gallery}>
				<div className={style.footer__gallery_card}>
					<div className={style.footer__gallery_img}>
						<img src={prom} alt='prom' />
						<p className={style.footer__gallery_descr}>Промышленное строительсво</p>
					</div>
					<div className=''>
						<img src={energy} alt='energy' />
						<p className={style.footer__gallery_descr}>Энергетическое строительство</p>
					</div>
				</div>
				<div
					style={{
						width: '100%',
						height: '1px',
						background: '#444',
						marginTop: '10px',
					}}></div>
				<div className={style.footer__gallery_secondcard}>
					<div className={style.footer__gallery_img}>
						<img src={human} alt='human' />
						<p className={style.footer__gallery_descr}>Гражданское строительство</p>
					</div>
					<div className=''>
						<img src={test} alt='test' />
						<p className={style.footer__gallery_descr}>Испытательная лаборатория</p>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
