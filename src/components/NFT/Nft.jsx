import React, { useState } from 'react';
import { Modal } from '../Modal/Modal';
import s from './style.module.css'

export function Nft({ nft }) {
    const [clickedNft, setClickedNft] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };
    
    const handleNftClick = (nftItem) => {
        setClickedNft(nftItem);
        setIsModalOpen(true);
    };

    const handlePurchaseClick = () => {
        window.open(clickedNft.permalink, '_blank');
    };

  return (
      <div className={s.container}>
        {nft.map((nftItem) => (
            <div key={nftItem.id} className={s.card} onClick={() => handleNftClick(nftItem)}>
                    <img src={nftItem?.asset_contract?.image_url || nftItem?.image_url} alt={nftItem?.name} />
                    <div className={s.description}>
                        <h3>{nftItem?.name}</h3>
                    </div>
            </div>
        ))}

    {clickedNft &&
        <Modal onClose={handleCloseModal} isOpen={isModalOpen} title={clickedNft?.name}>
            <div className={s.modal_children}>
                <p>Owners Address: <span>{clickedNft?.creator?.address }</span></p>
                <p>Description: <span>{clickedNft?.asset_contract?.description || 'It\'s a fine piece of Art '}</span></p>
                <div className={s.button}>
                    <button onClick={handlePurchaseClick}>Purchase</button>
                </div>
            </div>
        </Modal>
    }
    </div>
  );
}
