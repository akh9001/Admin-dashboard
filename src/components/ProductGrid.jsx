// import { IoIosArrowDown } from "react-icons/io";
// import { BsFolder } from "react-icons/bs";
import { FiFolderMinus } from "react-icons/fi";
import Dropdown from "./DropDown";

// ProductGrid.jsx
const ProductGrid = () => {
	return (
		<div className="flex flex-col justify-between bg-[#D23564] p-7 rounded-2xl shadow-md h-full">

			<div className="flex flex-row justify-between mr-2">
				<div className="flex justify-center items-center w-12 h-12 bg-white bg-opacity-20 rounded-lg ">
					<FiFolderMinus className="w-6 h-6 text-white relative" />
				</div>
				<div className="flex items-center gap-2 text-white">
					<Dropdown className="text-white"/>
				</div>
			</div>
			<div className="flex gap-8">
				<div className="flex-1">
					<h2 className="text-lg font-normal mb-2 text-white">All Products</h2>
					<h3 className="text-2xl font-medium font-['Poppins'] text-white inline">0 </h3>
					<span className="text-white font-['Poppins'] ">
						+0.00%
					</span>
				</div>
				<div className="flex-1 ml-auto">
					<h2 className="text-lg font-normal mb-2 text-white">Active</h2>
					<h3 className="text-2xl font-medium font-['Poppins'] text-white inline">0 </h3>
					<span className="text-white font-['Poppins'] ">
						+0.00%
					</span>
				</div>
			</div>
		</div>
	);
};

export default ProductGrid;

