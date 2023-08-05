import { Route, Routes } from "react-router-dom";
import { Home, Cart, CollectionPage, PiecePage, ItemDetail, NotFound } from "../pages";

export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={(<Home />)}/>
        <Route path="cart" element={(<Cart />)}/>
        <Route path="shop" element={(<CollectionPage/>)}/>
        <Route path="t-shirt" element={(<PiecePage />)}/>
        <Route path="shirt" element={(<PiecePage />)}/>
        <Route path="pants" element={(<PiecePage />)}/>
        <Route path="shorts" element={(<PiecePage />)}/>
        <Route path="shoes" element={(<PiecePage />)}/>
        <Route path="accessories" element={(<PiecePage />)}/>
        <Route path="clothing/:id" element={(<ItemDetail />)}/>
        <Route path="*" element={(<NotFound/>)}/>
      </Routes>
    </>
  )
}
