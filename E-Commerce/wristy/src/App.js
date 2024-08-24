import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Faq from './Component/Faqs/Faqs';
import Footer from './Component/Footer/Footer'
import Navbar from './Component/Navbar/Navbar';
import NewsArticles from './Component/NewsArticles/NewsArticles';
import Signature from './Component/Signature/Signature';
import About from './Pages/About/About';
import Blogs from './Pages/Blogs/Blogs';
import Categories from './Pages/Categories/Categories';
import Contact from './Pages/Contact/Contact';
import Home from './Pages/Home/Home';
import Reviews from './Pages/Review/Review';
import Shop from './Pages/Shop/Shop';
import LogIn from './Component/LogIn/LogIn';
import SignUp from './Component/SignUp/SignUp';
import ProductDetails from './Component/ProductDetails/ProductDetails';
import Cart from './Component/Cart/Cart';
import { Provider } from 'react-redux';
import Store from './Store';

function App() {
  return (
    <div className="App">
      <Provider store={Store}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/productDetails/:id' element={<ProductDetails />} />
            <Route path='/about' element={<About />} />
            <Route path='/categories' element={<Categories />} />
            <Route path='/shop' element={<Shop />} />
            <Route path='/blogs' element={<Blogs />} />
            <Route path='/reviews' element={<Reviews />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/login' element={<LogIn />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/faq' element={<Faq />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </Provider>
      {/* <ProductDetails/> */}

    </div>
  );
}

export default App;
