import React from 'react';

export default function Password({ label, setPassword }) {
	return (
		<>
			<label for="password" className="text-[18px] font-medium text-[#34364A]">
				{label}
			</label>
			<input
				type="password"
				name="password"
				id="password"
				onChange={(e) => setPassword(e.target.value)}
				className="border-[3px] border-[#EDDCFC] rounded-[12px] w-[409px] h-[45px] mt-[13px] pl-[10px]"
			/>
		</>
	);
}
