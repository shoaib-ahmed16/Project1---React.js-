import {createSlice} from '@reduxjs/toolkit';
import {uiActions} from './ui-slice';
const cartSlice =createSlice({
  name:'cart',
  initialState:{
    items:[],
    totalQuantity:0,
    changed:false,
  },
  reducers:{
    replaceCart(state,action){
      state.totalQuantity=action.payload.totalQuantity;
      state.items =action.payload.items;
    },
    addItemToCart(state,action){
      const newItem =action.payload;
      const existingItem =state.items.find(item=>item.id ===newItem.id);
      state.totalQuantity++;
      state.changed=true;
      if(!existingItem){
        state.items.push({
          id:newItem.id,
          price:newItem.price,
          quantity:1,
          totalPrice:newItem.price,
          name:newItem.title
        })
      }else{
        existingItem.quantity++;
        existingItem.totalPrice=existingItem.totalPrice+newItem.price;
        //in pure redux use push action manupulate the array and create error this is must remember point on prespective //of redux store use case, but here we are using redux-toolkit thus effect will internally handle by the redux-toolkit.
      }
    },
    removeItemFromCart(state,action){
      const id=action.payload;
       const existingItem =state.items.find(item=>item.id ===id);
       state.totalQuantity--;
       state.changed=true;
       if(existingItem.quantity===1){
        state.items=state.items.filter((item)=>item.id!==id);
       }else{
        existingItem.quantity--;
        existingItem.totalPrice=existingItem.totalPrice-existingItem.price;
       }
    }
  }
})


export const sendCartData =(cart) =>{
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
      body:JSON.stringify(cart),
      })
      if(!response.ok){
        throw new Error('Sending cart data failed.')
      }
    }
    try{   
        await sendRequest()
        dispatch(uiActions.showNotification({
        status:'success',
        title:'Success...',
        message:'Sending cart data successfully!'
      }));

    }catch(error){
       dispatch(uiActions.showNotification({
          status:'error',
          title:'Success...',
          message:'Sending cart data failed!'
        }))
    }
  };
};

export const cardActions = cartSlice.actions;
export default cartSlice;