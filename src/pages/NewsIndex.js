import React from 'react';
import {useState} from "react";
import {Link} from "react-router-dom";

const NewsIndex = (props) => {
    const [newForm, setNewForm] = useState({
        date: "",
        description: "",
      });
    
      const handleChange = (event) => {
        setNewForm({ ...newForm, [event.target.name]: event.target.value });
      };
      
      const handleSubmit = (event) => {
        event.preventDefault();
        props.createNews(newForm);
        setNewForm({
          date: "",
          description: "",
        });
      };
    
      const loaded = () => {
        return props.news.map((newNews) => (
          <div key={newNews._id} className="newNews">
            <Link to={`/news/${newNews._id}`}><h1>{newNews.date}</h1></Link>
          </div>
        ));
      };
    
      const loading =() => {
        return <h1>Loading...</h1>
      };
    
      return (
        <section>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={newForm.date}
              name="date"
              placeholder="date"
              onChange={handleChange}
            />
            <input
              type="text"
              value={newForm.description}
              name="description"
              placeholder="description"
              onChange={handleChange}
            />
            <input type="submit" value="Create News" />
          </form>
          {props.news ? loaded() : loading()}
        </section>
      );
    }
export default NewsIndex