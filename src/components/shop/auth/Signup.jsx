import { useState } from "react"
import { signupReq } from "./FetchApi"

const Signup = () => {
    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
        cPassword: "",
        error: false,
        loading: false,
        success: false
    })

    const alert = (msg, type) => {
        <div className={`text-sm text-${type}-500`}>{msg}</div>
    }

    const formSubmit = async () => {
        setData({ ...data, loading: true })
        if (data.cPassword !== data.password) {
            return setData({
                ...data,
                error: {
                    cPassword: "Password doesn't match",
                    pasword: "Password doesn't match"
                }
            })
        }

        try {
            let responseData = await signupReq({
                name: data.name,
                email: data.email,
                password: data.password,
                cPassword: data.cPassword
            })

            if (responseData.error) {
                setData({
                    ...data,
                    loading: false,
                    error: responseData.error,
                    password: "",
                    cPassword: ""
                })
            } else if (responseData.success) {
                setData({
                    success: responseData.success,
                    name: "",
                    email: "",
                    password: "",
                    cPassword: "",
                    loading: false,
                    error: false
                })
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <div className="text-center text-2xl mb-6">Register</div>
            <form className="spaxe-y-4">
                {data.success ? alert(data.success, "green") : ""}
                <div className="flex flex-col">
                    <label htmlFor="name">
                        Name <span className="text-sm text-gray-600 ml-1">*</span>
                    </label>
                    <input
                        type="text"
                        onChange={(e) => setData({
                            ...data,
                            success: false,
                            error: {},
                            name: e.target.value
                        })}
                        value={data.name}
                        id="name"
                        className={`${data.error.name ? "border-red-500" : ""} px-4 py-2 focus:outline-none border`}
                    />
                    {!data.error ? "" : alert(data.error.name, "red")}
                </div>
                <div className="flex flex-col">
                    <label htmlFor="email">
                        Email <span className="text-sm text-gray-600 ml-1">*</span>
                    </label>
                    <input
                        type="text"
                        onChange={(e) => setData({
                            ...data,
                            success: false,
                            error: {},
                            email: e.target.value
                        })}
                        value={data.email}
                        id="email"
                        className={`${data.error.email ? "border-red-500" : ""} px-4 py-2 focus:outline-none border`}
                    />
                    {!data.error ? "" : alert(data.error.email, "red")}
                </div>
                <div className="flex flex-col">
                    <label htmlFor="password">
                        Password <span className="text-sm text-gray-600 ml-1">*</span>
                    </label>
                    <input
                        type="text"
                        onChange={(e) => setData({
                            ...data,
                            success: false,
                            error: {},
                            password: e.target.value
                        })}
                        value={data.password}
                        id="password"
                        className={`${data.error.password ? "border-red-500" : ""} px-4 py-2 focus:outline-none border`}
                    />
                    {!data.error ? "" : alert(data.error.password, "red")}
                </div>
                <div className="flex flex-col">
                    <label htmlFor="cPassword">
                        Confirm Password <span className="text-sm text-gray-600 ml-1">*</span>
                    </label>
                    <input
                        type="text"
                        onChange={(e) => setData({
                            ...data,
                            success: false,
                            error: {},
                            cPassword: e.target.value
                        })}
                        value={data.cPassword}
                        id="cPassword"
                        className={`${data.error.cPassword ? "border-red-500" : ""} px-4 py-2 focus:outline-none border`}
                    />
                    {!data.error ? "" : alert(data.error.cPassword, "red")}
                </div>

                <div className="flex flex-col space-y-2 md:flex-row md:justify-between md:items-center">
                    <div>
                        <input type="checkbox" id="rememberMe" className="px-4 py-2 focus:outline-none border mr-1" />
                        <label htmlFor="rememberMe">
                            Remember Me <span className="text-sm text-gray-600">*</span>
                        </label>
                    </div>
                    <a href="/" className="block text-gray-600">Lost your passwrod ?</a>
                </div>
                <div
                    className="px-4 py-2 text-white text-center cursor-pointer font-medium bg-[#303031]"
                    onClick={() => formSubmit()}
                >
                    Create an account
                </div>
            </form>
        </>
    )
}

export default Signup