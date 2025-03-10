import React, { useState } from 'react';
const TempSwitcher = ( { switched, checked } ) => {
  let state = "";
  if (switched === ""){
    state = "";
  } else {
    state = "filled"
  }

    return (
        <div>
          {checked ? (
            <div className={`row darkmode-dark`}>
              <div className={`col-sm-6 ${switched === true || state === "" ? "unchecked" : "checked-dark" }`}>
                {switched ? (<span className="material-symbols-outlined icons">toggle_on</span>) : (<span className="material-symbols-outlined icons">toggle_off</span>)}Fahrenheit
              </div>
              <div className ={`col-sm-6 ${!switched ? "unchecked" : "checked-dark" }`}>
                {switched ? (<span className="material-symbols-outlined icons">toggle_on</span>) : (<span className="material-symbols-outlined icons">toggle_off</span>)}Celcius
              </div>
            </div>
          ) : (
            <div className={`row darkmode`}>
              <div className={`col-sm-6 ${switched === true || state === "" ? "unchecked" : "checked" }`}>
                {switched ? (<span className="material-symbols-outlined icons">toggle_on</span>) : (<span className="material-symbols-outlined icons">toggle_off</span>)}Fahrenheit
              </div>
              <div className ={`col-sm-6 ${!switched ? "unchecked" : "checked" }`}>
                {switched ? (<span className="material-symbols-outlined icons">toggle_on</span>) : (<span className="material-symbols-outlined icons">toggle_off</span>)}Celcius
              </div>
            </div>
          )}
            
        </div>
    )
}
export default TempSwitcher;