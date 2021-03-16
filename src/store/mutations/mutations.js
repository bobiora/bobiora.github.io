export default {
    SET_PRODUCTS: (state, products) => {
        state.products = products;
      },
      SET_CART: (state, product) => {
        if(state.cart.length){
          let isProductEx = false;
          state.cart.map(function(item){
            if(item.id === product.id){
              isProductEx = true;
              item.qty++
            }
          });
          if (!isProductEx){
            state.cart.push(product);
          }
        }else{
          state.cart.push(product);
        }
        
      },
      REMOVE_FROM_CART: (state, index) => {
        state.cart.splice(index, 1)
      },
      INCRITEM: (state, index) =>{
          state.cart[index].qty++
      },
      DICRITEM: (state, index) =>{
        if(state.cart[index].qty > 1){
          state.cart[index].qty--
        }
      }
}