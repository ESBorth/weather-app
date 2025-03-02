export function getDefaultColor () {
    const now = new Date();
    const hours = now.getHours();
    if (hours > 17 || hours < 5){
        return true;
    } else {
        return false;
    }
}