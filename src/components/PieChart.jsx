import { TEChart } from "tw-elements-react";
import Dropdown from "./DropDown";

export default function PieChart() {
	return (
		<div className="bg-white p-7 rounded-2xl shadow-md flex flex-col justify-between h-full">
			<div className="flex justify-between mb-2">
				<h2 className="text-zinc-700 text-lg font-semibold mb-2">Marketting</h2>
				<Dropdown/>
			</div>
			<div style={{ position: 'relative', width: '100%', height: '100%' }}>
				<TEChart
					type="doughnut"
					data={{
						labels: ["Acquisition", "Purchase", "Retention"],
						datasets: [
							{
								label: "Traffic",
								data: [2112, 2343, 2545],
								backgroundColor: [
									"rgba(210, 53, 101, 1)",
									"rgba(151, 165, 235, 1)",
									"rgba(255, 204, 145, 1)",
								],
							},
						],
					}}
					options={{
						maintainAspectRatio: false,
					}}
				/>
			</div>
		</div>



	);
}
