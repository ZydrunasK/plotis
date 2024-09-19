import { createContext, useEffect, useState } from "react";

export const initialContext = {
    numOfCol: 1,
    numOfSqr: 1,
    addCol: () => {},
    removeCol: () => {},
    addSqr: () => {},
    removeSqr: () => {},
}



export const GlobalContext = createContext(initialContext);


export function ContextWrapper(props) {

    const [numOfCol, setNumOfCol] = useState(initialContext.numOfCol);
    const [numOfSqr, setNumOfSqr] = useState(initialContext.numOfSqr);
    
    function addCol() {
        setNumOfCol(pre => pre + 1);
        console.log(numOfCol);
        
    }
    function removeCol() {
        setNumOfCol(pre => pre === 1 ? pre : pre -1);
    }
    function addSqr() {
        setNumOfSqr(pre => pre + 1);
        console.log(numOfSqr);
        
    }
    function removeSqr() {
        setNumOfSqr(pre => pre === 1 ? pre : pre -1);
        console.log(numOfSqr);
    }
    




    const value ={
        numOfCol,
        numOfSqr,
        addCol,
        removeCol,
        addSqr,
        removeSqr,
    }

    return (
        <GlobalContext.Provider value={value}>
            {props.children}
        </GlobalContext.Provider>
    );
}
