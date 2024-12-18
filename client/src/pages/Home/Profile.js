import React from 'react';
import Navbar from '../../Components/Pages/Navbar';
import Button from '../../Components/Auth/Button';

export default function Profile() {
	return (
		<>
			<Navbar name={'Han'} />
			<div className="flex mx-[162px] my-[57px]">
				<div className="flex flex-col">
					<p className="text-[24px] font-bold text-[#34364A]">Profile</p>
					<div className="flex flex-col mt-[57px] space-y-[13px]">
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
								className="w-[409px] h-[45px] rounded-[12px] border-[3px] border-[#EDDCFC] mt-[13px]"
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
								className="w-[409px] h-[45px] rounded-[12px] border-[3px] border-[#EDDCFC] mt-[13px]"
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
								className="w-[409px] h-[45px] rounded-[12px] border-[3px] border-[#EDDCFC] mt-[13px]"
							/>
						</div>
						<div className="mt-[53px]">
							<Button name={'Update profile'} />
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
