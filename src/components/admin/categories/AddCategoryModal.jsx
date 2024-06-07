import { useContext, useState } from "react"
import { CategoryContext } from "./Category"
import { createCategory, getAllCategory } from "./FetchApi"

const AddCategoryModal = () => {
    const { data, dispatch } = useContext(CategoryContext)

    const alert = () => (
        <div className={`bg-${type}-200 py-2 px-4 w-full`}>{msg}</div>
    )

    const[fData, setFData] = useState({
        cName: "",
        cDescription: "",
        cImage: "",
        cStatus: "Active",
        succes: false,
        error: false
    })

    const fetchData = async () => {
        let responseData = await getAllCategory()
        if (responseData.Categories) {
            dispatch({ type: "fetchCategoryAndChangeState", payload: responseData.Categories })
        }
    }
    if (fData.error || fData.succes) {
        setTimeout(() => {
            setFData({ ...fData, succes: false, error: true })
        }, 2000)
    }

    const submitForm = async () => {
        dispatch({ type: "loading", payload: true })
        e.preventDefault()
        e.target.reset()

        if (!fData.cImage) {
            dispatch({ type: "loading", payload: false })
            return setFData({ ...fData, error: "Please upload a category image" })
        }
        try {
            let responseData = await createCategory(fData)
            if (responseData.succes) {
                fetchData()
                setFData({
                    ...fData,
                    cName: "",
                    cDescription: "",
                    cImage: "",
                    cStatus: "Active",
                    succes: responseData.succes,
                    error: false
                })
                dispatch({ type: "loading", payload: false })
                setTimeout(() => {
                    setFData({
                        ...fData,
                        cName: "",
                        cDescription: "",
                        cImage: "",
                        cStatus: "Active",
                        succes: false,
                        error: false
                    })
                }, 2000)
            } else if (responseData.error) {
                setFData({ ...fData, error: responseData.error })
                dispatch({ type: "loading", payload: false })
                setTimeout(() => {
                    return setFData({ ...fData, error: false, succes: false })
                }, 2000)
            }
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <>
            <div onClick={(e) => dispatch({ type: "addCategoryModal", payload: false })}
                className={`${data.addCategoryModal ? "" : "hidden"} fixed top-0 left-0 z-30 w-full h-full bg-black opacity-50`}
            />

            <div className={`${data.addCategoryModal ? "" : "hidden"} fixed inset-0 m-4 flex items-center z-30 justify-center`}>
                <div className="relative bg-white w-11/12 md:w-3/6 shadow-lg flex flex-col items-center space-y-4 overflow-y-auto px-4 py-4 md:px-8">
                    <div className="flex items-center justify-beetween w-full pt-4 ">
                        <span className="text-left font-semibold text-2xl tracking-wider">
                            Add Category
                        </span>

                        <span
                            onClick={() => dispatch({ type: "addCategoryModal", payload: false })}
                            className="cursor-pointer text-gray-100 py-2 px-2 rounded-full bg-[#303031]">
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </span>
                    </div>
                    {fData.error ? alert(fData.error, "red") : ""}
                    {fData.succes ? alert(fData.succes, "green") : ""}
                    <form className="w-full" onSubmit={(e) => submitForm(e)}>
                        <div className="flex flex-col space-y-1 w-full py-4">
                            <label htmlFor="name">Category Name</label>
                            <input type="text"
                                onChange={(e) => setFData({ ...fData, succes: false, error: false, cName: e.target.value })}
                                value={fData.cName}
                                className="px-4 py-2 border focus:outline-none"
                            />
                        </div>
                        <div className="flex flex-col space-y-1 w-full">
                            <label htmlFor="description">Category Description</label>
                            <textarea name="description" id="description" onChange={(e) => setFData({
                                ...fData,
                                succes: false,
                                error: false,
                                cDescription: e.target.value
                            })}
                                value={fData.cDescription}
                                className="px-4 py-2 border focus:outline-none"
                                cols={5} rows={5}
                            />
                        </div>
                        <div className="flex flex-col space-y-1 w-full">
                            <label htmlFor="image">Category Image</label>
                            <input
                                accept=".jpg,.jpeg, .png"
                                onChange={(e) => {
                                    setFData({
                                        ...fData,
                                        succes: false,
                                        error: false,
                                        cImage: e.target.files[0]
                                    })
                                }}
                                className="px-4 py-2 border focus:outline-none"
                                type="file" />
                        </div>
                        <div className="flex flex-col spacd-y-1 w-full">
                            <label htmlFor="status">Category Status</label>
                            <select name="status" id="status"
                                onChange={(e) =>
                                    setFData({
                                        ...fData,
                                        succes: false,
                                        error: false,
                                        cStatus: e.target.value
                                    })
                                }>
                                <option value="Active" name="status">Active</option>
                                <option value="Disabled" name="status">Disabled</option>
                            </select>
                        </div>
                        <div className="flex flex-col space-y-1 w-full pb-4 md:pb-6 mt-4">
                            <button type="submit"
                            className="bg-gray-800 text-gray-100 rounded-full text-lg font-medium py-2">
                                Create category
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
export default AddCategoryModal