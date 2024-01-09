import { useState } from "react";
import { TEChart } from "tw-elements-react";

const Dropdown = ({ label, options, selectedOption, onSelect }) => {
	const [isOpen, setIsOpen] = useState(false);

	const handleToggle = () => {
		setIsOpen(!isOpen);
	};

	const handleSelect = (option) => {
		onSelect(option);
		setIsOpen(false);
	};

	return (
		<div className="relative inline-block text-left">
			<div>
				<button
					type="button"
					onClick={handleToggle}
					className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
				>
					{selectedOption}
					<svg
						className="-mr-1 ml-2 h-5 w-5"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
						fill="currentColor"
						aria-hidden="true"
					>
						<path
							fillRule="evenodd"
							d="M5.293 7.293a1 1 0 0 1 1.414 0L10 11.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414z"
							clipRule="evenodd"
						/>
					</svg>
				</button>
			</div>
			{isOpen && (
				<div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
					<div className="py-1">
						{options.map((option) => (
							<button
								key={option}
								onClick={() => handleSelect(option)}
								className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
							>
								{option}
							</button>
						))}
					</div>
				</div>
			)}
		</div>
	);
};


export default function ChartBarDarkModeProps() {
	const [intervalOption, setIntervalOption] = useState("This Week");
	const [salesOrdersOption, setSalesOrdersOption] = useState("Sales");

	const intervalOptions = ["This Week", "This Month", "This Year"];
	const salesOrdersOptions = ["Sales", "Orders"];

	const handleIntervalSelect = (option) => {
		setIntervalOption(option);
	};

	const handleSalesOrdersSelect = (option) => {
		setSalesOrdersOption(option);
	};

	return (
		<div className="bg-white p-7 rounded-2xl shadow-md flex flex-col justify-between">
			<div className="flex justify-between mb-4">
				<h2 className="text-lg font-semibold">Marketing</h2>
				<div className="flex space-x-4">
					<Dropdown
						label="Interval"
						options={intervalOptions}
						selectedOption={intervalOption}
						onSelect={handleIntervalSelect}
					/>
					<Dropdown
						label="Sales/Orders"
						options={salesOrdersOptions}
						selectedOption={salesOrdersOption}
						onSelect={handleSalesOrdersSelect}
					/>
				</div>
			</div>
			<TEChart
				type="bar"
				darkTicksColor="#ff0000"
				darkGridLinesColor="#ffff00"
				darkLabelColor="#ff00ff"
				data={{
					labels: [
						"Monday",
						"Tuesday",
						"Wednesday",
						"Thursday",
						"Friday",
						"Saturday",
						"Sunday",
					],
					datasets: [
						{
							label: salesOrdersOption,
							data: [2112, 2343, 2545, 3423, 2365, 1985, 987],
						},
					],
				}}
			/>
		</div>
	);
}
