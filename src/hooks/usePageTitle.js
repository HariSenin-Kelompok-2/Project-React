import { useEffect } from "react";

const usePageTitle = (title) => {
    useEffect(() => {
      document.title = title;

      return () => {
        document.title = "Welcome to Steam";
      }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
};

export default usePageTitle;
