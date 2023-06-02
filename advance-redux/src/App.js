import { useSelector,useDispatch } from 'react-redux';
import { useEffect,Fragment } from 'react';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { uiActions } from './store/cart-actions';
import Notification from './components/UI/Notification';
import { sendCartData,fetchCartData } from './store/cart-actions';
let inInitail =true;

function App() {
  const dispatch =useDispatch();
  const showCart =useSelector(state =>state.ui.cartIsVisible);
  const cart=useSelector(state=>state.cart);
  const notification =useSelector(state =>state.ui.notification)
  // this method code is return in  the file cart-slice 
  // Better practice and approch for lean and clean code
  useEffect(()=>{
    dispatch(fetchCartData())
  },[dispatch]);

  useEffect(()=>{
    if(inInitail){
      inInitail =false;
      return;
    }
    if(cart.changed){
      dispatch(sendCartData(cart))
    }
   
  },[cart,dispatch]);
  /* actable but it create component fat not code coding style
  useEffect(()=>{
    dispatch(uiActions.showNotification({
      status:'pending',
      title:'Sending...',
      message:'Sending cart data!'
    }))
    const sendCartData =async ()=>{
     const response = await fetch('https://react-backend-ba397-default-rtdb.firebaseio.com/cart.json',{
        method:'PUT',
        body:JSON.stringify(cart),
      })
      if(!response.ok){
        throw new Error('Sending cart data failed.')
      }
      dispatch(uiActions.showNotification({
        status:'success',
        title:'Success...',
        message:'Sending cart data successfully!'
      }))
      const responseData =await response.json();
    }
    if(inInitail){
      inInitail =false;
      return;
    }
    sendCartData().catch(
       dispatch(uiActions.showNotification({
          status:'error',
          title:'Success...',
          message:'Sending cart data failed!'
        }))
    )
  },[cart,dispatch]);
  */
  return (
    <Fragment>
      {notification && <Notification status={notification.status} title={notification.title} message={notification.message}/>}
      <Layout>
      {showCart && <Cart />}
      <Products />
    </Layout>
    </Fragment>
    
  );
}

export default App;
