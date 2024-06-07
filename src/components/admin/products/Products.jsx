import { createContext, useReducer } from "react"
import { DashboardContext } from "../dashboardAdmin/DashboardAdmin"
import { productReducer, productState } from "./ProductContext"
import ProductMenu from "./ProductMenu"
import AdminLayout from "../layout/AdminLayout"
import AllProduct from "./ProductTable"


export const ProductsContext = createContext()

const ProductComponent = () => {
    return (
        <div className="grid grid-cols-1 space-y-4 p-4">
            <ProductMenu />
            <AllProduct />
        </div>
    )
}
const Products = () => {
    const [data, dispatch] = useReducer(productReducer, productState)
    return (
        <>
            <ProductsContext.Provider value={{ data, dispatch }}>
                <AdminLayout>
                    <ProductComponent />
                </AdminLayout>
            </ProductsContext.Provider>
        </>
    )
}

export default Products

