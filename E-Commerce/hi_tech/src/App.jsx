import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from "./Component/Footer/Footer"
import HeadLine from "./Component/HeadLine/HeadLine"
import Navbar from "./Component/Navbar/Navbar"
import Categories from "./Pages/Categories/Categories"
import Shop from "./Pages/Shop/Shop"
import Home from './Pages/Home/Home'
import AboutUs from './Pages/AboutUs/AboutUs'
import Blogs from './Pages/Blogs/Blogs'
import Reviews from './Pages/Reviews/Reviews'
import Contactus from './Pages/Contactus/Contactus'
import FeaturDetails from './Component/FeaturDetails/FeaturDetails'
import ProductDetails from './Component/ProductDetails/ProductDetails'
import { Provider } from 'react-redux'
import Store from './Store'
import SignUp from './Component/SignUp/SignUp'
import LogIn from './Component/LogIn/LogIn'
import Accordion from './Component/Accordion/Accordion'
import Error from './Component/Error/Error'

function App() {
  return (
    <>
      <Provider store={Store}>
        <BrowserRouter>
          <HeadLine />
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='*' element={<Error />} />
            <Route path="/featurDetails/:id" element={<FeaturDetails />} />
            <Route path="/productDetails/:id" element={<ProductDetails />} />
            <Route path='shop' element={<Shop />} />
            <Route path='categories' element={<Categories />} />
            <Route path='aboutUs' element={<AboutUs />} />
            <Route path='blogs' element={<Blogs />} />
            <Route path='reviews' element={<Reviews />} />
            <Route path='ContactUs' element={<Contactus />} />
            <Route path='signUp' element={<SignUp />} />
            <Route path='LogIn' element={<LogIn />} />
            <Route path='accordion' element={<Accordion />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </Provider>
    </>
  )
}

export default App
