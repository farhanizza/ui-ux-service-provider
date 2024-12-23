import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Auth/Login';
import SignUp from './pages/Auth/SignUp';
import Home from './pages/Home/Home';
import Products from './pages/Home/Products';
import Profile from './pages/Home/Profile';
import ManageProductTemplate from './pages/Home/Admin/ManageProductTemplate';

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Login />} />
				<Route path="/profile" element={<Profile />} />
				<Route path="/sign_up" element={<SignUp />} />
				<Route path="/home" element={<Home />} />
				<Route path="/home/:id" element={<Products />} />
				<Route path="/manage-template" element={<ManageProductTemplate />} />
			</Routes>
		</BrowserRouter>
	);
}
