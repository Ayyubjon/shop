import { useNavigate } from "react-router-dom"

const AdminNavbar = () => {
    const navigate = useNavigate()

    const logout = () => {
        localStorage.removeItem("jwt")
        localStorage.removeItem("cart")
        localStorage.removeItem("wishList")
        window.location.href = "/"
    }

    return (
        <>
            <nav className="sticky z-10 flex items-center shadow-md justify-between px-4 py-4 md:px-8 top-0 w-full bg-white">
                <div className="hidden lg:flex lg:items-center lg:space-x-4 mr-32">
                    <span>
                        <svg
                            className="w-8 h-8 cursor-pointer text-gray-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </span>
                </div>
                <div className="hidden lg:block">
                    <span
                        onClick={() => navigate("/admin/dashboard")}
                        className="flex items-left text-center font-bold uppercase text-gray-800 text-2xl cursor-pointer px-2"
                        style={{ letterSpacing: "0.70rem" }}
                    >
                        Hayroo
                    </span>
                </div>
                <div className="flex items-center lg:hidden">
                    <svg
                        id="hamburgerBtn"
                        className="lg:hidden w-8 h-8 cursor-pointer text-gray-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                    <span
                        onClick={() => navigate("/admin/dashboard")}
                        className="flex items-left text-center font-bold uppercase text-gray-800 text-2xl cursor-pointer px-2"
                        style={{ letterSpacing: "0.10rem" }}
                    >
                        Hayroo
                    </span>
                </div>
                <div className="flex items-center">
                    <div className="hover:bg-gray-200 rounded-lg p-2" title="Search">
                        <svg
                            className="cursor-pointer w-8 h-8 text-gray-600 hover:text-gray-800"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                            />
                        </svg>
                    </div>
                    <div className="hover:bg-gray-200 rounded-lg p-2" title="Search">
                        <svg
                            className="cursor-pointer w-8 h-8 text-gray-600 hover:text-gray-800"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                            />
                        </svg>
                    </div>

                    <div className="userDropdownBtn hover:bg-gray-200 px-2 py-2 rounded-lg relative" title="Logout">
                        <svg
                            className="cursor-pointer w-8 h-8 text-gray-600 hover:text-gray-800"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                    </div>
                </div>

            </nav>
        </>
    )
}

export default AdminNavbar