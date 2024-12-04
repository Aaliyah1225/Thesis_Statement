import "./BreakfastDash.css"

const Breakfast = () => {
    return (
        <div>
           <div className="Search">
            <label>Search For Breakfast</label>
            <input type="search" placeholder="Search Foods..."/>
            <button>Add to Dashboard</button>
            </div> 
        </div>
    );
}

export default Breakfast;