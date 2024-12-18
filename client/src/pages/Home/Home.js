import React from 'react';
import Navbar from '../../Components/Pages/Navbar';
import IconSearch from '../../Components/Icon/IconSearch';
import IconRestart from '../../Components/Icon/IconRestart';
import IconFilter from '../../Components/Icon/IconFilter';
import LoginImage from '../../assets/image/LoginImage.png';
import { Link } from 'react-router-dom';

export default function Home() {
	const dataHome = Array.from({ length: 8 });
	return (
		<>
			<Navbar name={'Han'} />
			<div className="flex px-[150px] pt-[57px] pb-[190px]">
				<div className="flex flex-col">
					<p className="text-[24px] font-bold text-[#34364A] max-w-[351px]">
						Templates Website & Mobile Simple & creative
					</p>
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
						</div>
					</div>
					<div className="grid grid-cols-4 gap-[72px] mt-[46px]">
						{dataHome.map((_, index) => (
							<Link to={`/home/1`}>
								<div
									key={index}
									className="flex justify-center px-[16px] py-[17px] w-[230px] h-[230px] rounded-[12px] bg-[#EDDCFC]"
								>
									<div className="flex flex-col">
										<div className="w-[200px] h-[140px] rounded-[8px] overflow-hidden">
											<img
												src={LoginImage}
												alt=""
												className="object-cover w-full h-full"
											/>
										</div>
										<p className="mt-[12px] font-bold text-[14px] text-[#34364A]">
											Templates Website & Mobile Simple & creative
										</p>
									</div>
								</div>
							</Link>
						))}
					</div>
				</div>
			</div>
		</>
	);
}
