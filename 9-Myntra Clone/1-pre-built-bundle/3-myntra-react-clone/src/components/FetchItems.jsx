
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { itemsActions } from "./store/itemsSlice";
// import { fetchStatusActions } from "./store/FetchStatusSlice";

const FetchItems = () => {
  const fetchStatus = useSelector((state) => state.fetchStatus);
  const dispatch = useDispatch();
  console.log(fetchStatus);

  useEffect(() => {
    if (fetchStatus.fetchDone) return; // If fetch is already done, do nothing

    const controller = new AbortController();
    const signal = controller.signal;

    fetch("http://localhost:8080/items", { signal })
      //http://localhost:8080/items
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then(({ items }) => {
        // dispatch(fetchStatusActions.markFetchDone());
        dispatch(itemsActions.addInitialItems(items)); // Dispatch action to add items to Redux store
      })
      .catch((error) => {
        // Check if the fetch was aborted
        if (error.name !== 'AbortError') {
          console.error("Fetch error:", error);
          // Dispatch an action to update fetch status or handle error state in Redux
        }
      });

    // Clean-up function to abort fetch request if component unmounts or fetch is re-triggered
    return () => {
      controller.abort();
    };
  }, [fetchStatus, dispatch]); // useEffect will re-run whenever fetchStatus changes

  return (
    <>
      <div>
        Fetch Done : {fetchStatus.fetchDone.toString()}
        currently Fetching : {fetchStatus.currentlyFetching.toString()}
      </div>
    </>
  );
};

export default FetchItems;
