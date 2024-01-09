import Graph from "../assets/icons/Graph.svg";
import Dropdown from "./DropDown";

const SaleCard = () => {
	// Replace with your logic to fetch and display sales data
	const salesData = 0.00; // Example sales data
	const volumeData = 0; // Example sales data

	return (
		<div className="bg-white p-7 rounded-2xl shadow-md h-full flex flex-col justify-between">
			<div className="flex justify-between mr-2">
				<div className="w-12 h-12 p-2 bg-pink-600 bg-opacity-10 rounded-lg justify-center items-center inline-flex">
					<img src={Graph} alt="ShoppingCart" className="w-6 h-6 relative flex-col justify-start items-start flex" />
				</div>
				<Dropdown />
			</div>
			<div className="flex gap-8">
				<div className="flex-1">
					<h2 className="text-neutral-400 text-lg">Sales</h2>
					<h3 className="text-2xl font-medium font-['Poppins']  inline">₦{salesData} </h3>
					<span className="text-[#519C66] font-['Poppins'] ">
						+0.00%
					</span>
				</div>
				<div className="flex-1 ml-auto">
					<h2 className="text-neutral-400 text-lg font-normal ">Volume</h2>
					<h3 className="text-2xl font-medium font-['Poppins'] ">{volumeData}</h3>
				</div>
			</div>
		</div>
	);
};

export default SaleCard;
