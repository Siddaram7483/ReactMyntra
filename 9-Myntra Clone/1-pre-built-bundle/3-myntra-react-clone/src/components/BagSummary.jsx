// import PropTypes from "prop-types";

// const BagSummary = () => {
//   const bagSummary = {
//     totalItem: 3,
//     totalMRP: 2345,
//     totalDiscount: 999,
//     finalPayment: 1346
//   };

//   // const { totalItem, totalMRP, totalDiscount, finalPayment } = bagSummary;

//   return (
    
//      <div className="bag-summary">
//       <div className="bag-details-container">
//         <div className="price-header">PRICE DETAILS ({bagSummary.totalItem} Items) {" "}
//         </div>
//         <div className="price-item">
//           <span className="price-item-tag">Total MRP</span>
//           <span className="price-item-value">₹{bagSummary.totalMRP}</span>
//         </div>
//         <div className="price-item">
//           <span className="price-item-tag">Discount on MRP</span>
//           <span className="price-item-value priceDetail-base-discount">
//             -₹{bagSummary.totalDiscount}
//           </span>
//         </div>
//         <div className="price-item">
//           <span className="price-item-tag">Convenience Fee</span>
//           <span className="price-item-value">₹99</span>
//         </div>
//         <hr />
//         <div className="price-footer">
//           <span className="price-item-tag">Total Amount</span>
//           <span className="price-item-value">₹{bagSummary.finalPayment}</span>
//         </div>
//       </div>
//       <button className="btn-place-order">
//         <div className="css-xjhrni">PLACE ORDER</div>
//       </button>
//       </div>
    
//   );
// };

// BagSummary.propTypes = {
//   totalItem: PropTypes.number,
//   totalMRP: PropTypes.number,
//   totalDiscount: PropTypes.number,
//   finalPayment: PropTypes.number
// };

// export default BagSummary;
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

const BagSummary = () => {
  const bagItemIds = useSelector(state => state.bag); // Assuming 'bag' is the state key for bag item IDs
  const items = useSelector(state => state.items); // Assuming 'items' is the state key for items

  // Filter items that are in the bag
  const finalItems = items.filter(item => bagItemIds.includes(item.id));

  const CONVENIENCE_FEES = 99;
  const totalItem = bagItemIds.length;
  let totalMRP = 0;
  let totalDiscount = 0;

  finalItems.forEach(item => {
    totalMRP += item.original_price;
    totalDiscount += item.original_price - item.current_price;
  });

  const finalPayment = totalMRP - totalDiscount + CONVENIENCE_FEES;

  return (
    <div className="bag-summary">
      <div className="bag-details-container">
        <div className="price-header">PRICE DETAILS ({totalItem} Items)</div>
        <div className="price-item">
          <span className="price-item-tag">Total MRP</span>
          <span className="price-item-value">₹{totalMRP}</span>
        </div>
        <div className="price-item">
          <span className="price-item-tag">Discount on MRP</span>
          <span className="price-item-value priceDetail-base-discount">
            -₹{totalDiscount}
          </span>
        </div>
        <div className="price-item">
          <span className="price-item-tag">Convenience Fee</span>
          <span className="price-item-value">₹{CONVENIENCE_FEES}</span>
        </div>
        <hr />
        <div className="price-footer">
          <span className="price-item-tag">Total Amount</span>
          <span className="price-item-value">₹{finalPayment}</span>
        </div>
      </div>
      <button className="btn-place-order">
        <div className="css-xjhrni">PLACE ORDER</div>
      </button>
    </div>
  );
};

BagSummary.propTypes = {
  totalItem: PropTypes.number,
  totalMRP: PropTypes.number,
  totalDiscount: PropTypes.number,
  finalPayment: PropTypes.number
};

export default BagSummary;
