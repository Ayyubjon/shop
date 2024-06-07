/* eslint-disable react/no-children-prop */
import { createContext, useReducer } from "react";
import Layout from "../layout/Layout";
import { homeReducer, homeState } from "./HomeContext";
import Slider from "./Slider";
import ProductCategory from "./ProductCategory";

export const HomeContext = createContext();

const HomeComponent = () => {
    return(
        <>
            <Slider/>
            
            <section className="m-4 md:mx-8 md:my-6">
                <ProductCategory/>
            </section>
        </>
    )
}

const Home = () => {
    const [data, dispatch] = useReducer(homeReducer, homeState)
    return (
        <HomeContext.Provider value={{data, dispatch}}>
            <Layout children={<HomeComponent/>}/>
        </HomeContext.Provider>
    )
}

export default Home;