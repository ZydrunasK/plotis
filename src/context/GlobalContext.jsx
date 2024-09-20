import { createContext, useEffect, useState } from "react";

export const initialContext = {
    numOfCol: 1,
    numOfSqr: 1,
    activeCount: 0,
    data: () => {},
    addCol: () => {},
    removeCol: () => {},
    addSqr: () => {},
    removeSqr: () => {},
}



export const GlobalContext = createContext(initialContext);


export function ContextWrapper(props) {

    const [activeCount, setActiveCount] = useState(initialContext.activeCount);
    const [numOfCol, setNumOfCol] = useState(initialContext.numOfCol);
    const [numOfSqr, setNumOfSqr] = useState(initialContext.numOfSqr);
    
    let num = 0;

    function data(e) {
        let dataActive = (e.target.getAttribute('data-active') === 'false'? 'true' : 'false');
        e.target.setAttribute('data-active', dataActive);
        num += (dataActive === 'true' ? 1 : -1);
        console.log(num);  
    }
    function addCol() {
        return setNumOfCol(pre => pre +1); 
    }
    function removeCol() {
        return setNumOfCol(pre => pre === 1 ? pre : pre -1);
    }
    function addSqr() {
        return setNumOfSqr(pre => pre +1);  
    }
    function removeSqr() {
        return setNumOfSqr(pre => pre === 1 ? pre : pre -1);
    }




    const value ={
        numOfCol,
        numOfSqr,
        activeCount,
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