import { Modal } from "./Modal";
import s from '../NFT/style.module.css'

export function CardModal({ isOpen, onClose, title, clickedNft, handlePurchaseClick }) {
    return (
      <Modal onClose={onClose} isOpen={isOpen} title={title}>
        <div className={s.modal_children}>
          <p>Owners Address: <span>{clickedNft?.creator?.address }</span></p>
          <p>Description: <span>{clickedNft?.asset_contract?.description || 'It\'s a fine piece of Art '}</span></p>
          <div className={s.button}>
            <button onClick={handlePurchaseClick}>Purchase</button>
          </div>
        </div>
      </Modal>
    );
  }