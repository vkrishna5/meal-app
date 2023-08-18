import './App.css';
import { AuthProvider } from './context/AuthContext';
import 'bootstrap/dist/css/bootstrap.css'
import Footer from './components/Footer';
import { CartProvider } from './context/CartContext';
import { OrderProvider } from './context/OrderContext';
import RouteConfiguration from './utils/RouteConfiguration';
import { MealProvider } from './context/MealContext';

function App() {
  return (
    <>
      <AuthProvider>
        <MealProvider>
          <OrderProvider>
            <CartProvider>
              <RouteConfiguration />
              <Footer />
            </CartProvider>
          </OrderProvider>
        </MealProvider>
      </AuthProvider>
    </>
  );
}

export default App;
