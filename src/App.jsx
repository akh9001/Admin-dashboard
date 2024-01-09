// import { useState } from 'react';
// import Sidebar from './components/Sidebar';
// import Header from './components/Header';
// import Home from './components/Home';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import './App.css';

function App() {
	// const [openSidebarToggle, setSidebarOpen] = useState(false);

	// const openSidebar = () => {
	// 	setSidebarOpen(!openSidebarToggle);
	// }

	return (
		<>
			<Navbar />
			<Dashboard />
		</>
	);
}

export default App;
