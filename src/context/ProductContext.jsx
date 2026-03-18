import { createContext, useState } from "react";

// 1. create context
export const ProductContext = createContext();
// 2. create provider: a super component: all component must return something
export const ProductProvider = ({children}) => {


    const defaultProduct = [
        {
       id:197656,
       name: "product1",
       price: 1200
        },

       {
       id:197626,
       name: "product2",
       price: 1400
       }
    ];
    const [products, setProducts] = useState(defaultProduct)
    function delete_product(idToDelete){
        //delete a product with id parameter: filter out state: products and exclude a product with id of id parameter
        const filteredProducts = products.filter((prod)=>{
           return prod.id != idToDelete
        });
        setProducts(filteredProducts)
    }
  return (
    <ProductContext.Provider value={ {products, setProducts, delete_product} }>
        {children}
    </ProductContext.Provider>
  )
}