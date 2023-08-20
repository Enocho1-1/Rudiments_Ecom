import { Route, Routes } from "react-router-dom";
import { Home, Cart, CollectionPage, PiecePage, ItemDetail, SearchItem, NotFound } from "../pages";

export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={(<Home title="Home" />)}/>
        <Route path="cart" element={(<Cart name="Cart"/>)}/>
        <Route path="shop" element={(<CollectionPage apiPath="/shop" title="Collections"/>)}/>
        <Route path="t-shirt" element={(<PiecePage apiPath="/t-shirt" title="MEN'S Essential Tees"/>)}/>
        <Route path="shirt" element={(<PiecePage apiPath="/shirt" title="Men's Shirts"/>)}/>
        <Route path="pants" element={(<PiecePage apiPath="/pants" title="Men's Pants"/>)}/>
        <Route path="shorts" element={(<PiecePage apiPath="/shorts" title="Men's Shorts"/>)}/>
        <Route path="shoes" element={(<PiecePage apiPath="/shoes" title="Men's Shoes & Sandals"/>)}/>
        <Route path="accessories" element={(<PiecePage apiPath="/accessories" title="Men's Accessories"/>)}/>
        <Route path="/:id" element={(<ItemDetail/>)}/>
        <Route path="search" element={(<SearchItem apiPath="/search/"/>)}/>
        <Route path="*" element={(<NotFound/>)}/>
      </Routes>
    </>
  )
}
