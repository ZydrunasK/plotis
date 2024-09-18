import s from './main.module.css';

export function Main() {
    return (
        <main className={s.main} >
            <section className={s.container}>
                <div className={s.plotis}>
                    <p>Plotis</p>
                    <button>+</button>
                    <span></span>
                    <button>-</button>
                </div>
                <div className={s.aukstis}>
                    <p>Aukštis</p>
                    <button>+</button>
                    <span></span>
                    <button>-</button>
                </div>
                <div className={s.lenta}>
        
                </div>
            </section>
        </main>
    )
}