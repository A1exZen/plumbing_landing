import Header from "./components/Header";
import MainSection from "./components/MainSection";
import ProductShowcase from "./components/ProductShowcase";
import {Route, Router, Routes} from "react-router-dom";
import {Catalog} from "./components/Catalog.jsx";
import {Delivery} from "./components/Delivery.jsx";
import {Payment} from "./components/Payment.jsx";
import ProductPage from "./components/ProductPage.jsx";
import Cart from "./components/Cart.jsx";
import {CartProvider} from "./utils/CartContext.jsx";
import OrderForm from "./components/OrderForm.jsx";
import ThankYou from "./components/ThankYou.jsx";
import Calculator from "./components/Calculator.jsx";
import CalculatorResult from "./components/CalculatorResult.jsx";
import Login from "./components/Login.jsx";
import Register from "./components/Register.jsx";
import {AuthProvider} from "./utils/AuthContext.jsx";

function App() {
	return (
		<AuthProvider>
			<CartProvider>
				<div className='min-h-screen font-sans flex flex-col'>
					<Header/>
					<div className='flex-grow'>
						<Routes>
							<Route path="/" element={<MainSection/>}/>
							<Route path="/catalog" element={<Catalog/>}/>
							<Route path="/payment" element={<Payment/>}/>
							<Route path="/delivery" element={<Delivery/>}/>
							<Route path='/product/:id' element={<ProductPage/>}/>
							<Route path="/cart" element={<Cart/>}/>
							<Route path="/order" element={<OrderForm/>}/>
							<Route path="/thank-you" element={<ThankYou/>}/>
							<Route path="/calculator" element={<Calculator/>}/>
							<Route path="/calculator-result" element={<CalculatorResult/>}/>
							<Route path="/login" element={<Login/>}/>
							<Route path="/register" element={<Register/>}/>
						</Routes>
						{/*<MainSection/>*/}
						{/*<ProductShowcase/>*/}
					</div>

				</div>
			</CartProvider>
		</AuthProvider>
	);
}

export default App;
