import React, { useState } from 'react';
import styles from './TypeOfTest.module.scss';
import arrow from '../../static/arrow.svg';
import classNames from 'classnames/bind';

const cn = classNames.bind(styles);

export const TypeOfTest = (test: any) => {
	const [isVisible, setIsVisible] = useState<boolean>(false);

	const handleClick = () => {
		setIsVisible((isVisible) => !isVisible);
		console.log(isVisible);
	};

	return (
		<>
			<article
				className={cn(styles.test__block, {
					text__block_visible: isVisible,
				})}>
				<div className={styles.test__card}>
					<div className={styles.test__card_arrow} onClick={handleClick}>
						<img src={arrow} alt='' />
					</div>
					<h6 className={styles.test__card_title}>{test.title}</h6>
				</div>

				<div
					className={cn(styles.test__card_description, {
						test__card_description_visible: isVisible,
					})}>
					<div
						className={cn(styles.test__card_line, {
							test__card_line_visible: isVisible,
						})}></div>
					<article>
						<p
							className={cn(styles.test__card_text, {
								test__card_text_visible: isVisible,
							})}>
							Измерение сопротивления изоляции линий и аппаратов, измерение
							сопротивления заземляющих устройств (ЗУ), измерение сопротивления
							молниезащиты, проверка наличия цепи заземления, проверка
							цепи«фаза-нуль», проверка действия расцепителей автоматических
							выключателей (прогрузка)
						</p>
						<div
							className={cn(styles.test__card_block, {
								test__card_block_visible: isVisible,
							})}>
							<a href='#' className={styles.test__card_link}>
								Подробнее
							</a>
						</div>
					</article>
				</div>
			</article>
		</>
	);
};
