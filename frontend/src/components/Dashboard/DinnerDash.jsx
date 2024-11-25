import "./DinnerDash.css"

const Dinner = () => {
    return (
        <div>
           <div className="Search">
            <label>Search For Dinner</label>
            <input type="search" placeholder="Search Foods..."/>
            <button>Search</button>
            </div> 
        </div>
    );
}

export default Dinner;