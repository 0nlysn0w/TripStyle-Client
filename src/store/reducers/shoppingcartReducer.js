const initState = {
    products: [ ]
  }

  const shoppingcartReducer = (state = initState, action) => {
    switch(action.type){
        case 'ADD_PRODUCT':
            console.log('added product', action.product);
            return {
              products: [...state.products, action.product]
            };
        // case'REMOVE_PRODUCT':
        //     console.log('removed product',action);
          
    }
    return state;
  };

  export default shoppingcartReducer;