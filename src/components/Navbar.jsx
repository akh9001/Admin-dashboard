// Navbar.jsx
import notificationIcon from '../assets/navbar/notification.svg';
import logo from '../assets/navbar/logo.svg';
import Breadcrumbs from './Breadcrumbs';
import "../Styles/navbar.css";

const Navbar = () => {

	return (
		<nav className="navbar">
			<div className="mx-auto flex justify-between items-center">
				<div className="flex items-center">
					<div className="text-zinc-700 text-xl font-medium">Dashboard</div>
				</div>

				{/* Responsive Menu Toggle */}
				<div className="flex justify-between items-center">
					<div className="mr-2">
						<div className=" relative flex justify-center items-center h-10 w-10 rounded-full bg-red-500 bg-opacity-10">
							<img src={notificationIcon} alt="notification" className="h-6 w-6" />
							<div className="absolute h-4 w-4 -top-1 right-0 custom-bg-pink-color rounded-full flex items-center justify-center">
								<span className="text-[0.5rem]">1</span>
							</div>
						</div>
					</div>
					<div className="ml-8 mr-6 text-right">
						<p className="text-slate-900 text-sm font-normal ">Anima Agrawal</p>
						<p className="text-zinc-500 text-xs">Company LLC</p>
					</div>
					<div className="flex justify-center items-center w-10 h-11 bg-rose-600 bg-opacity-40 rounded-lg">
						<img className="w-[31.70px] h-[32.13px]" src={logo} alt="Logo" />
					</div>
				</div>
			</div>
			<div >
				<Breadcrumbs/>
			</div>
		</nav>
	);
};

export default Navbar;
