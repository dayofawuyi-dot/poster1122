import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import Bank from './Bank.jsx'
import Blogger from "./Blogger.jsx"
import Inventory from './Inventory.jsx'
import { AppNameProvider } from './context/AppNameContext.jsx'
import { ProductProvider } from './context/ProductContext.jsx'
import Meal from './Meal.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppNameProvider>
      <ProductProvider>
        {/* <Meal/> */}
         <Inventory/>
         </ProductProvider>
    {/* <Bank /> */}
    {/* <App /> */}
    {/* <Blogger/> */}
    </AppNameProvider>
  </StrictMode>,
  // <div>
  //     <h1 className='text-primary  bg-secondary'>Hello world</h1>
  //     <p>Greetings from mars</p>
  // </div>
  
)
