import React from 'react';

export default function Button({ name, action }) {
	return (
		<button
			type="submit"
			onClick={() => action()}
			className="border-[3px] bg-[#EDDCFC] text-[18px] border-none text-[#34364A] font-semibold rounded-[12px] w-[409px] h-[45px] mt-[13px] pl-[10px]"
		>
			{name}
		</button>
	);
}
