export const createProduct = (product) => {
    return (dispatch, getState) => {
        dispatch({type: 'CREATE_PRODUCT', product});
    }
};
export const deleteProduct = (ProductId) => {
    return (dispatch, getState) => {
        dispatch({type: 'DELETE_PRODUCT', ProductId});
    }
};