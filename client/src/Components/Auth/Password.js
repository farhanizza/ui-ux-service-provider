import React from 'react';

export default function Password({ label }) {
	return (
		<>
			<label for="password" className="text-[18px] font-medium text-[#34364A]">
				{label}
			</label>
			<input
				type="text"
				name="password"
				id="password"
				className="border-[3px] border-[#EDDCFC] rounded-[12px] w-[409px] h-[45px] mt-[13px] pl-[10px]"
			/>
		</>
	);
}
