import React from "react";
import useAuth from "../hooks/useAuth";
import SignInStack from "./SigInStack";
import SignedInBottomTab from "./SignedInBottomTab";

const Navigation: React.FC = () => {
  const { isLogged } = useAuth();
  return isLogged ? <SignedInBottomTab /> : <SignInStack />;
};

export default Navigation;
