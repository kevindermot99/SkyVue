import React from 'react'
import { useEffect } from 'react';
import logo from '../public/logo.png'
import { ImGithub } from "react-icons/im";
import { TbSunMoon } from "react-icons/tb";
import { TbCaptureFilled } from "react-icons/tb";
import { TbCloudSearch } from "react-icons/tb";


function App() {

  useEffect(() => {
    const SystemThemeUser = localStorage.getItem("appTheme");
    if (SystemThemeUser === "light") {
      document.querySelector("body").classList.remove("dark");
    }
    // dark
    else {
      localStorage.setItem('appTheme', "dark");
      document.querySelector("body").classList.add("dark");
    }

    window.matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', ({ matches }) => {
        if (matches) {
          // dark
          document.body.classList.add('dark');
          localStorage.setItem('appTheme', "dark");
        }
        else {
          // light
          document.body.classList.remove('dark');
          localStorage.setItem('appTheme', "light");
        }
      })
  }, []);

  const cDeegre = () => {
    setTimeout(() => {
      document.querySelector(".nl-switch").classList.remove("fd");
      document.querySelector(".nl-switch").classList.add("cd");
    }, 100);

  }

  const fDeegre = () => {
    setTimeout(() => {
      document.querySelector(".nl-switch").classList.remove("cd");
      document.querySelector(".nl-switch").classList.add("fd");
    }, 100);

  }

  return (
    <div>

      <div className="navbar">
        <div className="logo">
          <img src={logo} alt="" />
          <h1>SkyVue</h1>
        </div>


        <div className="nav-links">
          <div className="nl-switch cd">
            <span onClick={cDeegre}>&deg;C</span>
            <span onClick={fDeegre}>&deg;F</span>
          </div>
          <div className="nl-icon">
            <TbCaptureFilled />
          </div>
          <div className="nl-icon">
            <TbSunMoon />
          </div>
          <a href='#' className="nl-icon">
            <ImGithub />
          </a>
        </div>
      </div>

      <div className="hero">
        <form>
          <input type="text" placeholder='Search a city...' />
          <button><TbCloudSearch /></button>
        </form>
      </div>


    </div>
  )
}

export default App