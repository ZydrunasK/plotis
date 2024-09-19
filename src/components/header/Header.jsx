import { useContext } from 'react';
import s from './header.module.css';
import { GlobalContext } from '../../context/GlobalContext';

export function Header() {

    const {numOfCol, numOfSqr, activeCount} = useContext(GlobalContext);

    return (
        <header className={s.header}>
            <div className={s.container}>
                <p className={s.txt}>Plotas: {numOfCol} x {numOfSqr} = {numOfCol * numOfSqr}m&sup2;</p>
                <p className={s.txt}>Iš kurių {activeCount}m&sup2; užimta</p>
            </div>
        </header>
    )
}