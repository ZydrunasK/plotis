import s from './header.module.css';

export function Header() {
    return (
        <header className={s.header}>
            <div className={s.container}>
                <p className={s.txt}>Plotas: 4m x 4m = 16m2</p>
                <p className={s.txt}>Iš kurių 4m2 užimta</p>
            </div>
        </header>
    )
}