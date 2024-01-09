// Dashboard.jsx
import SaleCard from './SaleCard';
import CustomerCard from './CustomerCard';
import OrderCard from './OrderCard';
import PieChart from './PieChart';
import ProductGrid from './ProductGrid';
import AbandonedCart from './AbandonedCart';
import RecentOrders from './RecentOrders';
import BarChart from './BarChart';
import "../Styles/dashboard.css";

const Dashboard = () => {
	return (
		<div className="container mx-auto py-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 grid-auto-rows-auto gap-4">
			<div className="col-span-1 sm:col-span-2 md:col-span-2 lg:col-span-2">
				<SaleCard className="flex-grow borders" />
			</div>
			<div className="col-span-1 sm:col-span-2 md:col-span-2 lg:col-span-2">
				<CustomerCard className="flex-grow rounded-lg" />
			</div>
			<div className="col-span-1 sm:col-span-2 md:col-span-4 lg:col-span-3">
				<OrderCard className="flex-grow rounded-lg" />
			</div>
			{/* Second row */}
			<div className="col-span-1 sm:col-span-2 md:col-span-2 lg:col-span-2  row-span-2">
				<PieChart className="flex-grow rounded-lg" />
			</div>
			<div className="col-span-1 sm:col-span-2 md:col-span-2 lg:col-span-2 lg:col-start-3">
				<ProductGrid className="flex-grow" />
			</div>
			<div className="col-span-1 sm:col-span-2 md:col-span-2 lg:col-span-2 lg:col-start-3">
				<AbandonedCart className="flex-grow" />
			</div>
			<div className="col-span-1 sm:col-span-2 md:col-span-4 lg:col-span-3 lg:row-start-2 lg:col-start-5 row-span-4">
				<RecentOrders className="flex-grow" />
			</div>
			{/* Third row */}
			<div className="col-span-1 sm:col-span-2 md:col-span-4 lg:col-span-4 row-span-2">
				<BarChart className="flex-grow" />
			</div>
		</div>

	);
};

export default Dashboard;
