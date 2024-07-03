// import PropTypes from "prop-types";

// const HomeItem = ({ item }) => {
//   return (
//     <div className="item-container">
//       <img className="item-image" src={item.image} alt="item image" />
//       {/* <div className="rating">
//         {item.rating.stars} ⭐ | {item.rating.count}
//       </div> */}
//       <div className="company-name">{item.company}</div>
//       <div className="item-name">{item.item_name}</div>
//       <div className="price">
//         <span className="current-price">Rs {item.current_price}</span>
//         <span className="original-price">Rs {item.original_price}</span>
//         <span className="discount">({item.discount_percentage} % OFF)</span>
//       </div>
//       <button
//         className="btn-add-bag"
//         onClick={() => console.log("item was clicked")}
//       >
//         Add to Bag
//       </button>
//     </div>
//   );
// };

// HomeItem.propTypes = {
//   item: PropTypes.shape({
//     image: PropTypes.string.isRequired,
//     rating: PropTypes.shape({
//       stars: PropTypes.number.isRequired,
//       count: PropTypes.number.isRequired,
//     }).isRequired,
//     company: PropTypes.string.isRequired,
//     item_name: PropTypes.string.isRequired,
//     current_price: PropTypes.number.isRequired,
//     original_price: PropTypes.number.isRequired,
//     discount_percentage: PropTypes.number.isRequired,
//   }).isRequired,
// };
// export default HomeItem;

import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { bagActions } from "./store/bagSlice";
import { IoMdAddCircle } from "react-icons/io";
import { CiSquareRemove } from "react-icons/ci";

const HomeItem = ({ item }) => {
  const dispatch = useDispatch();
  const bagItems = useSelector((store) => store.bag);
  const elementFound = bagItems.indexOf(item.id) >= 0;
  // console.log(item.id, elementFound);

  const handleAddToBag = () => {
    dispatch(bagActions.addToBag(item.id));
  };
  const handleRemove = () => {
    dispatch(bagActions.removeFromBag(item.id));
  };


  return (
    <div className="item-container">
      <img className="item-image" src={item.image} alt="item image" />
      {item.rating && (
        <div className="rating">
          {item.rating.stars} ⭐ | {item.rating.count}
        </div>
      )}
      <div className="company-name">{item.company}</div>
      <div className="item-name">{item.item_name}</div>
      <div className="price">
        <span className="current-price">Rs {item.current_price}</span>
        <span className="original-price">Rs {item.original_price}</span>
        <span className="discount">({item.discount_percentage} % OFF)</span>
      </div>

      {elementFound ? (
        <button type="button" className="btn-add-bag btn btn-danger" onClick={handleRemove}>
          <CiSquareRemove /> Remove
        </button>
      ) : (
        <button
          type="button"
          className="btn-add-bag btn btn-success"
          onClick={handleAddToBag}
        >
          <IoMdAddCircle />
          Add to Bag
        </button>
      )}
    </div>
  );
};

HomeItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    rating: PropTypes.shape({
      stars: PropTypes.number.isRequired,
      count: PropTypes.number.isRequired,
    }),
    company: PropTypes.string.isRequired,
    item_name: PropTypes.string.isRequired,
    current_price: PropTypes.number.isRequired,
    original_price: PropTypes.number.isRequired,
    discount_percentage: PropTypes.number.isRequired,
  }).isRequired,
};

export default HomeItem;
