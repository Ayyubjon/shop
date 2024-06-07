import { Fragment, useContext } from "react"
import { DashboardContext } from "./DashboardAdmin"

const Customize = () => {
    const {data, dispatch} = useContext(DashboardContext)
  return (
    <>
      <div className="m-4 md:w-1/2">
        {!data.uploadSliderBtn ? (
            <div onClick={() => dispatch({type: "uploadSliderBtn", payload: !data.uploadSliderBtn})}
            className="bg-[#303031] cursor-pointer rounded-full p-2 flex items-center justify-center text-gray-100 text-sm font-semibold uppercase">
       <svg
              className="w-6 h-6 text-gray-100 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                clipRule="evenodd"
              />
            </svg>

           </div>
        ) : (
            ""
        )}
      </div>
      {data.uploadSliderBtn ? <UploadImageSection /> : ""}
    </>
  )
}
const UploadImageSection = () => {
    const {data, dispatch} = useContext(DashboardContext)
    const uploadImageHandler = (image) => {
        uploadImage(image,dispatch);
    }
    return(
     <Fragment>
        <div className="relative m-4 bg-white p-4 shadow-lg">
            <h1 className="border b-2 border-yellow-700 m-4 pb-2 text-2xl font-semibold">
                Shop Slider Images
            </h1>
            <div className="relative flex flex-col space-y-2">
                <div className="relative z-0 px-4 py-2 rounded text-white flex justify-center space-x-2 md:w-4/12 bg-[#303031]">
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
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>{""}
            <span>Upload Image</span>

                </div>
                <input onChange={(e) => uploadImageHandler(e.target.files[0])} name="image" accept=".jpg, .png, .jpeg, .gif, .bmp, .tif, .tiff|image*" className="absolute z-10 opacity-0 bg-slate-100"
                id="image" type="file" />
            </div>
            <span onClick={() => dispatch({type: "uploadSliderBtn", payload: !data.uploadSliderBtn})}
            className="bg-[#303031] cursor-pointer absolute top-0 right-0 m-4 rounded-full p-1">
                 <svg
            className="w-6 h-6 text-white"
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
     </Fragment>  
    )
}

export default Customize
