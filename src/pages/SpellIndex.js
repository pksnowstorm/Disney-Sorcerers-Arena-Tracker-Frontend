import React from 'react';
import {useState} from "react";
import {Link} from "react-router-dom";

const SpellIndex = (props) => {
    const [newForm, setNewForm] = useState({
        name: "",
        description: "",
        farm: "",
      });
    
      const handleChange = (event) => {
        setNewForm({ ...newForm, [event.target.name]: event.target.value });
      };
      
      const handleSubmit = (event) => {
        event.preventDefault();
        props.createSpells(newForm);
        setNewForm({
          name: "",
          description: "",
          farm: ""
        });
      };
    
      const loaded = () => {
        return props.spells.map((spell) => (
          <div key={spell._id} className="spell">
            <Link to={`/spells/${spell._id}`}><h1>{spell.name}</h1></Link>
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
              value={newForm.name}
              name="name"
              placeholder="name"
              onChange={handleChange}
            />
            <input
              type="text"
              value={newForm.description}
              name="description"
              placeholder="description"
              onChange={handleChange}
            />
            <input
              type="text"
              value={newForm.farm}
              name="farm"
              placeholder="farm"
              onChange={handleChange}
            />
            <input type="submit" value="Create Spell" />
          </form>
          {props.spells ? loaded() : loading()}
        </section>
      );
    }
export default SpellIndex