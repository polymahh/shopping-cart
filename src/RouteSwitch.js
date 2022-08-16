
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {ArrayProvider} from "./arrayContext"
import App from "./component/App";
import Header from "./component/header/Header"
import Shop from "./component/shop/Shop"



const RouteSwitch =() => {

    return(
        <BrowserRouter>
        <ArrayProvider>
                <Header/>
            <Routes>
                <Route path="/shopping-cart" element={<App/>}/>
                <Route path="/shopping-cart/shop" element={<Shop/>}/>
            </Routes>
        </ArrayProvider>
        </BrowserRouter>
    )
}

export default RouteSwitch