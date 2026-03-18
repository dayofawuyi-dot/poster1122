import { useContext, useState } from "react"
import { ProductContext } from "../context/ProductContext";
const Create = () =>{
// these are data i.e product and setproduct are coming from our product context
   const {products, setProducts} = useContext(ProductContext)

    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [id, setId] = useState("");
    const [form, setForm] = useState({
        id : "",
        name : "",
        price : ""
    }); //a state to manage all form element and id
    // a funtion that respond when form is submitted
    function handle_submit(e){
        e.preventDefault();
        if(form.name == "" || form.price == ""){
            alert("all fields required")
        }else{
            // generate random id
            let id = Date.now();
            setForm({...form, id: id})
            // combine everything to form an object
           
            // console.log(data)
            // send what we collected from the form to an api that will insert it to database 
            setProducts([...products,form])
        }
    }
    function updateFormState(e){
        setForm({...form, [e.target.name]: e.target.value})
    }
    return(
        <div className="row mt-5">
            <div className="col-md-8 offset-md-2">
                <form onSubmit={handle_submit}>
                  <div className="mb-3">
                    <input type="text" className="form-control pb-2" value={form.name} name="name" placeholder="product name" onChange={updateFormState}/>
                  </div>
                  <div className="mb-3">
                    <input type="number" name="price" value={form.price} className="form-control pb-2" onChange={updateFormState} placeholder="product price"/>
                  </div>
                  <button className="btn btn-primary mb-3">Add Product</button>
                </form>
            </div>
        </div>
    )
}

export default Create