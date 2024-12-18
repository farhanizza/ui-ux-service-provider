import React from 'react';

export default function Username({ label }) {
	return (
		<>
			<label for="username" className="text-[18px] font-medium text-[#34364A]">
				{label}
			</label>
			<input
				type="text"
				name="username"
				id="username"
				className="border-[3px] border-[#EDDCFC] rounded-[12px] w-[409px] h-[45px] mt-[13px] pl-[10px]"
			/>
		</>
	);
}
