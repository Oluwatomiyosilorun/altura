import React, { useState, useEffect } from 'react';
import { Logo } from './components/Logo/Logo';
import { Nft } from './components/NFT/Nft';
import s from './style.module.css'

function App() {
  const [nfts, setNfts] = useState([]);

  async function fetchNfts(){
    const response = await fetch('https://api.opensea.io/api/v1/assets?owner=0x5b3256965e7c3cf26e11fcaf296dfc8807c01073');
    const data = await response.json();
    setNfts(data.assets);
  };

  useEffect(() => {
    fetchNfts();
  }, []);

  return (
    <div className={s.main_container}>
      <div className={s.half_banner}>
        <img src={`${nfts[0]?.collection?.large_image_url}`} alt="banner" className={s.half_banner_image} />
      </div>
      <Logo title='Purchase' />    
      <div>
        <Nft nft={nfts}/>
      </div>
    </div>
  );
}

export default App;