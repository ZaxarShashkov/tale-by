import React from 'react';
import styles from './Main.module.scss';
import { TypeOfTest } from '../TypeOfTest/TypeOfTest';

export const Main = () => {
	return (
		<main className={styles.main}>
			<h2 className={styles.main__title}>
				Виды <span className={styles.main__title_hl}>Испытаний</span>
			</h2>
			<TypeOfTest />
			<div className={styles.line}></div>
			<TypeOfTest />
		</main>
	);
};
