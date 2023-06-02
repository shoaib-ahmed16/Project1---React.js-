import {uiActions} from './ui-slice';
import {cardActions } from './cart-slice';
export const fetchCartData =()=>{
  return async dispatch =>{
    const fetchData =async  ()=>{
      const response = await fetch("https://react-backend-ba397-default-rtdb.firebaseio.com/cart.json");
      if(!response.ok){
        throw Error("Could not fetch cart data!");
      }
      return await response.json();
    }
    try{
      const cartData =await fetchData();
      dispatch(cardActions.replaceCart({items:cartData.items ||[],
      totalQuantity:cartData.totalQuantity}))
    }catch(error){
      dispatch(uiActions.showNotification({
          status:'error',
          title:'Oh Oh so sorry...',
          message:'Fetching cart data failed!'
      }))
    }
  }
}
export const sendCartData =(cart) =>{
  console.log(cart)
  return async (dispatch)=>{
   dispatch(
    uiActions.showNotification({
      status:'pending',
      title:'Sending...',
      message:'Sending cart data!'
    })
    );

    const sendRequest = async ()=>{
      const response = await fetch('https://react-backend-ba397-default-rtdb.firebaseio.com/cart.json',{
      method:'PUT',
      body:JSON.stringify({
        items:cart.items,
        totalQuantity:cart.totalQuantity,
      }),
      })
      if(!response.ok){
        console.log("helo")
        throw new Error('Sending cart data failed.')
      }
      return await response.json();
    }
    try{   
        dispatch(uiActions.showNotification({
        status:'success',
        title:'Success...',
        message:'Sending cart data successfully!'
      }));
      let data=sendRequest();
    }catch(error){
       dispatch(uiActions.showNotification({
          status:'error',
          title:'Oh Oh so sorry...',
          message:'Sending cart data failed!'
        }))
    }
  };
};