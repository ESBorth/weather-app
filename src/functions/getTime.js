export function getTheTime (version) {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    let morning = isMorning();
    if (version === 'US'){
        const formatter = `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes} ${morning ? 'AM' : 'PM'}`;
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