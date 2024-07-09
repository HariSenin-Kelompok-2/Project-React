import { useDispatch } from "react-redux";
import { fetchUserData } from "./redux/slices/authSlice";
import { useEffect } from "react";

// eslint-disable-next-line react/prop-types
const AppInitializer = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserData());
  }, [dispatch]);

  return <>{children}</>;
};

export default AppInitializer;
