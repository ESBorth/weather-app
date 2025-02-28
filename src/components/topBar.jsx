import React from 'react';

function TopBar(dateProp, timeProp) {

    return (
        <div className = "row">
            <div className = "col-sm-4">
                <p>{dateProp}</p>
                <p>{timeProp}</p>
            </div>
        </div>
    )
}
export default TopBar;