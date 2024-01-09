import { Dropdown } from 'flowbite-react';
import { useState } from 'react';

function Component() {
	const [selectedItem, setSelectedItem] = useState('This Week');

	const handleClick = (item) => {
		setSelectedItem(item);
	};

	return (
		<div className="relative z-50 text-[#A6A8B1]">
			<Dropdown label={selectedItem} inline className="rounded-md text-neutral-500">
				<Dropdown.Item className='p-2 w-full hover:bg-gray-100' onClick={() => handleClick('This Week')}>This Week</Dropdown.Item>
				<Dropdown.Item className='p-2 hover:bg-gray-100' onClick={() => handleClick('This Month')}>This Month</Dropdown.Item>
				<Dropdown.Item className='p-2 hover:bg-gray-100' onClick={() => handleClick('This Year')}>This Year</Dropdown.Item>
			</Dropdown>
		</div>
	);
}

export default Component;
