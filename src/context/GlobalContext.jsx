import { createContext, useEffect, useState } from "react";

export const initialContext = {
    numOfCol: 1,
    numOfSqr: 1,
    addCol: () => {},
    removeCol: () => {},
    addSqr: () => {},
    removeSqr: () => {},
    click: () => {},
}



export const GlobalContext = createContext(initialContext);


export function ContextWrapper(props) {

    const [numOfCol, setNumOfCol] = useState(initialContext.numOfCol);
    const [numOfSqr, setNumOfSqr] = useState(initialContext.numOfSqr);
    

    function click() {
        console.log('asdfasdfas');
    }
    function addCol() {
        setNumOfCol(pre => pre + 1)
    }
    function removeCol() {
        setNumOfCol(pre => pre - 1)
    }
    function addSqr() {
        setNumOfSqr(pre => pre + 1)
    }
    function removeSqr() {
        setNumOfSqr(pre => pre - 1)
    }




    const value ={
        numOfCol,
        numOfSqr,
        addCol,
        removeCol,
        addSqr,
        removeSqr,
        click,
    }

    return (
        <GlobalContext.Provider value={value}>
            {props.children}
        </GlobalContext.Provider>
    );
}
