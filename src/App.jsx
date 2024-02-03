import React from 'react'
import { useEffect } from 'react';
import logo from '../public/logo.png'
import { ImGithub } from "react-icons/im";
import { TbSunMoon } from "react-icons/tb";
import { TbCaptureFilled } from "react-icons/tb";
import { TbCloudSearch } from "react-icons/tb";
import { IoIosSearch } from "react-icons/io";
import { CiDroplet } from "react-icons/ci";
import { CiTempHigh } from "react-icons/ci";
import { MdOutlineWindPower } from "react-icons/md";
import { BsSunrise } from "react-icons/bs";
import { BsSunset } from "react-icons/bs";
import { IoSunnyOutline } from "react-icons/io5";


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
      localStorage.setItem("measure", "cdeegre")
      document.querySelector(".nl-switch").classList.remove("fd");
      document.querySelector(".nl-switch").classList.add("cd");
    }, 100);
  }

  const fDeegre = () => {
    setTimeout(() => {
      localStorage.setItem("measure", "fdeegre")
      document.querySelector(".nl-switch").classList.remove("cd");
      document.querySelector(".nl-switch").classList.add("fd");
    }, 100);
  }

  useEffect(() => {
    const choosenMeasure = localStorage.getItem("measure")
    if (choosenMeasure === "cdeegre") {
      document.querySelector(".nl-switch").classList.remove("fd");
      document.querySelector(".nl-switch").classList.add("cd");
    }
    else if (choosenMeasure === "fdeegre") {
      document.querySelector(".nl-switch").classList.remove("cd");
      document.querySelector(".nl-switch").classList.add("fd");
    }
  }, []);

  return (
    <div>

      <div className="bubble1"></div>
      <div className="bubble2"></div>

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

      <div className="quick-links">
        <button>London</button>
        <button>Sydney</button>
        <button>Nairobi</button>
        <button>Kigali</button>
        <button>Tokyo</button>
        <button>Chicago</button>
        <button>Beinjing</button>
        <button>Toronto</button>
        <button>Paris</button>
      </div>

      <div className="hero">
        <form>
          <label className='srch'>
            <IoIosSearch />
            <input type="text" placeholder='Search a city...' />
          </label>
          <button><TbCloudSearch /></button>
        </form>
        <p>Tuesday, 31 May 2024 | Local time: 12:34 PM</p>
        <h1>Kigali, RW</h1>
        <h5>Cloudy</h5>
      </div>

      <div className="info">
        <div className="info-left">
          <div className="il-up">
            <div className='ilu-item'><img src="https://static.vecteezy.com/system/resources/previews/016/314/339/original/red-circle-red-dot-icon-free-png.png" alt="" /></div>
            <h1 className='ilu-item'>46&deg;</h1>
            <div className='ilu-item'>
              <h6><CiDroplet /> Real fill:<span> 32&deg;</span></h6>
              <h6><CiTempHigh /> Humidity:<span> 65%</span></h6>
              <h6><MdOutlineWindPower /> wind:<span> 11 km/h</span></h6>
            </div>
          </div>
          <div className="il-down">
            <h6><BsSunrise /> Rise: <span>06:45 AM</span></h6>
            <h6><BsSunset /> set: <span>07:45 PM</span></h6>
            <h6><IoSunnyOutline /> High: <span>45&deg;</span></h6>
            <h6><IoSunnyOutline /> Low: <span>40&deg;</span></h6>
          </div>
        </div>
        <div className="info-right">
          <div className="forecast">
            <h4>Hourly forecast</h4>
            <div className='time-forecast'>
              <span>
                <p>02:00 PM</p>
                <img src="https://static.vecteezy.com/system/resources/previews/016/314/339/original/red-circle-red-dot-icon-free-png.png" alt="" />
                <h5>22&deg;</h5>
              </span>
              <span>
                <p>02:00 PM</p>
                <img src="https://static.vecteezy.com/system/resources/previews/016/314/339/original/red-circle-red-dot-icon-free-png.png" alt="" />
                <h5>22&deg;</h5>
              </span>
              <span>
                <p>02:00 PM</p>
                <img src="https://static.vecteezy.com/system/resources/previews/016/314/339/original/red-circle-red-dot-icon-free-png.png" alt="" />
                <h5>22&deg;</h5>
              </span>
              <span>
                <p>02:00 PM</p>
                <img src="https://static.vecteezy.com/system/resources/previews/016/314/339/original/red-circle-red-dot-icon-free-png.png" alt="" />
                <h5>22&deg;</h5>
              </span>
              <span>
                <p>02:00 PM</p>
                <img src="https://static.vecteezy.com/system/resources/previews/016/314/339/original/red-circle-red-dot-icon-free-png.png" alt="" />
                <h5>22&deg;</h5>
              </span>
            </div>  
          </div>
        </div>
      </div>

    </div>
  )
}

export default App