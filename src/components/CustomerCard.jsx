import Users from "../assets/icons/Users.svg";
import Dropdown from "./DropDown";

// CustomerCard.jsx
const CustomerCard = () => {
	// Replace with your logic to fetch and display customer data
	const customerData = 0; // Example customer data
	const activeData = 0; // Example customer data

	return (
		<div className="bg-white p-7 rounded-2xl shadow-md h-full flex flex-col justify-between">
			<div className="flex justify-between mr-2">
				<div className="w-12 h-12 p-2 bg-[#FFCC9129] bg-opacity-20 rounded-lg justify-center items-center inline-flex">
					<img src={Users} alt="ShoppingCart" className="w-6 h-6 relative flex-col justify-start items-start flex" />
				</div>
				<Dropdown />
			</div>
			<div className="flex gap-8">
				<div className="flex-1">
					<h2 className="text-neutral-400 text-lg">Customers</h2>
					<h3 className="text-2xl font-medium font-['Poppins']  inline">{customerData} </h3>
					<span className="text-[#519C66] font-['Poppins'] ">
						+0.00%
					</span>
				</div>
				<div className="flex-1 ml-auto">
					<h2 className="text-neutral-400 text-lg font-normal ">Active</h2>
					<h3 className="text-2xl font-medium font-['Poppins'] inline">{activeData} </h3>
					<span className="text-[#519C66] font-['Poppins'] ">
						+0.00%
					</span>
				</div>
			</div>
		</div>
	);
};

export default CustomerCard;
