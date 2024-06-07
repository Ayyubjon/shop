/* eslint-disable react/no-children-prop */
import { createContext, useReducer } from "react"
import { dashboardReducer, dashboardState } from "./DashboardContex"
import AdminLayout from "../layout/AdminLayout"
import DashboardCard from "./DashboardCard"
import Customize from "./Customize"
import TodaySell from "./TodaySell"

export const DashboardContext = createContext()

const DashboardComponent = () => {
    return (
        <>
        <DashboardCard/>
        <Customize/>
        <TodaySell/>
        </>
    )
}


const DashboardAdmin = () => {
    const [data, dispatch] = useReducer(dashboardReducer, dashboardState)
    return (
        <>
            <DashboardContext.Provider value={{ data, dispatch }}>
                <AdminLayout children={<DashboardComponent />} />
            </DashboardContext.Provider>
        </>
    )
}

export default DashboardAdmin