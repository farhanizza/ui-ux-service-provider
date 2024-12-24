import React from 'react';
import IconSearch from '../Icon/IconSearch';
import IconRestart from '../Icon/IconRestart';
import IconFilter from '../Icon/IconFilter';
import IconAddProduct from '../Icon/IconAddProduct';
import { Link } from 'react-router-dom';

export default function DesignSearchInterface({
	setIsCreate,
	userRole,
	userId,
}) {
	return (
		<div className="flex mt-[23px]">
			<input
				type="text"
				name="searchDesign"
				id="searchDesign"
				className="w-[400px] h-[30px] bg-[#EDDCFC] rounded-[28px] pl-[19px] py-[6px] text-white font-semibold text-[12px] placeholder-white"
				placeholder="Search design..."
			/>
			<div className="ml-[25px] flex space-x-[16px]">
				<div className="w-[30px] h-[30px] rounded-full bg-[#EDDCFC] flex justify-center items-center cursor-pointer">
					<IconSearch />
				</div>
				<div className="w-[30px] h-[30px] rounded-full bg-[#EDDCFC] flex justify-center items-center cursor-pointer">
					<IconRestart />
				</div>
				<div className="w-[30px] h-[30px] rounded-full bg-[#EDDCFC] flex justify-center items-center cursor-pointer">
					<IconFilter />
				</div>
				{userRole === 'admin' ? (
					<Link to={`/manage-template/${userId}`}>
						<div
							className="w-[30px] h-[30px] rounded-full bg-[#EDDCFC] flex justify-center items-center cursor-pointer"
							onClick={() => setIsCreate(true)}
						>
							<IconAddProduct />
						</div>
					</Link>
				) : null}
			</div>
		</div>
	);
}
