import React, { useState } from 'react';

export default function IconLove() {
	const [click, setClick] = useState(false);
	return (
		<svg
			width="32"
			height="32"
			viewBox="0 0 32 32"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className="cursor-pointer transition-colors duration-300"
			onClick={() => setClick((prevClick) => !prevClick)}
		>
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M6.04791 7.70398C7.2981 6.45418 8.99348 5.75208 10.7612 5.75208C12.529 5.75208 14.2244 6.45418 15.4746 7.70398C15.719 7.94754 16.0337 8.25065 16.4186 8.61332C16.8026 8.25065 17.1168 7.94754 17.3612 7.70398C18.6062 6.46488 20.2899 5.76716 22.0463 5.76246C23.8028 5.75776 25.4902 6.44644 26.7418 7.67886C27.9933 8.91128 28.7079 10.5878 28.7303 12.3442C28.7527 14.1005 28.081 15.7948 26.8612 17.0587L17.3599 26.56C17.1099 26.8099 16.7708 26.9504 16.4172 26.9504C16.0637 26.9504 15.7246 26.8099 15.4746 26.56L5.97324 17.06C4.75463 15.8032 4.07926 14.1175 4.09298 12.367C4.1067 10.6164 4.80975 8.94153 6.04791 7.70398Z"
				className={`transition-colors duration-300 ${
					click ? 'fill-[#FF8383]' : 'fill-[#34364A]'
				}`}
			/>
		</svg>
	);
}
