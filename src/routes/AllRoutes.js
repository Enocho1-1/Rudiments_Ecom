import { Route, Routes } from "react-router-dom";
import { Home, Cart, CollectionPage, PiecePage, ItemDetail, NotFound } from "../pages";

export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={(<Home />)}/>
        <Route path="cart" element={(<Cart />)}/>
        <Route path="shop" element={(<CollectionPage apiPath="/shop" />)}/>
        <Route path="t-shirt" element={(<PiecePage apiPath="/t-shirt" title="MEN'S Essential Tees"/>)}/>
        <Route path="shirt" element={(<PiecePage apiPath="/shirt" title="Men's Shirts"/>)}/>
        <Route path="pants" element={(<PiecePage />)}/>
        <Route path="shorts" element={(<PiecePage />)}/>
        <Route path="shoes" element={(<PiecePage />)}/>
        <Route path="accessories" element={(<PiecePage />)}/>
        <Route path="/:id" element={(<ItemDetail />)}/>
        <Route path="*" element={(<NotFound/>)}/>
      </Routes>
    </>
  )
}
