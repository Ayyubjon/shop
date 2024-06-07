export const layoutState = {
    navbarHamburger: false,
    loginSignupModal: false,
    loginSignupError: false,
    cartModal: false,
    cartProduct: null,
    singleProductDetail: null,
    inCart: null,
    cartTotalCost: null,
    orderSuccess: false,
    loading: false,
}

export const layoutReducer = (state, action) => {
    switch (action.type) {
        case "hamburgerToggle":
            return {
                ...state,
                navbarHamburger: action.payload
            }
        case "loginSignupModalToggle":
            return {
                ...state,
                loginSignupModal: action.payload
            }
        case "cartModalToggle":
            return {
                ...state,
                cartModal: action.payload
            }
        default:
            return state
    }
}