import {Link,useNavigate} from 'react-router-dom'
function HomePage(){
  const navigate =useNavigate();

  //needs in somecases 
  function navigationHandler(){
    navigate('products')
  }
  return <>
  <h1>My Home page</h1>
  <p>GO TO <Link to='products'>link to Products page</Link></p>
  <p>
    <button onClick={navigationHandler}>
      Navigate
    </button>
  </p>
  </>
}

export default HomePage;