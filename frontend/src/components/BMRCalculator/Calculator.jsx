import "./Calculator.css";

function Calculator() {
return (
<div>
    <h1>Basal Metallic Rate Calculator</h1>
    
    <div className="input-group">
        <label htmlFor="gender">Gender:</label>
        <select id="gender-select">
        <option value="male">Male</option>
        <option value="female">Female</option>
        </select>
    </div>
        
    <div className="input-group">
        <label htmlFor="age">Age:</label>
        <input type="number" id="age" placeholder="Enter your age:" />
    </div>

    <div className="input-group">
        <label htmlFor="height">Height:</label>
        
        </div>
        <label htmlFor="weight">Weight:</label>
        
</div>
)};

export default Calculator;