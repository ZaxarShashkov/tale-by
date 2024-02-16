import React from 'react';
import styles from './TypeOfTest.module.scss';
import arrow from '../../static/arrow.svg';

export const TypeOfTest = () => {
	return (
		<>
			<article>
				<div className={styles.test__card}>
					<div className={styles.test__card_arrow}>
						<img src={arrow} alt='' />
					</div>
					<h6 className={styles.test__card_title}>Электрофизические измерения (ЭФИ)</h6>
				</div>

				<div className={styles.test__card_description}>
					<div className={styles.test__card_line}></div>
					<article>
						<p className={styles.test__card_text}>
							Измерение сопротивления изоляции линий и аппаратов, измерение
							сопротивления заземляющих устройств (ЗУ), измерение сопротивления
							молниезащиты, проверка наличия цепи заземления, проверка
							цепи«фаза-нуль», проверка действия расцепителей автоматических
							выключателей (прогрузка)
						</p>
						<div className={styles.test__card_block}>
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
