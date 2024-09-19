/* eslint-disable react/prop-types */
import s from './button.module.css';


export function Button({ text, onClick }) {
    return (
        <button className={s.btn} type='button' onClick={onClick}>{text}</button>
    )
}