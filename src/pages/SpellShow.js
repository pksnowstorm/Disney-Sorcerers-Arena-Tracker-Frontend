import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

const SpellShow = (props) => {
  const { id } = useParams()
  const navigate = useNavigate()
  const spells = props.spells
  const spell = spells ? spells.find((s) => s._id === id ) : null

  const [ editForm, setEditForm ] = useState(spell)
  const [ isEditing, setIsEditing ] = useState(false)

  useEffect( () => {
    if(spell) {
      setEditForm(spell)
    }
  }, [spell])

  // handling form data change
  const handleChange = (e) => {
    setEditForm( 
      {...editForm, [e.target.name]: e.target.value }
      )
  }
  
  // handling submit event for edit form
  const handleUpdate = (e) => {
    e.preventDefault()
    props.updateSpells(editForm, spell._id)
  }

  const handleEdit = () => {
    setIsEditing(prevState => !prevState)
  }

  const handleDelete = () => {
    props.deleteSpells(spell._id);
    navigate('/');
  }

  const loaded = () => {
    return (
      <>
        <h1>{spell.name}</h1>
        <h2>{spell.description}</h2>
        <h3>{spell.farm}</h3>
        <button onClick={handleEdit}>{ isEditing ? 'Cancel Edit': 'Edit' }</button>
        <button onClick={handleDelete}>Delete</button>
      </>
    )
  };

  const loading = () => {
    return <h1>Loading ...</h1>;
  };

  return (
    <div className="spells">
      { spell ? loaded() : loading() }
      
      { isEditing && 
      <form onSubmit={handleUpdate}>
        <input type="text" 
        value={editForm.name} 
        name="name" 
        placeholder="name" 
        onChange={handleChange} 
        />
        <input
          type="text"
          value={editForm.description}
          name="description"
          placeholder="description"
          onChange={handleChange}
        />
        <input
          type="text"
          value={editForm.farm}
          name="farm"
          placeholder="farm"
          onChange={handleChange}
        />
        <input type="submit" value="Update Spell" />
      </form>
      }
    </div>
  )
}

export default SpellShow