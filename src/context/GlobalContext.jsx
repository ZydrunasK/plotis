import { createContext, useState } from "react";

export const initialContext = {
    numOfCol: 1,
    numOfSqr: 1,
    data: () => {},
    addCol: () => {},
    removeCol: () => {},
    addSqr: () => {},
    removeSqr: () => {},
}



export const GlobalContext = createContext(initialContext);


export function ContextWrapper(props) {

    const [numOfCol, setNumOfCol] = useState(initialContext.numOfCol);
    const [numOfSqr, setNumOfSqr] = useState(initialContext.numOfSqr);
    

    function data(e) {
        console.log(e);
        console.log(e.target.attributes[0]);
    }
    function addCol() {
        setNumOfCol(pre => pre + 1); 
    }
    function removeCol() {
        setNumOfCol(pre => pre === 1 ? pre : pre -1);
    }
    function addSqr() {
        setNumOfSqr(pre => pre + 1);  
    }
    function removeSqr() {
        setNumOfSqr(pre => pre === 1 ? pre : pre -1);
    }
    




    const value ={
        numOfCol,
        numOfSqr,
        data,
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
