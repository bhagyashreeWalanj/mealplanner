import { useState, useCallback } from "react";

const useNavigation = () => {
  const [route, setRoute] = useState("/");

  const selectAction = useCallback(
    (option: any) => {
      if (route === option) return;
      setRoute(option);
    },
    [route]
  );

  return { currentRoute: route, setCurrentRoute: selectAction };
};

export default useNavigation;
