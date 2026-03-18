import { useContext } from "react"
import { ProductContext } from "../context/ProductContext"

const Products = () => {
    const {products, delete_product} = useContext(ProductContext)
    return(
        <div className="row">
            <div className="col-md-6 offset-md-2">
                <table className="table table-secondary ">
                    <thead>
                         <tr>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Action</th>
                         </tr>
                    </thead>
                    <tbody>
                           {
                            products.length > 0 && products.map((pro, index)=>{
                                return(
                                 <tr key={index}>
                                <td>{pro.name}</td>
                                <td>{pro.price}</td>
                                <td> <button className="btn btn-danger px-3 btn-sm col-8" onClick={()=>{delete_product(pro.id)}}>Delete</button> </td>
                            </tr>
                                )
                            })
                           }
                    </tbody>
                </table>
            </div>
        </div>
    )
}


export default Products