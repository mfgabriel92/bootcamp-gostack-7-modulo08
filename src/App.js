import React, { useState, useEffect } from 'react'

const App = () => {
  const [tech, setTech] = useState([])
  const [newTech, setNewTech] = useState('')

  useEffect(() => {
    const techs = localStorage.getItem('techs')

    if (tech) setTech(JSON.parse(techs))

    return () => console.log('Unmounted')
  }, [])

  useEffect(() => {
    localStorage.setItem('techs', JSON.stringify(tech))
  }, [tech])

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
