import React, { useState, useEffect } from 'react';
import { Logo } from './components/Logo/Logo';
import { Nft } from './components/NFT/Nft';
import s from './style.module.css'

function App() {
  const [nfts, setNfts] = useState([]);

  useEffect(() => {
    async function fetchNfts(){
      const response = await fetch('https://api.opensea.io/api/v1/assets?owner=0x5b3256965e7c3cf26e11fcaf296dfc8807c01073');
      const data = await response.json();
      setNfts(data.assets);
    };
    fetchNfts();
  }, []);

  console.log(nfts, 'nfts');

  return (
    <div className={s.main_container}>
      <div className={s.half_banner} style={{
        background: nfts
            ? `linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)),
            url("${nfts[0]?.collection?.large_image_url}") no-repeat center / cover`
            : "black",
        }}>
        <Logo title='Purchase' />
      </div>
    
      <div>
        <Nft nft={nfts}/>
      </div>
    </div>
  );
}

export default App;