import { Button } from '../buttons/Button';
import s from './main.module.css';

export function Main() {
    return (
        <main className={s.main} >
            <section className={`${s.container} ${s.border}`}>
                <div className={`${s.plotis} ${s.border}`}>
                    <p>Plotis</p>
                    <Button text={'+'}/>
                    <span className={s.span}>1</span>
                    <Button text={'-'}/>
                </div>
                <div className={`${s.aukstis} ${s.border}`}>
                        <p>Aukštis</p>
                        <Button text={'+'}/>
                        <span className={s.span}>1</span>
                        <Button text={'-'}/>
                </div>
                <div className={`${s.lenta} ${s.border}`}>
                </div>
            </section>
        </main>
    )
}