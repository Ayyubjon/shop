export const categoryState = {
    categories: [],
    addCategoryModal: false,
    editCategoryModal: {
        modal: false,
        cId:null,
        des: "",
        status: ""
    },
    loading: false
}

export const categoryReducer = (state, action) => {
    switch(action.type){
        case"fetchCategoryAndState":
        return{
            ...state,
            categories: action.payload
        }
        case "addCategoryModal":
        return{
            ...state,
            addCategoryModal: action.payload
        }
        case "loading":
            return{
                ...state,
                loading:action.payload
            }
        default:
            return  state
    }
}