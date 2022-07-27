import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { cartArray,visibleArray } from "./arrayContext"; 
import App from "./component/App";
import Header from "./component/header/Header"
import Shop from "./component/shop/Shop"

const RouteSwitch =() => {
    const [cartArr,setCartArr] = useState([])
    const [visibleArr,setVisibleArr] = useState(false)

    return(
        <BrowserRouter>
        <cartArray.Provider value={{cartArr,setCartArr}}>
        <visibleArray.Provider value={{visibleArr,setVisibleArr}}>
        <Header/>
        <Routes>
            <Route path="/" element={<App/>}/>
            <Route path="/shop" element={<Shop/>}/>
            
        </Routes>
        </visibleArray.Provider>
        </cartArray.Provider>
        </BrowserRouter>
    )
}

export default RouteSwitch