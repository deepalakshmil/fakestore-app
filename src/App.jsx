
import { Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Home from './components/Home'
import ProductList from './components/ProductList'
import AddProduct from './components/AddProduct'
import NotFound from './components/NotFound'
import ProductDetails from './components/ProductDetails'
import UpdateProduct from './components/UpdateProduct'

function App() {

  return (
    <div>
      <Navigation />
      {/* Routes using set the path for the componenet render */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/product-details/:id" element={<ProductDetails />} />
        <Route path="/product-update/:id" element={<UpdateProduct />} />
        <Route path="/addproduct" element={<AddProduct />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
