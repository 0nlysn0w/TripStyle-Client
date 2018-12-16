const initState = {
    products: [
      {ProductId: '1', Name: 'help me find peach', Make: 'blah blah blah', Price:'5', Stock:'5', Size:'M',Color:'Blue',Region:'Asia',Season:'winter' }
    ]
  }

  const productReducer = (state = initState, action) => {
    switch(action.type){
        case 'CREATED_PRODUCT':
            console.log('created product', action.product)
    }
    return state;
  };

  export default productReducer;