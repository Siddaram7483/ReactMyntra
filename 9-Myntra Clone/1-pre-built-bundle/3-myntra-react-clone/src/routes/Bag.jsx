// import BagItem from "../components/BagItem";
// import BagSummary from "../components/BagSummary";
// import { useSelector } from "react-redux";

// const Bag = () => {
//   // Ensure correct case for useSelector
//   const bagItems = useSelector(state => state.bag); // Assuming 'bag' is the correct state key
//   const items = useSelector(state => state.items); // Assuming 'items' is the correct state key

//   // Filter items that are in the bag
//   const finalItems = items.filter(item => bagItems.includes(item.id));

//   return (
//     <main>
//       <div className="bag-page">
//         <div className="bag-items-container">
//           {finalItems.map(item => (
//             <BagItem key={item.id} item={item} /> // Add key prop for list items
//           ))}
//         </div>
//         <BagSummary />
//       </div>
//     </main>
//   );
// };

// export default Bag;
import BagItem from "../components/BagItem";
import BagSummary from "../components/BagSummary";
import { useSelector } from "react-redux";

const Bag = () => {
  const bagItems = useSelector(state => state.bag); // Assuming 'bag' is the correct state key
  const items = useSelector(state => state.items); // Assuming 'items' is the correct state key

  // Filter items that are in the bag
  const finalItems = items.filter(item => bagItems.includes(item.id));

  return (
    <main>
      <div className="bag-page">
        <div className="bag-items-container">
          {finalItems.map(item => (
            <BagItem key={item.id} item={item} /> // Add key prop for list items
          ))}
        </div>
        <BagSummary />
      </div>
    </main>
  );
};

export default Bag;
