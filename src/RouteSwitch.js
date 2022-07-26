import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { cartArray } from "./arrayContext"; 
import App from "./component/App";
import Header from "./component/header/Header"
import Shop from "./component/shop/Shop"

const RouteSwitch =() => {
const [cartArr,setCartArr] = useState([])

    return(
        <BrowserRouter>
        <cartArray.Provider value={{cartArr,setCartArr}}>
        <Header/>
        <Routes>
            <Route path="/" element={<App/>}/>
            <Route path="/shop" element={<Shop/>}/>
        </Routes>
        </cartArray.Provider>
        </BrowserRouter>
    )
}

export default RouteSwitch