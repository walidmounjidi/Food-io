import React from 'react'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Home from './Pages/Home'
import Navbar from './Components/Navbar'
import MyRecipes from './Components/MyRecipes'
import MyFavRecipes from './Components/MyFavRecipes'
import AddRecipes from './Components/AddRecipes'
import EditRecipe from './Pages/EditRecipe'
export default function App() {
  return (
    <>
    <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
            <Route path='/' index element={<Home></Home>}></Route>
            <Route path='/myRecipes' element={<MyRecipes></MyRecipes>}></Route>
            <Route path='/myFavRecipes' element={<MyFavRecipes></MyFavRecipes>}></Route>
            <Route path='/addRecipe' element={<AddRecipes></AddRecipes>}></Route>
            <Route path='/editRecipe/:id' element={<EditRecipe></EditRecipe>}></Route>
        </Routes>
    </BrowserRouter>
    </>
  )
}
