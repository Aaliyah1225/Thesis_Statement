import "./SnackDash.css"

const Snack = () => {
    return (
        <div>
           <div className="Search">
            <label>Search For Snacks</label>
            <input type="search" placeholder="Search Foods..."/>
            <button>Search</button>
            </div> 
        </div>
    );
}

export default Snack;