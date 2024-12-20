import React, { useRef, useState } from 'react';
import Navbar from '../../Components/Pages/Navbar';
import Button from '../../Components/Auth/Button';
import figma from '../../assets/image/figma.png';
import IconLove from '../../Components/Icon/IconLove';
import IconFileImage from '../../Components/Icon/IconFileImage';

export default function Profile() {
	const fileInputRef = useRef(null);
	const [backgroundImageUrl, setBackgroundImageUrl] = useState(null);

	const dataHome = Array.from({ length: 5 });

	const handleButtonClick = () => {
		fileInputRef.current.click();
	};
	const handleFileChange = (event) => {
		const file = event.target.files[0];
		if (file) {
			const imageUrl = URL.createObjectURL(file);
			setBackgroundImageUrl(imageUrl);
		}
	};

	const handleUpdateProfile = () => {};
	return (
		<>
			<Navbar name={'Han'} />
			<div className="flex mx-[162px] my-[57px]">
				<div className="flex flex-col">
					<p className="text-[24px] font-bold text-[#34364A]">Profile</p>
					<div className="flex flex-col mt-[57px] space-y-[13px]">
						<div className="flex">
							<div className="flex flex-col space-y-[13px]">
								<div className="flex flex-col">
									<label
										htmlFor="username"
										className="text-[18px] font-medium text-[#34364A]"
									>
										Username
									</label>
									<input
										type="text"
										name="username"
										id="username"
										className="w-[409px] h-[45px] rounded-[12px] border-[3px] border-[#EDDCFC] mt-[13px] pl-[10px]"
									/>
								</div>
								<div className="flex flex-col">
									<label
										htmlFor="email"
										className="text-[18px] font-medium text-[#34364A]"
									>
										Email
									</label>
									<input
										type="text"
										name="email"
										id="email"
										className="w-[409px] h-[45px] rounded-[12px] border-[3px] border-[#EDDCFC] mt-[13px] pl-[10px]"
									/>
								</div>
								<div className="flex flex-col">
									<label
										htmlFor="password"
										className="text-[18px] font-medium text-[#34364A]"
									>
										Password
									</label>
									<input
										type="password"
										name="password"
										id="password"
										className="w-[409px] h-[45px] rounded-[12px] border-[3px] border-[#EDDCFC] mt-[13px] pl-[10px]"
									/>
								</div>
							</div>
							<div className="flex items-center -mt-[20px]">
								<div className="absolute">
									<div className="w-[350px] h-[350px] overflow-hidden ml-[421px] rounded-full">
										<img
											src={backgroundImageUrl ? backgroundImageUrl : figma}
											alt=""
											className="w-full h-full object-cover"
										/>
									</div>
									<div className="flex justify-end -mt-10 mr-16 cursor-pointer">
										<div
											className="w-[32px] h-[32px] flex items-center justify-center bg-[#EDDCFC] rounded-full"
											onClick={handleButtonClick}
										>
											<IconFileImage />
										</div>
										<input
											ref={fileInputRef}
											type="file"
											accept="image/*"
											style={{ display: 'none' }}
											onChange={handleFileChange}
										/>
									</div>
								</div>
							</div>
						</div>
						<div className="mt-[53px]">
							<Button
								name={'Update profile'}
								action={() => handleUpdateProfile()}
							/>
						</div>
					</div>
					<div className="flex items-center mt-[120px]">
						<p className="font-bold text-[24px] text-[#34364A] mr-[19px]">
							Saved Template
						</p>
						<IconLove />
					</div>
					<div className="flex mt-[32px] space-x-[45px]">
						{dataHome.map((_, index) => (
							<div
								className="w-[200px] h-[140px] overflow-hidden rounded-[8px]"
								key={index}
							>
								<img
									src={figma}
									alt=""
									className="w-full h-full object-cover"
								/>
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	);
}
