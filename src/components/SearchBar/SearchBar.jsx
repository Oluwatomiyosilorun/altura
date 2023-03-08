import s from './style.module.css'
import { useState } from 'react'

export function SearchBar({ onSearch }) {
  const [value, setValue] = useState('')

  function submit(e) {
    if (e.key === 'Enter' && e.target.value.trim() !== '') {
      onSearch(e.target.value.trim())
      setValue('')
    }
  }

  function handleChange(e) {
    setValue(e.target.value)
  }

  return (
    <div className={s.search}>
      <span className={s.icon}>&#x1F50D;</span>
      <input
        onKeyUp={submit}
        onChange={handleChange}
        className={s.input}
        type="text"
        placeholder="Search nft by name"
        value={value}
      />
    </div>
  )
}
