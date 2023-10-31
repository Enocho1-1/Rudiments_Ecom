import { Route, Routes } from "react-router-dom";
import { Home, Cart, CollectionPage, PiecePage, ItemDetail, SearchItem, NotFound } from "../pages";

export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={(<Home title="Home" />)}/>
        <Route path="cart" element={(<Cart name="Cart"/>)}/>
        <Route path="shop" element={(<CollectionPage apiPath="/shop"/>)}/>
        <Route path="t-shirt" element={(<PiecePage apiPath="TShirts" title="Men's Essential Tees"/>)}/>
        <Route path="shirt" element={(<PiecePage apiPath="Shirts" title="Men's Shirts"/>)}/>
        <Route path="pants" element={(<PiecePage apiPath="Pants" title="Men's Pants"/>)}/>
        <Route path="shorts" element={(<PiecePage apiPath="Shorts" title="Men's Shorts"/>)}/>
        <Route path="shoes" element={(<PiecePage apiPath="Shoes" title="Men's Shoes & Sandals"/>)}/>
        <Route path="accessories" element={(<PiecePage apiPath="Accessories" title="Men's Accessories"/>)}/>
        <Route path="ALL_Products/:id" element={(<ItemDetail />)}/>
        <Route path="search" element={(<SearchItem apiPath="/search/"/>)}/>
        <Route path="*" element={(<NotFound/>)}/>
      </Routes>
    </>
  )
}
