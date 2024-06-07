import AdminNavbar from "../partials/AdminNavbar"
import AdminSidebar from "../partials/AdminSidebar"

// eslint-disable-next-line react/prop-types
const AdminLayout = ({ children }) => {
    return (
        <>
            <AdminNavbar />
            <section className="flex bg-gray-100">
                <AdminSidebar/>
                <div className="w-full md:w-11/12 h-full">
                    {children}
                </div>
            </section>
        </>
    )
}

export default AdminLayout