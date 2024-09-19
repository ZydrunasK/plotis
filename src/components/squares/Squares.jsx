import { useContext, useState } from 'react';
import s from './squares.module.css';
import { GlobalContext } from '../../context/GlobalContext';

export function Squares() {


    const {numOfSqr, numOfCol, data} = useContext(GlobalContext);

    const sqrArr = Array.from({length: numOfSqr}, () => '')
    const colArr = Array.from({length: numOfCol}, () => '')
    
    return (
        <>
        {colArr.map(() => <div key={Math.random()*1000} className={s.col}>
            {sqrArr.map(( _ , i) => <div key={i} data-active={false} className={s.sqr} onClick={data}></div>)}
        </div>)}
        </>
    )
}

// sqrArr.map(( _ , i) => <div key={i} className={s.sqr}></div>)