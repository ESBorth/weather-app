
function TopBar () {
    const date = `${Date.getFullYear()}`;
    console.log(date);

    return (
        <div className = "row">
            <div className = "col-sm-4">
                <p>{date}</p>
            </div>
        </div>
    )
}
export default TopBar;