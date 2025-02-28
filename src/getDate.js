export function getTheDate () {
    const today = new Date();
    const year = today.getFullYear();
    const monthNum = today.getMonth() + 1;
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const month = months[monthNum];
    const day = today.getDate();
    return(`${month} ${day < 10 ? '0' + day : day}, ${year}`);
};