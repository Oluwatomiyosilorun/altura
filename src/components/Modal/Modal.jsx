import { useEffect, useState } from 'react';
import s from './style.module.css'
export function Modal({ isOpen, onClose,title,children }) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        setIsModalOpen(isOpen);
    }, [isOpen]);

    return (
        <div className={s.modal_overlay} style={{ display: isModalOpen ? 'block' : 'none' }}>
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

