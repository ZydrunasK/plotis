import { useContext } from 'react';
import { Button } from '../buttons/Button';
import s from './main.module.css';
import { GlobalContext } from '../../context/GlobalContext';

export function Main() {

    const { addCol, removeCol, removeSqr, addSqr, numOfCol, numOfSqr, click } = useContext(GlobalContext);
    return (
        <main className={s.main} onClick={click}>
            <section className={`${s.container} ${s.border}`}>
                <div className={`${s.plotis} ${s.border}`}>
                    <p>Plotis</p>
                    <Button text={'-'} onClick={removeCol}/>
                    <span className={s.span}>{numOfCol}</span>
                    <Button text={'+'} onClick={addCol}/>
                </div>
                <div className={`${s.aukstis} ${s.border}`}>
                        <p>Aukštis</p>
                        <Button text={'+'} onClick={addSqr}/>
                        <span className={s.span}>{numOfSqr}</span>
                        <Button text={'-'} onClick={removeSqr}/>
                </div>
                <div className={`${s.lenta} ${s.border}`}>

                </div>
            </section>
        </main>
    )
}