import React from 'react';
import IconHome from '../../Components/Icon/IconHome';
import IconProfile from '../../Components/Icon/IconProfile';
import IconLogout from '../../Components/Icon/IconLogout';
import LoginImage from '../../assets/image/LoginImage.png';
import { Link } from 'react-router-dom';

export default function Navbar({ name }) {
	return (
		<div className="flex">
			<div className="w-full bg-[#EDDCFC] py-[20px] px-[34px] flex justify-between">
				<div className="flex items-center">
					<div className="flex">
						<div className="w-[60px] h-[60px] rounded-full bg-gray-300"></div>
						<div className="flex flex-col ml-[15px]">
							<p className="font-bold text-[18px]">UI UX Service</p>
							<p className="font-medium text-[14px]">Template Web Design</p>
						</div>
					</div>
				</div>
				<div className="flex space-x-[76px]">
					<Link to={'/home'}>
						<div className="flex flex-col justify-center items-center">
							<IconHome />
							<p className="font-medium text-[14px] text-[#34364A]">Home</p>
						</div>
					</Link>
					<Link to={'/profile'}>
						<div className="flex flex-col justify-center items-center">
							<IconProfile />
							<p className="font-medium text-[14px] text-[#34364A]">Profile</p>
						</div>
					</Link>
					<Link to={'/logout'}>
						<div className="flex flex-col justify-center items-center">
							<IconLogout />
							<p className="font-medium text-[14px] text-[#34364A]">Logout</p>
						</div>
					</Link>
				</div>
				<div className="flex items-center">
					<div className="flex">
						<div className="flex items-center mr-[15px]">
							<p className="font-bold text-[18px]">Halo, {name}</p>
						</div>
						<div className="w-[60px] h-[60px] rounded-full bg-gray-300 overflow-hidden">
							<img
								src={LoginImage}
								alt=""
								className="object-cover w-full h-full"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
