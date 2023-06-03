import { createBrowserRouter,RouterProvider,createRoutesFromElements,Route} from 'react-router-dom'
import HomePage from './pages/home';
import Products from './pages/Products';
import RootLayout from './pages/Root';
import ErrorPage from './pages/Error'
import ProductDeatilsPage from './pages/ProductDetails'
/*Old way of creatinf Routes in React.js
const routeDefinition =createRoutesFromElements(
  <Route>
    <Route path='/' element={<HomePage/>}></Route>
    <Route path='/cart' element={<Cart/>}></Route>
  </Route>
)

const router=createBrowserRouter(routeDefinition)
*/
const router=createBrowserRouter([
  {
    path:'/',
    element:<RootLayout/>,
    errorElement:<ErrorPage/>,
    children:[ 
      {index:true ,path:'',element:<HomePage/>},
      {path:'products',element:<Products/>},
      {path:'products/:productId',element:<ProductDeatilsPage/>}
    ]
  }
 
])

function App() {
  return <RouterProvider router={router}/>;
}

export default App;
