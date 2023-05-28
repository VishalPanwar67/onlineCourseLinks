import "./product.css";

const Product = ({ link, platform, courseName }) => {
  // console.log(key);
  return (
    <div className="p">
      <div className="p-browser">
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-circle"></div>
      </div>

      <p className="courseName">{courseName}</p>
      <p>{platform}</p>
      <div className="btn">
        <a href={link} target="_blank" rel="noreferrer">
          <li className="btn1">Click Here</li>
        </a>
      </div>
    </div>
  );
};

export default Product;
