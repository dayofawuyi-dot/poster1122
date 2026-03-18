import { useState } from "react"

const Create = ({products, setProducts}) =>{
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [id, setId] = useState("");
    const [form, setForm] = useState({
        id : "",
    }); //a state to manage all form element and id
    // a funtion that respond when form is submitted
    function handle_submit(e){
        e.preventDefault();
        if(name == "" || price == ""){
            alert("all fields required")
        }else{
            // generate random id
            let id = Date.now();
            setId(id)
            // combine everything to form an object
            const data = {
                id: id, 
                name: name,
                price: price
            }
            // console.log(data)
            setProducts([...products,data])
        }
    }
    return(
        <div className="row mt-5">
            <div className="col-md-8 offset-md-2">
                <form onSubmit={handle_submit}>
                  <div className="mb-3">
                    <input type="text" className="form-control pb-2" value={name} placeholder="product name" onChange={(e)=>{setName(e.target.value)}}/>
                  </div>
                  <div className="mb-3">
                    <input type="number" value={price} className="form-control pb-2" onChange={(e)=>{setPrice(e.target.value)}} placeholder="product price"/>
                  </div>
                  <button className="btn btn-primary mb-3">Add Product</button>
                </form>
            </div>
        </div>
    )
}

export default Create