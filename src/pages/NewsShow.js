import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

const NewsShow = (props) => {
  const { id } = useParams()
  const navigate = useNavigate()
  const news = props.news
  const newNews = news ? news.find((n) => n._id === id ) : null

  const [ editForm, setEditForm ] = useState(news)
  const [ isEditing, setIsEditing ] = useState(false)

  useEffect( () => {
    if(newNews) {
      setEditForm(newNews)
    }
  }, [newNews])

  // handling form data change
  const handleChange = (e) => {
    setEditForm( 
      {...editForm, [e.target.name]: e.target.value }
      )
  }
  
  // handling submit event for edit form
  const handleUpdate = (e) => {
    e.preventDefault()
    props.updateNews(editForm, newNews._id)
  }

  const handleEdit = () => {
    setIsEditing(prevState => !prevState)
  }

  const handleDelete = () => {
    props.deleteNews(newNews._id);
    navigate('/');
  }

  const loaded = () => {
    return (
      <>
        <h1>{newNews.date}</h1>
        <h2>{newNews.description}</h2>
        <button onClick={handleEdit}>{ isEditing ? 'Cancel Edit': 'Edit' }</button>
        <button onClick={handleDelete}>Delete</button>
      </>
    )
  };

  const loading = () => {
    return <h1>Loading ...</h1>;
  };

  return (
    <div className="news">
      { newNews ? loaded() : loading() }
      
      { isEditing && 
      <form onSubmit={handleUpdate}>
        <input type="text" 
        value={editForm.date} 
        name="date" 
        placeholder="date" 
        onChange={handleChange} 
        />
        <input
          type="text"
          value={editForm.description}
          name="description"
          placeholder="description"
          onChange={handleChange}
        />
        <input type="submit" value="Update Person" />
      </form>
      }
    </div>
  )
}

export default NewsShow