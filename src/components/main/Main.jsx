import { Button } from '../buttons/Button';
import s from './main.module.css';

export function Main() {
    return (
        <main className={s.main} >
            <section className={s.container}>
                <div className={s.plotis}>
                    <p>Plotis</p>
                    <Button text={'+'}/>
                    <span></span>
                    <Button text={'-'}/>
                </div>
                <div className={s.aukstis}>
                    <p>Aukštis</p>
                    <Button text={'+'}/>
                    <span></span>
                    <Button text={'-'}/>
                </div>
                <div className={s.lenta}>
        
                </div>
            </section>
        </main>
    )
}