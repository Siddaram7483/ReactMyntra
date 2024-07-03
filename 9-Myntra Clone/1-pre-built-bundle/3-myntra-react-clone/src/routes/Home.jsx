// import HomeItem from "../components/HomeItem";
// import {useSelector} from "react-redux";

// const Home = () => {
// const items = useSelector(store =>store.items);

//   return (
//     <main>
//       <div className="items-container">
//         {items.map((item)=>(
//           <HomeItem key = {item.key} item={item} />
//         ))}
        
//       </div>
//     </main>
//   );
// };
// export default Home;

import HomeItem from "../components/HomeItem";
import {useSelector} from "react-redux";

const Home = () => {
  const  items = useSelector(store =>store.items);
  // items = []; 
  console.log("Got items",items);
  // console.log(items);

  return (
    <main>
      <div className="items-container">
        {items.map((item) => (
          <HomeItem key={item.id} item={item} />
        ))}
      </div>
    </main>
  );
};

export default Home;

