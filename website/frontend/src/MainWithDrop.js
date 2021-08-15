import './Main.css';
import {useState} from "react";
import {Example} from "./DateChoose"
import DatePicker from "react-datepicker";
import {Dropdown, Selection} from 'react-dropdown-now';

import stores from './stores.json'
import products from './products.json'

const options = ["one", "two"]

function Main() {
    const sendJSON = () => {
        const requestOptions = {
            method: 'POST',
            headers: {},
            body: JSON.stringify({
                "date": [startDate],
                "product_id": [product],
                "store_id": [store],
                "sales": [values],
            }),

        };

        fetch('http://192.168.1.34:8080/add', requestOptions)
            .then(response => response.json())
            .then(data => setResult(data['answer']));
    }

    const [store, setStore] = useState("")
    const [values, setValues] = useState("")
    const [result, setResult] = useState(0)
    const [startDate, setStartDate] = useState(new Date());
    const [product, setProduct] = useState(11163)
    return (
        <div className="App">
            <div className="container">
                <div className="prikol">
                    <h3 style={{textAlign: "center"}}>Predict "Vitalur" demand</h3>

                    <label>Product name</label>
                    <fieldset>
                        <select
                            value={product}
                            onChange={(e) => {
                                setProduct(e.target.value)
                            }}
                        >
                            {products.map(({name, id}, index) => <option value={id}>{name}</option>)}
                        </select>
                    </fieldset>
                    <label>Store name</label>
                    <fieldset>
                        <select
                            value={store}
                            onChange={(e) => {
                                setStore(e.target.value)
                            }}
                        >
                            {stores.map(({name, id}, index) => <option value={id}>{name}</option>)}
                        </select>
                    </fieldset>

                    <label>Comma separated values</label>
                    <fieldset>
                        <input className="kekw" placeholder="Values" type="text" tabIndex="3" name="values_" required
                               onChange={(e) => {
                                   setValues(e.target.value)
                               }}/>
                    </fieldset>

                    <label>Date</label>
                    <fieldset>
                        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)}/>
                    </fieldset>
                    <div className="omg">
                        <label>Estimated consumption</label>
                        <fieldset>
                            <input className="kekw" placeholder="Prediction" type="text" tabIndex="3" name="values_"
                                   disabled
                                   value={result}/>
                        </fieldset>
                    </div>
                    <div style={{textAlign: "center"}}>
                        <button id="main_button" className="button-5" role="button" onClick={sendJSON}>Predict!</button>
                    </div>
                    <p className="copyright">Designed by Team3</p>

                </div>
            </div>
        </div>
    );
}

export default Main;