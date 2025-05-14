// src/components/SearchBar.jsx
import React from 'react'

/**
 * SearchBar component
 * @param {{ value: string, onChange: (newValue: string) => void, placeholder?: string }} props
 */

export default function SearchBar({ value, onChange, placeholder = 'Buscar...' }) {
  return (
    <div className="search-bar">
      <input
        type="text"
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
      />
    </div>
  )
}