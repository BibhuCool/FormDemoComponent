import { useState } from "react"


export default function FormDemoComponent(){
    const [name,setName] = useState('');
    const [price,setPrice] = useState(0);
    const [city,setCity] = useState('');
    const [stock,setStock] = useState(false);

    function SubmitClick(){
        document.write(`Name=${name}<br>Price=${price}<br>Shipped To=${city}<br>Stock=${(stock===true)?"Available":"Out of stock"}`)
    }

    return(
        <>
            <div className="container-fluid">
            <h2>Register Product</h2>
            <form onSubmit={SubmitClick}>
                <dl>
                    <dt>Name</dt>
                    <dd><input value={name} onChange={(e)=>{setName(e.target.value)}} type="text" /></dd>
                    <dt>Price</dt>
                    <dd><input value={price} onChange={(e)=>{setPrice(e.target.value)}} type="text" /></dd>
                    <dt>Shipped To</dt>
                    <dd>
                        <select onChange={(e)=>{setCity(e.target.value)}}>
                            <option value='delhi'>Delhi</option>
                            <option value='hyd'>Hyd</option>
                        </select>
                    </dd>
                    <dt>Stock</dt>
                    <dd className="form-switch">
                        <input checked={stock} onChange={(e)=>{setStock(e.target.checked)}} type="checkbox" className="form-check-input" /> Available
                    </dd>
                </dl>
                <button>Register</button>
            </form>

            </div>
        </>
    )
}