export const homeState = {
    loading: false,
    sliderImages: [
        { url: '/Screenshot (4).png' },
        { url: '/Screenshot (5).png' },
        { url: '/Screenshot (6).png' },
        { url: '/Screenshot (7).png' },
    ],
    products: null,
    categoryListDropdown: false,
    filterListDropdown: false,
    searchDropdown: false
}

export const homeReducer = (state, action) => {
    switch (action.type) {
        case "categoryListDropdown":
            return {
                ...state,
                categoryListDropdown: action.payload,
                filterListDropdown: false,
                searchDropdown: false
            }
        case "filterListDropdown":
            return {
                ...state,
                filterListDropdown: action.payload,
                categoryListDropdown: false,
                searchDropdown: false
            }
        case "searchDropdown":
            return {
                ...state,
                searchDropdown: action.payload,
                filterListDropdown: false,
                categoryListDropdown: false
            }
        case "setProducts":
            return {
                ...state,
                products: action.payload
            }
        case "loading":
            return {
                ...state,
                loading: action.payload
            }
        case "searchHandleInReducer":
            return {
                ...state,
                products: action.productArray && action.productArray.filter((item) => {
                    if (item.pName.toUpperCase().indexOf(action.payload.toUpperCase()) !== -1) {
                        return item
                    }
                    return null;
                })
            }
        default:
            return state
    }
}