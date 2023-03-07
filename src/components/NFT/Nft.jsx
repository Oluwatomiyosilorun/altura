import React, { useState } from 'react';
import { CardModal } from '../Modal/CardModal';
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

    {clickedNft && <CardModal isOpen={isModalOpen} onClose={handleCloseModal} title={clickedNft?.name} clickedNft={clickedNft} handlePurchaseClick={handlePurchaseClick}/>}
    </div>
  );
}
