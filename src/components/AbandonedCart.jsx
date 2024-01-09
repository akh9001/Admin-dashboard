import Dropdown from "./DropDown";
import ShoppingCart from "../assets/icons/ShoppingCart.svg";

const AbandonedCart = () => {
	// Example abandoned cart data

	const abondonedData = "0%";
	const customersdata = 0;


	return (
		<div className="bg-white p-7 rounded-2xl shadow-md h-full flex flex-col justify-between">
			<div className="flex justify-between mr-2">
				{/* <div className="flex justify-center items-center w-12 h-12 bg-yellow-100 bg-opacity-40 p-2 rounded-xl">
					<BiCart size={40} className=" color-blue-400" />
				</div> */}
				<div className="w-12 h-12 p-2 bg-[#FFCC9129] bg-opacity-20 rounded-lg justify-center items-center inline-flex">
					<img src={ShoppingCart} alt="ShoppingCart" className="w-6 h-6 relative flex-col justify-start items-start flex" />
				</div>
				<Dropdown />
			</div>
			<div className="flex gap-8">
				<div className="flex-1">
					<h2 className="text-lg text-red-400 font-normal">Abandoned Cart</h2>
					<h3 className="text-2xl font-medium font-['Poppins']  inline">{abondonedData} </h3>
					<span className="text-[#519C66] font-['Poppins'] ">
						+0.00%
					</span>
				</div>
				<div className="flex-1 ml-auto">
					<h2 className="text-neutral-400 text-lg font-normal ">Customers</h2>
					<h3 className="text-2xl font-medium font-['Poppins'] ">{customersdata}</h3>
				</div>
			</div>
		</div>
	);
};

export default AbandonedCart;
