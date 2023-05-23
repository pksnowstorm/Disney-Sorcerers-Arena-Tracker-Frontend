import React, {useEffect, useState } from 'react'
import { Routes, Route } from "react-router-dom"
import Home from "../pages/Home";
import About from "../pages/About";
import NewsIndex from "../pages/NewsIndex";
import NewsShow from "../pages/NewsShow";
import SpellIndex from "../pages/SpellIndex";
import SpellShow from "../pages/SpellShow";
import ClubIndex from "../pages/ClubIndex";
import ClubShow from "../pages/ClubShow";

const Main = (props) => {
    const [news, setNews] = useState(null)
    const URL = "https://disney-socerers-arena-tracker.onrender.com/news"
   
    const getNews = async () => {
        const response = await fetch(URL);
        const data = await response.json();
        setNews(data);
    }
    const createNews = async(newNews) => {
        await fetch(URL, {
            method: "POST",
            headers: {
                "Content-Type": "Application/json",
            },
            body: JSON.stringify(newNews),
        });
        getNews();
    };

    const updateNews = async (newNews, id) => {
        // make put request to create people
        await fetch(URL + id, {
          method: "PUT",
          headers: {
            "Content-Type": "Application/json",
          },
          body: JSON.stringify(newNews),
        });
        getNews();
      }
    
      const deleteNews = async id => {
        // make delete request to create people
        await fetch(URL + id, {
          method: "DELETE",
        })
        getNews();
      }

    useEffect(() => getNews(), []);

    const [spells, setSpells] = useState(null)
    const URL2 = "https://disney-socerers-arena-tracker.onrender.com/spells"
    const getSpells = async () => {
        const response2 = await fetch(URL2);
        const data2 = await response2.json();
        setSpells(data2);
    }
    const createSpells = async(spell) => {
        await fetch(URL2, {
            method: "POST",
            headers: {
                "Content-Type": "Application/json",
            },
            body: JSON.stringify(spell),
        });
        getSpells();
    };

    const updateSpells = async (spell, id) => {
        // make put request to create people
        await fetch(URL2 + id, {
          method: "PUT",
          headers: {
            "Content-Type": "Application/json",
          },
          body: JSON.stringify(spell),
        });
        getSpells();
      }
    
      const deleteSpells = async id => {
        // make delete request to create people
        await fetch(URL2 + id, {
          method: "DELETE",
        })
        getSpells();
      }

    useEffect(() => getSpells(), []);

    const [clubs, setClubs] = useState(null)
    const URL3 = "https://disney-socerers-arena-tracker.onrender.com/club"
    const getClubs = async () => {
        const response3 = await fetch(URL3);
        const data3 = await response3.json();
        setClubs(data3);
    }
    const createClubs = async(club) => {
        await fetch(URL3, {
            method: "POST",
            headers: {
                "Content-Type": "Application/json",
            },
            body: JSON.stringify(club),
        });
        getClubs();
    };

    const updateClubs = async (club, id) => {
        // make put request to create people
        await fetch(URL3 + id, {
          method: "PUT",
          headers: {
            "Content-Type": "Application/json",
          },
          body: JSON.stringify(club),
        });
        getClubs();
      }
    
      const deleteClubs = async id => {
        // make delete request to create people
        await fetch(URL3 + id, {
          method: "DELETE",
        })
        getClubs();
      }

    useEffect(() => (getClubs()), []);

  return (
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/news" element={<NewsIndex news={news} createNews={createNews} />} />
        <Route path="/news/:id" element={<NewsShow news={news} updateNews={updateNews} deleteNews={deleteNews} />} />
        <Route path="/spells" element={<SpellIndex spells={spells} createSpells={createSpells} />} />
        <Route path="/spells/:id" element={<SpellShow spells={spells} updateSpells={updateSpells} deleteSpells={deleteSpells} />} />
        <Route path="/club" element={<ClubIndex clubs={clubs} createClubs={createClubs} />} />
        <Route path="/club/:id" element={<ClubShow clubs={clubs} updateClubs={updateClubs} deleteClubs={deleteClubs} />} />
    </Routes>
  );
}

export default Main;