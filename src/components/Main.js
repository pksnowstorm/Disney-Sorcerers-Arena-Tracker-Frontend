import React, {useEffect, useState} from 'react'
import { Routes, Route } from "react-router-dom"
import Home from "../pages/Home";
import About from "../pages/About";
import NewsIndex from "../pages/NewsIndex";

const Main = (props) => {
    const [news, setNews] = useState(null)
    const URL = "localhost:4000"
   
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
    
      const deletePeople = async id => {
        // make delete request to create people
        await fetch(URL + id, {
          method: "DELETE",
        })
        getNews();
      }

    useEffect(() => getNews, []);

  return (
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/news" element={<NewsIndex/>} />
    </Routes>
  );
}

export default Main;