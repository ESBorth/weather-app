import React, { useState } from 'react';
const TempSwitcher = ( { switched, setSwitched, checked } ) => {
    return (
        <div>
          <div>{checked ? (<p className="darkmode-dark">
            {switched ? (<span className="material-symbols-outlined icons">toggle_on</span>) : (<span className="material-symbols-outlined icons">toggle_off</span>)}{!switched ? " Fahrenheit" : " Celsius"}
          </p>) : <p className="darkmode">
            {switched ? (<span className="material-symbols-outlined icons">toggle_on</span>) : (<span className="material-symbols-outlined icons">toggle_off</span>)}{!switched ? " Fahrenheit" : " Celsius"}</p>}</div>
        </div>
    )
}
export default TempSwitcher;