'use client'

import { useEffect, useState } from "react"

export const ButtonTheme = () => {
  const [themeDark, setTheme] = useState(false);

  useEffect(() => {
    const metaThemeColor = document.querySelector("meta[name=theme-color]").getAttribute("content");
    if (metaThemeColor === 'Dark') {
      setTheme(true)
    }
  }, [])

  function toggleTheme() {

    const metaThemeColor = document.querySelector("meta[name=theme-color]");
    console.log('thema 00>  ' + themeDark);

    if (themeDark) {
      metaThemeColor.setAttribute("content", 'Light');
      setTheme(false)
    }
    if (!themeDark) {
      metaThemeColor.setAttribute("content", 'Dark');
      setTheme(true)
    }
  }

  return (
    <>
      {
        themeDark ?
          <button onClick={() => toggleTheme()} className="icon icon-sun" >
          </button>
          :
          <button onClick={() => toggleTheme()} className="icon icon-moon" >
          </button>
      }

    </>
  )
}
