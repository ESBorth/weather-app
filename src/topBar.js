import { useState, useEffect } from 'react';
import { getTheDate } from './getDate';

function TopBar () {
    const [date, setDate] = useState(getTheDate());
    
    
    const time = "";
    useEffect(() => {
        setDate(getTheDate());
    })

    return (
        <div className = "row">
            <div className = "col-sm-4">
                <p>{date}</p>
                <p>time</p>
            </div>
        </div>
    )
}
export default TopBar;