import "./productList.css";
import Product from "../product/Product";
import { products } from "../../data";


const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        
        <h1 className="pl-title">All Online Course</h1>
      </div>
      <div className="pl-list">
        {products.map((item) => (
          <Product
            // key={item.id}
            link={item.courseLink}
            platform={item.platform}
            courseName={item.courseName}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
