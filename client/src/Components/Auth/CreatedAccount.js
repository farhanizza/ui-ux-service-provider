import React from 'react';
import { Link } from 'react-router-dom';

export default function CreatedAccount({ label, link }) {
	const link_page = {
		'Log In': '/',
		'Sign Up': 'sign_up',
	};
	return (
		<>
			<div className="flex justify-center mt-[20px]">
				<p className="text-[18px] font-medium text-[#34364A]">
					{label}
					<Link to={link_page[link]}>
						<span className="text-[18px] font-medium text-[#8D8D8D] cursor-pointer ml-[5px]">
							{link}
						</span>
					</Link>
				</p>
			</div>
		</>
	);
}
