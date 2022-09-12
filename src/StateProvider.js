import React,{createContext,useContext,useReducer} from "react";
//create data layer/store
export const StateContext=createContext();

//wrap app and provide data layer/store
export const StateProvider=({reducer,initialState,children})=>(
 <StateContext.Provider value={useReducer(reducer,initialState
 )} >
 {children}
 </StateContext.Provider>
);
//  extract the data from data layer
 export const useStateValue=()=>useContext(StateContext);
