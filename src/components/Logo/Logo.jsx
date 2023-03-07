import s from './style.module.css'
export function Logo ({title, subtitle}){
    return(
        <div className={s.container}>
            <div className={s.title}>{title}</div>
        </div>
    )
}