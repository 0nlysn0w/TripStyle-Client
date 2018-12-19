const initState = {
    products: [
      {ProductId: '1', Name: 'help me find peach', Make: 'blah blah blah', Price:'5', Stock:'5', Size:'M',Color:'Blue',Region:'Asia',Season:'winter' },
      {ProductId: '2', Name: 'help me find peach', Make: 'blah blah blah', Price:'5', Stock:'5', Size:'M',Color:'Blue',Region:'Asia',Season:'winter' },
      {ProductId: '3', Name: 'help me find peach', Make: 'blah blah blah', Price:'5', Stock:'5', Size:'M',Color:'Blue',Region:'Asia',Season:'winter' }
      
    ]
  }

  const productReducer = (state = initState, action) => {
    switch(action.type){
        case 'CREATE_PRODUCT':
            console.log('created product', action.product)
            return {
              products: [...state.products, action.product]
            };
        case'DELETE_PRODUCT':
              let newProducts = state.products.filter(product=>{
                  return action.ProductId !== product.ProductId
              })
              return {
                  
                  ...state,
                  products: newProducts
              }
        

          
    }
    return state;
  };

  export default productReducer;