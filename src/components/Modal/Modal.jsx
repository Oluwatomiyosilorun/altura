import { useEffect, useState } from 'react';
import s from './style.module.css'
export function Modal({ isOpen, onClose,title,children }) {
    return (
        <div className={s.modal_overlay} style={{ display: isOpen ? 'block' : 'none' }}>
            <div className={s.modal}>
                <div className={s.modal_header}>
                    <h4>{title}</h4>
                    <button className={s.modal_close} onClick={onClose}>
                        X
                    </button>
                </div>
                {children}
            </div>
        </div>
    )
}

