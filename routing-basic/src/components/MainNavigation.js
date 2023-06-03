import { NavLink } from "react-router-dom";
import classes from './MainNavigaion.module.css'
function MainNavigation (){
  return <>
  <header className={classes.header}>
    <nav>
      <ul className={classes.list}>
        <li><NavLink to="" className={({isActive})=>{return isActive?classes.active:undefined}} end>Home</NavLink></li>
        <li><NavLink to="products" className={({isActive})=>{return isActive?classes.active:undefined}} end>Products</NavLink></li>
      </ul>
    </nav>
  </header>
  </>
}

export default MainNavigation;