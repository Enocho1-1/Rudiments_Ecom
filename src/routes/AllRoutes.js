import { Route, Routes } from "react-router-dom";
import { Home, Cart, CollectionPage, PiecePage, ItemDetail, SearchItem, NotFound,Initial,Login, Register, Delivery,Payment,OrderPage,ViewOrder,AccountDetail } from "../pages";
import {ProtectedRoutes} from "./components/ProtectedRoutes"

export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={(<Home title="Home" />)}/>
        <Route path="shop" element={(<CollectionPage apiPath="/shop"/>)}/>
        <Route path="t-shirt" element={(<PiecePage apiPath="TShirts" title="Men's Essential Tees"/>)}/>
        <Route path="shirt" element={(<PiecePage apiPath="Shirts" title="Men's Shirts"/>)}/>
        <Route path="pants" element={(<PiecePage apiPath="Pants" title="Men's Pants"/>)}/>
        <Route path="shorts" element={(<PiecePage apiPath="Shorts" title="Men's Shorts"/>)}/>
        <Route path="shoes" element={(<PiecePage apiPath="Shoes" title="Men's Shoes & Sandals"/>)}/>
        <Route path="accessories" element={(<PiecePage apiPath="Accessories" title="Men's Accessories"/>)}/>
        <Route path="ALL_Products/:id" element={(<ItemDetail />)}/>
        <Route path="search" element={(<SearchItem />)}/>
        <Route path="*" element={(<NotFound/>)}/>

        <Route path="cart" element={(<ProtectedRoutes><Cart name="Cart"/></ProtectedRoutes>)}/>
        <Route path="/checkout/delivery" element={(<Delivery/>)}/>
        <Route path="/checkout/review-and-pay" element={(<Payment/>)}/>
        <Route path="/checkout/order-confirmation" element={(<OrderPage />)}/>
        <Route path="/myaccount/order-details" element={(<ViewOrder />)}/>
        <Route path="/myaccount/registered-details" element={(<AccountDetail  />)}/>

        <Route path="/login" element={(<Initial/>)}/>
        <Route path="/login/password" element={(<Login/>)}/>
        <Route path="/register" element={(<Register/>)}/>

      </Routes>
    </>
  )
}
