import React, {createContext, useState} from "react";


const shopCarProvider = (props) =>{
    const [state,setState] = useState({});
    return(
        <div>
            <ShopCarContext.Provider value={[state,setState]}>
                {props.children}
            </ShopCarContext.Provider>
        </div>
    )
}
export default shopCarProvider;
export const ShopCarContext = createContext([])