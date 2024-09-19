import s from './button.module.css';


export function Button({ text }) {
    return (
        <button className={s.btn} type='button'>{text}</button>
    )
}