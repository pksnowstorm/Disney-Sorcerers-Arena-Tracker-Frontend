import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

const ClubShow = (props) => {
  const { id } = useParams()
  const navigate = useNavigate()
  const clubs = props.clubs
  const club = clubs ? clubs.find((c) => c._id === id ) : null

  const [ editForm, setEditForm ] = useState(club)
  const [ isEditing, setIsEditing ] = useState(false)

  useEffect( () => {
    if(club) {
      setEditForm(club)
    }
  }, [club])

  // handling form data change
  const handleChange = (e) => {
    setEditForm( 
      {...editForm, [e.target.name]: e.target.value }
      )
  }
  
  // handling submit event for edit form
  const handleUpdate = (e) => {
    e.preventDefault()
    props.updateClubs(editForm, club._id)
  }

  const handleEdit = () => {
    setIsEditing(prevState => !prevState)
  }

  const handleDelete = () => {
    props.deleteClubs(club._id);
    navigate('/club');
  }

  const loaded = () => {
    return (
      <>
        <h1>{club.name}</h1>
        <h2>{club.members}</h2>
        <h3>{club.clubExpedition}</h3>
        <h3>{club.forbiddenDepths}</h3>
        <h3>{club.siegeOfOlympus}</h3>
        <h3>{club.alliance}</h3>
        <h3>{club.contactInfo}</h3>
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
      { club ? loaded() : loading() }
      
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
          value={editForm.members}
          name="members"
          placeholder="members"
          onChange={handleChange}
        />
        <input
          type="text"
          value={editForm.clubExpedition}
          name="clubExpedition"
          placeholder="clubExpedition"
          onChange={handleChange}
        />
        <input
              type="text"
              value={editForm.forbiddenDepths}
              name="forbiddenDepths"
              placeholder="forbiddenDepths"
              onChange={handleChange}
            />
            <input
              type="text"
              value={editForm.siegeOfOlympus}
              name="siegeOfOlympus"
              placeholder="siegeOfOlympus"
              onChange={handleChange}
            />
             <input
              type="text"
              value={editForm.alliance}
              name="alliance"
              placeholder="alliance"
              onChange={handleChange}
            />
             <input
              type="text"
              value={editForm.contactInfo}
              name="contactInfo"
              placeholder="contactInfo"
              onChange={handleChange}
            />
        <input type="submit" value="Update Club" />
      </form>
      }
    </div>
  )
}

export default ClubShow