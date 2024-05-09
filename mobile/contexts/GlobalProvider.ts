import React, { createContext, useContext, useEffect, useState } from "react";

type GlobalContextProps = {
  isLogged?: boolean;
}


const GlobalContext = createContext<GlobalContextProps | null>(null);
export const useGlobalContext = () => useContext(GlobalContext);

const GlobalProvider = ({}) => {

};


