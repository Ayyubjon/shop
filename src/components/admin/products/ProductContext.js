export const productState = {
    products: null,
    addProductModal: false,
    editProductModal: {
        modal: false,
        pId: "",
        pName: "",
        pDescription: "",
        pImage: "",
        pStatus: "",
        pCategory: "",
        pPrice: "",
        pQuantity: "",
        pOffer: ""
    }
}

export const productReducer = (state, action) => {
    switch (action.type) {
        case "fetchProductsAndChangeState":
            return {
                ...state,
                products: action.payload
            }
        case "addProductModal":
            return {
                ...state,
                addProductModal: action.payload
            }
        case "editProductModalOpen":
            return {
                ...state,
                editProductModalOpen: {
                    modal: true,
                    pId: action.product.pId,
                    pName: action.product.pName,
                    pDescription: action.product.pDescription,
                    pImages: action.product.pImages,
                    pStatus: action.product.pStatus,
                    pCategory: action.product.pCategory,
                    pQuantity: action.product.pQuantity,
                    pPrice: action.product.pPrice,
                    pOffer: action.product.pOffer,

                }
            }
            case "editProductModalClose":
                return {
                    ...state,
                    editProductModalClose: {
                        modal: false,
                        pId: "",
                        pName: "",
                        pDescription: "",
                        pImage: "",
                        pStatus: "",
                        pCategory: "",
                        pPrice: "",
                        pQuantity: "",
                        pOffer: ""
                    }
                }
        default:
            return state
    }
}
