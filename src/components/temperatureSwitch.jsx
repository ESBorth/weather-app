import React, { useState } from 'react';
const TempSwitcher = ( { switched, checked } ) => {
    console.log(switched);
    return (
      <div>
        {switched === undefined ? (
          <div>
            {checked ? (
              <div className={`row darkmode-dark`}>
                <div className="unchecked col-sm-6">
                  {switched ? (<span className="material-symbols-outlined icons">toggle_on</span>) : (<span className="material-symbols-outlined icons">toggle_off</span>)}Fahrenheit
                </div>
                <div className ="unchecked col-sm-6">
                  {switched ? (<span className="material-symbols-outlined icons">toggle_on</span>) : (<span className="material-symbols-outlined icons">toggle_off</span>)}Celcius
                </div>
              </div>
            ) : (
              <div className={`row darkmode`}>
                <div className="unchecked col-sm-6">
                  {switched ? (<span className="material-symbols-outlined icons">toggle_on</span>) : (<span className="material-symbols-outlined icons">toggle_off</span>)}Fahrenheit
                </div>
                <div className ="unchecked col-sm-6">
                  {switched ? (<span className="material-symbols-outlined icons">toggle_on</span>) : (<span className="material-symbols-outlined icons">toggle_off</span>)}Celcius
                </div>
              </div>
            )}
              
          </div>
        ) : (
          <div>
            {checked ? (
              <div className={`row darkmode-dark`}>
                <div className={`col-sm-6 ${switched === true || switched === "" ? "unchecked" : "checked-dark" }`}>
                  {switched ? (<span className="material-symbols-outlined icons">toggle_on</span>) : (<span className="material-symbols-outlined icons">toggle_off</span>)}Fahrenheit
                </div>
                <div className ={`col-sm-6 ${!switched ? "unchecked" : "checked-dark" }`}>
                  {switched ? (<span className="material-symbols-outlined icons">toggle_on</span>) : (<span className="material-symbols-outlined icons">toggle_off</span>)}Celcius
                </div>
              </div>
            ) : (
              <div className={`row darkmode`}>
                <div className={`col-sm-6 ${switched || switched === "" ? "unchecked" : "checked" }`}>
                  {switched ? (<span className="material-symbols-outlined icons">toggle_on</span>) : (<span className="material-symbols-outlined icons">toggle_off</span>)}Fahrenheit
                </div>
                <div className ={`col-sm-6 ${!switched ? "unchecked" : "checked" }`}>
                  {switched ? (<span className="material-symbols-outlined icons">toggle_on</span>) : (<span className="material-symbols-outlined icons">toggle_off</span>)}Celcius
                </div>
              </div>
            )}
              
          </div>
        )}
      </div>
    )
}
export default TempSwitcher;