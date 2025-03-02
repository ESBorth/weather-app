import React, { useState } from 'react';

const DarkMode = ( { checked, setChecked }) => { 

  return (
    <div>
      <div className={`row ${checked ? "darkmode-dark" : "darkmode" }`}>
        <div className={`col-sm-6 ${checked ? "unchecked" : "checked" }`}>
          <p><span className={`${checked ? "icons-dark" : "icons" } material-symbols-outlined`}>light_mode</span> Light Mode</p>
        </div>
        <div className ={`col-sm-6 ${!checked ? "unchecked" : "checked-dark" }`}>
          <p><span className={`${checked ? "icons-dark" : "icons" } material-symbols-outlined`}>dark_mode</span> Dark Mode</p>
        </div>
      </div>
    </div>
  )
}

export default DarkMode;