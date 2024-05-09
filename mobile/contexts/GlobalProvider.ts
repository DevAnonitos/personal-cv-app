import React, { createContext, useContext, useEffect, useState } from "react";

const GlobalContext = createContext<null>(null);
export const useGlobalContext = () => useContext(GlobalContext);



