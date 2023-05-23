import React from 'react';
import {useState} from "react";
import {Link} from "react-router-dom";

const ClubIndex = (props) => {
    const [newForm, setNewForm] = useState({
        name: "",
        members: "",
        clubExpedition: "",
        forbiddenDepths: "",
        siegeOfOlympus: "",
        alliance: "",
        contactInfo: "",
      });
    
      const handleChange = (event) => {
        setNewForm({ ...newForm, [event.target.name]: event.target.value });
      };
      
      const handleSubmit = (event) => {
        event.preventDefault();
        props.createClubs(newForm);
        setNewForm({
            name: "",
            members: "",
            clubExpedition: "",
            forbiddenDepths: "",
            siegeOfOlympus: "",
            alliance: "",
            contactInfo: ""
        });
      };
    
      const loaded = () => {
        return props.clubs.map((club) => (
          <div key={club._id} className="club">
            <Link to={`/club/${club._id}`}><h1>{club.name}</h1></Link>
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
              value={newForm.members}
              name="members"
              placeholder="members"
              onChange={handleChange}
            />
            <input
              type="text"
              value={newForm.clubExpedition}
              name="clubExpedition"
              placeholder="clubExpedition"
              onChange={handleChange}
            />
            <input
              type="text"
              value={newForm.forbiddenDepths}
              name="forbiddenDepths"
              placeholder="forbiddenDepths"
              onChange={handleChange}
            />
            <input
              type="text"
              value={newForm.siegeOfOlympus}
              name="siegeOfOlympus"
              placeholder="siegeOfOlympus"
              onChange={handleChange}
            />
             <input
              type="text"
              value={newForm.alliance}
              name="alliance"
              placeholder="alliance"
              onChange={handleChange}
            />
             <input
              type="text"
              value={newForm.contactInfo}
              name="contactInfo"
              placeholder="contactInfo"
              onChange={handleChange}
            />
            <input type="submit" value="Create Club" />
          </form>
          {props.clubs ? loaded() : loading()}
        </section>
      );
    }
export default ClubIndex