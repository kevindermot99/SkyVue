import React from 'react'
import { useEffect } from 'react';

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

  return (
    <div>
      
    </div>
  )
}

export default App