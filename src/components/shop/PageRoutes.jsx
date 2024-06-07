import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./home/Home"
import Wishlist from "./wishlist/wishList"
import DashboardAdmin from "../admin/dashboardAdmin/DashboardAdmin"
import Products from "../admin/products/Products"
import Category from "../admin/categories/Category"


const PageRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/wish-list" element={<Wishlist />}/>
                <Route path="/admin/dashboard" element={
                       <DashboardAdmin />}/>
               <Route path="/admin/dashboard/products" element={<Products/>}/>
               <Route path="/admin/dashboard/categories" element={<Category/>}/>

            </Routes>
        </BrowserRouter>
    )
}

export default PageRoutes;