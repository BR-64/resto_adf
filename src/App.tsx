import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import AddProductForm from './admin/AddProductPage.jsx';
import AdminPage from './admin/AdminPage.jsx';
import HomePage from './HomePage';
import NavbarRes from './nav/NavbarAdmin.jsx';
import ProductsPage from './admin/ProductsPage.jsx';
import EditproductPage from './admin/EditProductPage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import SignupPageAdmin from './pages/SignupPage_admin.jsx';
import ForgotPassPage from './pages/ForgotPassPage.jsx';
import ResetPassPage from './pages/ResetPassPage.jsx';

//context
import { AuthProvider } from './context/AuthContext.jsx';

//toast
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className='App'>
      <AuthProvider>
          <ToastContainer position='top-right' autoClose={3000} />
          <Router>
            <NavbarRes />
            <Routes>
              <Route path='/login' element={<LoginPage />} />
              <Route path='/admin/signup' element={<SignupPageAdmin />} />
              <Route path='/addproduct' element={<AddProductForm />} />
              <Route path='/productsAdmin' element={<ProductsPage />} />
              <Route path='/admin' element={<AdminPage />} />
              <Route path='/' element={<HomePage />} />
              <Route path='/edit/:id' element={<EditproductPage />} />
              <Route path='/forgotpass' element={<ForgotPassPage />} />
              <Route
                path='/reset-password/:token'
                element={<ResetPassPage />}
              />
            </Routes>
          </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
