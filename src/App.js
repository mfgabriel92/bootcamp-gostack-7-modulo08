import React, { useState } from 'react'

const App = () => {
  const [tech, setTech] = useState(['ReactJS', 'React Native'])
  const [newTech, setNewTech] = useState('')

  const handleAdd = () => {
    setTech([...tech, newTech])
    setNewTech('')
  }

  const handleChange = ({ target }) => {
    setNewTech(target.value)
  }

  return (
    <ul>
      {tech.map(t => (
        <li key={t}>{t}</li>
      ))}
      <input type="text" value={newTech} onChange={handleChange} />
      <button type="button" onClick={handleAdd}>
        Add
      </button>
    </ul>
  )
}

export default App
