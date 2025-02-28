export function getTheTime (version) {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    let morning = isMorning();
    let usHours = 0;
    if (version === 'US'){
        if (hours > 12){
            usHours = hours - 12;
        } else {
            usHours = hours;
        }
        const formatter = `${usHours < 10 ? '0' + usHours : usHours}:${minutes < 10 ? '0' + minutes : minutes} ${morning ? 'AM' : 'PM'}`;
        return (formatter);
    } else {
        return (`${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}`)
    }
};
export function isMorning () {
    const now = new Date();
    const hours = now.getHours();

    if (hours < 12){
        return true;
    } else {
        return false;
    }
}