import { useContext, useState } from "react";
import { HomeContext } from "./Home";
import { nextSlide, prevSlide } from "./ExtraFunction";

const Slider = () => {
    const { data, dispatch } = useContext(HomeContext)
    const [slide, setSlide] = useState(0);
    return (
        <>
            <div className="relative mt-16 bg-gray-100 border-2">
                {data.sliderImages.length > 0 ? (
                    <img src={data.sliderImages[slide].url} alt="sliderImage" className="w-full" />
                ) : (
                    null
                )}

                {data?.sliderImages?.length > 0 ? (
                    <>
                        <svg
                            onClick={() =>
                                prevSlide(data.sliderImages.length, slide, setSlide)
                            }
                            className={`z-10 absolute top-0 left-0 mt-64 items-center box-border flex justify-center w-12 h-12 text-gray-700 cursor-pointer hover:text-yellow-700`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 19l-7-7 7-7"
                            />
                        </svg>
                        <svg
                            onClick={() =>
                                nextSlide(data.sliderImages.length, slide, setSlide)
                            }
                            className={`z-10 absolute top-0 right-0 mt-64 flex justify-start items-center box-border w-12 h-12 text-gray-700 cursor-pointer hover:text-yellow-700`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7"
                            />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <a
                                href="#shop"
                                style={{ background: "#303031" }}
                                className="cursor-pointer box-border text-2xl text-white px-4 py-2 rounded"
                            >
                                Shop Now
                            </a>
                        </div>
                    </>
                ) : (
                    null
                )}
            </div>
        </>
    )
}

export default Slider;