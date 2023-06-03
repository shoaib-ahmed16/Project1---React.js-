import { useParams,Link } from "react-router-dom";
function ProductDeatilsPage(){
  const params =useParams();

  return <>
    <h1>Products Details</h1>
    {params.productId}
    <p>
      <Link to=".." relative="path">Back</Link>
    </p>
  </>
  
}
export default ProductDeatilsPage;