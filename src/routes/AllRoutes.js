import { Route, Routes } from "react-router-dom";
import { Home, Cart, CollectionPage, ItemDetail, NotFound, Search } from "../pages";

export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={(<Home />)}/>
        <Route path="cart" element={(<Cart />)}/>
        <Route path="collection/:piece" element={(<CollectionPage/>)}/>
        <Route path="products/:id" element={(<ItemDetail />)}/>
        <Route path="search" element={(<Search />)}/>
        <Route path="*" element={(<NotFound/>)}/>
      </Routes>
    </>
  )
}
