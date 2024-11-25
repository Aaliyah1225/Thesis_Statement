import "./LunchDash.css"

const Lunch = () => {
    return (
        <div>
           <div className="Search">
            <label>Search For Lunch</label>
            <input type="search" placeholder="Search Foods..."/>
            <button>Search</button>
            </div> 
        </div>
    );
}

export default Lunch;