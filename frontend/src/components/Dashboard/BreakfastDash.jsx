import "./BreakfastDash.css"

const Breakfast = () => {
    return (
        <div>
           <div className="Search">
            <label>Search For Breakfast</label>
            <input type="search" placeholder="Search Foods..."/>
            <button>Search</button>
            </div> 
            <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
    );
}

export default Breakfast;