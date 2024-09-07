import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home';
import Footer from './components/Footer/Footer';

import CategoryPage from './pages/CategoryPage';
import ProductPage from './pages/ProductPage';
import LoginForm from './components/ui/Modals/LoginForm';
import AccountDetails from './components/ui/Modals/AcountDetails';
import CartPage from './pages/CartPage';
import AddProduct from './components/ui/Modals/AddProduct';
import { useContext } from 'react';
import { ModalContext } from './contexts/ModalContext';
import { AuthContext } from './contexts/AuthContext';

function App() {
  const { modals } = useContext(ModalContext);
  const { loged } = useContext(AuthContext);
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <Header />
      <main className="flex justify-around">
        <div className="max-w-[1600px] w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/category/:categoryTitle/products"
              element={<CategoryPage />}
            />
            <Route path="/product/:productTitle" element={<ProductPage />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </div>
      </main>
      <Footer />
      {modals.addProduct && <AddProduct />}
      {modals.login && !loged && <LoginForm />}
      {modals.accountDetails && loged && <AccountDetails />}
    </div>
  );
}

export default App;
