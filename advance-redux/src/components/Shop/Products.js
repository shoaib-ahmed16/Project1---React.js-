import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS =[
  { id:'p1',price:6,title:"MY FIRST BOOK",description:"The First Book I ever Read"},
  { id:'p2',price:9,title:"MY SECOND BOOK",description:"The Second Book I ever Read"},
  { id:'p3',price:10,title:"MY THIRD BOOK",description:"The Third Book I ever Read"},
  { id:'p4',price:5,title:"MY FOURTH BOOK",description:"The Fourth Book I ever Read"}
]

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {
          DUMMY_PRODUCTS.map((product)=>( 
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />))
        }
       
      </ul>
    </section>
  );
};

export default Products;
