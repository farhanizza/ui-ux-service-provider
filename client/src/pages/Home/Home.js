import React from 'react';
import Navbar from '../../Components/Pages/Navbar';
import LoginImage from '../../assets/image/LoginImage.png';
import { Link } from 'react-router-dom';
import DesignSearchInterface from '../../Components/Pages/DesignSearchInterface';

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
					<DesignSearchInterface />
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
