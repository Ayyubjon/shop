import { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { DashboardContext } from "./DashboardAdmin"

const SellTable = () => {
    const navigate = useNavigate()
    const { data, dispatch } = useContext(DashboardContext)

    useEffect(() => {

    }, [])

    const orderList = () => {
        let newList = []
        if (data.totalOrders.Orders !== undefined) {
            data.totalOrders.Orders.forEach((elem) => {
                if (moment(elem.createdAt).format("LL") === moment().format("LL")) {
                    newList = [...newList, elem]
                }
            })
        }
        return newList
    }
    return (
        <div>
            <div className="col-span-1 overflow-auto bg-white shadow-lg p-4">
                <div className="text-2xl font-semibold  mb-6 text-center">
                    Today's Orders{""}
                    {data.totalOrders.Orders !== undefined ? orderList().length : 0}
                </div>
                <table className="table-auto border w-full my-2">
                    <thead>
                        <tr>
                            <th className="px-4 py-4 border">Products</th>
                            <th className="px-4 py-4 border">Image</th>
                            <th className="px-4 py-4 border">Status</th>
                            <th className="px-4 py-4 border">Order Address</th>
                            <th className="px-4 py-4 border">Ordered At</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.totalOrders.Orders !== undefined ? (
                            orderList().map((item, i) => {
                                return <totalOrderTable order={item} key={i} />
                            })
                        ) : (
                            <tr>
                                <td colSpan="5" className="text-xl text-center font-semibold py-8">NO orders found today</td>
                            </tr>
                        )}
                    </tbody>
                </table>
                <div className="text-sm text-gray-600 mt-2">
                    Total{""}
                    {data.totalOrders.Orders !== undefined ? orderList().length : 0}{""}
                    orders found
                </div>
                <div className="flex justify-center">
                    <span
                        onClick={() => navigate("/admin/dashboard/orders")} className="cursor-pointer px-4 py-2 text-white rounded-full bg-[#303031]">
                        View All
                    </span>
                </div>
            </div>
        </div>
    )
}

const TodayOrderTable = ({ order }) => {
    return (
        <>
            <tr>
                <td className="w-48 hover:bg-gray-200 p-2 flex flex-col space-y-1">
                    {order.allProduct.map((item, i) => {
                        return (
                            <div>
                                <span>{item.id.pName}</span>
                                <span>{item.quantitiy}</span>
                            </div>
                        )
                    })}
                </td>
                <td className="p-2 text-left">
                    {order.allProduct.map((item, i) => (
                        <img src={item.id.pImages[0].url} key={i} alt="Pit" />
                    ))}
                </td>
                <td className="p-2 text-center">
                    {order.status === "Not processed" && (
                        <span className="block text-red-600 rounded-full text-center text-xs px-2 font-semibold">
                            {order.status}
                        </span>
                    )}
                    {order.status === "Processing" && (
                        <span className="block text-red-600 rounded-full text-center text-xs px-2 font-semibold">
                            {order.status}
                        </span>
                    )}
                    {order.status === "Shipped" && (
                        <span className="block text-red-600 rounded-full text-center text-xs px-2 font-semibold">
                            {order.status}
                        </span>
                    )}
                    {order.status === "Delivered" && (
                        <span className="block text-red-600 rounded-full text-center text-xs px-2 font-semibold">
                            {order.status}
                        </span>
                    )}
                    {order.status === "Cancelled" && (
                        <span className="block text-red-600 rounded-full text-center text-xs px-2 font-semibold">
                            {order.status}
                        </span>
                    )}
                </td>
                <td className="p-2 text-center">{order.status}</td>
                <td className="p-2 text-center">{moment(order.createdAt).format("lll")}</td>

            </tr>
        </>
    )
}



const TodaySell = () => {
    return (
        <div className="m-4">
            <SellTable />
        </div>
    )
}

export default TodaySell

