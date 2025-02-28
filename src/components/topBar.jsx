import React from 'react';

const TopBar = ({ date, timeSetting }) => {

    return (
        <div className = "row">
            <div className = "col-sm-4">
                <p className="dateTime">{date}</p>
                <p className="dateTime">{timeSetting}</p>
            </div>
        </div>
    )
}
export default TopBar;