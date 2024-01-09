import Dropdown from "./DropDown";
import Bag from "../assets/icons/BagBig.svg";

// OrderCard.jsx
const OrderCard = () => {
	// Replace with your logic to fetch and display order data
	const orderData = 50; // Example order data
	const pendingData = 0; // Example order data
	const completedData = 0; // Example order data

	return (
		<div className="bg-white p-7 rounded-2xl shadow-md h-full flex flex-col justify-between">

			<div className="flex justify-between mr-2">
				<div className="w-12 h-12 p-2 bg-[#FFCC9129] bg-opacity-20 rounded-lg justify-center items-center inline-flex">
					<img src={Bag} alt="ShoppingCart" className="w-6 h-6 relative flex-col justify-start items-start flex" />
				</div>
				<Dropdown />
			</div>

			<div className="flex flex-row justify-between mr-20">
				<div>
					<h2 className="text-lg text-neutral-400 font-normal">All Orders</h2>
					<h3 className="text-2xl font-medium font-['Poppins']  inline">{orderData} </h3>
				</div>
				<div>
					<h2 className="text-lg text-neutral-400 font-normal">Pending</h2>
					<h3 className="text-2xl font-medium font-['Poppins']  inline">{pendingData} </h3>
				</div>
				<div>
					<h2 className="text-lg text-neutral-400 font-normal">Completed</h2>
					<h3 className="text-2xl font-medium font-['Poppins']  inline">{completedData} </h3>
					<span className="text-[#519C66] font-['Poppins'] ">
						+0.00%
					</span>
				</div>
			</div>

		</div>
	);
};

export default OrderCard;
