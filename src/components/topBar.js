import { useState, useEffect } from 'react';
import { getTheDate } from '../functions/getDate';
import { getTheTime } from '../functions/getTime';

function TopBar () {
    const [date, setDate] = useState(getTheDate());
    const [timeVer, setTimeVer] = useState('US');
    const [timeSetting, setTimeSetting] = useState(getTheTime(timeVer));
     
    const time = "";
    useEffect(() => {
        const updateDate = setInterval(() => {
            setDate(getTheDate());
        }, 360000000);
        const updateTime = setInterval(() => {
            setTimeSetting(getTheTime());
        }, 10000)
    })

    return (
        <div className = "row">
            <div className = "col-sm-4">
                <p>{date}</p>
                <p>{timeSetting}</p>
            </div>
            <div className = "col-sm-4">

            </div>
        </div>
    )
}
export default TopBar;