export function getTheTime (version) {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    if (version === 'US'){
        const formatter = `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}`;
        return (formatter);
    } else {
        return (`${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}`)
    }
};