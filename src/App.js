import React, { useState, useEffect, lazy, Suspense } from 'react'
import { Logo } from './components/Logo/Logo'
import { SearchBar } from './components/SearchBar/SearchBar'
import s from './style.module.css'

const Nft = lazy(() =>
  import('./components/NFT/Nft').then((module) => ({ default: module.Nft }))
)

function App() {
  const [nfts, setNfts] = useState([])
  const [isDataLoaded, setIsDataLoaded] = useState(false)
  const [search, setSearch] = useState('')
  const [noResults, setNoResults] = useState(false)
  const [searched, setSearched] = useState(false)



  async function fetchNfts() {
    const response = await fetch(
      'https://api.opensea.io/api/v1/assets?owner=0x5b3256965e7c3cf26e11fcaf296dfc8807c01073'
    )
    const data = await response.json()
    setNfts(data.assets)
    setIsDataLoaded(true)
  }

  const filteredNfts = nfts.filter((nft) =>
    nft.name.toLowerCase().includes(search.toLowerCase())
  )

  function handleSearch(value) {
    setSearch(value)
    setNoResults(false)
    setSearched(true);
  }

  function goBack() {
    window.location.reload()
  }

  useEffect(() => {
    fetchNfts()
  }, [])

  useEffect(() => {
    if (filteredNfts.length === 0) {
      const timeoutId = setTimeout(() => {
        setNoResults(true)
        setTimeout(() => {
          window.location.reload()
        }, 5000)
      }, 1000)
      return () => clearTimeout(timeoutId)
    }
  }, [filteredNfts])

  return (
    <div className={s.main_container}>
      <div className={s.half_banner}></div>
      <Logo title="Purchase" />
      <SearchBar onSearch={handleSearch} />
      {isDataLoaded && (
        <Suspense fallback={<div className={s.loading}>Loading...</div>}>
          {filteredNfts.length > 0 ? (
            <>
              {searched && <button onClick={goBack} className={s.back}>&#8592; Go Back</button>}
              <Nft nft={filteredNfts} />
            </>
          ) : (
            noResults && (
              <div className={s.no_results}>No search results found</div>
            )
          )}
        </Suspense>
      )}
    </div>
  )
}

export default App
