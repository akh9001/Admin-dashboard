// RecentOrders.jsx

// import { TbShoppingBag } from "react-icons/tb";
import Heart from "../assets/icons/Heart.svg";
import Bag from "../assets/icons/Bag.svg";




const RecentOrders = () => {
	// Example recent order data


	return (
		<div className="bg-white p-7 rounded-2xl shadow-md h-full flex flex-col">
			<h2 className="text-lg text-zinc-700 font-medium">Recent Orders</h2>
			<div className="flex flex-col gap-6 items-center mt-40 m-20">

				<div className="w-[175px] h-[175px] p-10 bg-[#F4F5FA] rounded-[500px] border border-[#E1E2E9] justify-center items-center inline-flex">
					<div className="flex items-center justify-center p-12  rounded-full relative">
						<img src={Bag} alt="No Orders" className="absolute z-3"/>
					</div>
				</div>
				
				<h1 className="text-black text-2xl font-medium">No Orders Yet?</h1>

				<p className="text-center text-neutral-400 text-xl font-normal max-w-sm">Add products to your store and start selling to see orders here.</p>

				<button className="bg-[#D23565] rounded-xl flex items-center justify-center w-60 p-3 pl-1 pr-1 gap-4">
					<img src={Heart} alt="New Product" /> <p className="text-center text-white text-base font-normal">New Product</p>
				</button>

			</div>
		</div>
	);
};

export default RecentOrders;
