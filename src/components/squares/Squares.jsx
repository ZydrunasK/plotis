import { useContext } from 'react';
import s from './squares.module.css';
import { GlobalContext } from '../../context/GlobalContext';

export function Squares() {

    const {numOfSqr, numOfCol} = useContext(GlobalContext);

    const sqrArr = Array.from({length: numOfSqr}, () => '')
    const colArr = Array.from({length: numOfCol}, () => '')
    
    return (
        <>
        {colArr.map(() => <div key={Math.random()*1000} className={s.col}>
            {sqrArr.map(( _ , i) => <div key={i} className={s.sqr}></div>)}
        </div>)}
        </>
    )
}

// sqrArr.map(( _ , i) => <div key={i} className={s.sqr}></div>)