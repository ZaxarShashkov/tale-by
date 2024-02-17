import React from 'react';
import styles from './Main.module.scss';
import { TypeOfTest } from '..';
import { ITest } from '../TypeOfTest/TypeOfTest';

const tests = [
	{ id: 1, title: 'Электрофизические измерения (ЭФИ)' },
	{ id: 2, title: 'Высоковольтные испытания' },
	{ id: 3, title: 'Наладка электрооборудования промышленных предприятий' },
	{ id: 4, title: 'Специальные виды работ' },
];

export const Main = () => {
	return (
		<main className={styles.main}>
			<h2 className={styles.main__title}>
				Виды <span className={styles.main__title_hl}>Испытаний</span>
			</h2>
			{tests?.map((test: ITest) => {
				return <TypeOfTest title={test.title} id={test.id} key={test.id} />;
			})}
		</main>
	);
};
