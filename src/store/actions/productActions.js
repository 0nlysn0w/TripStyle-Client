export const createProduct = (product) => {
    return (dispatch, getState) => {
        dispatch({type: 'CREATE_PRODUCT', product});
    }
};