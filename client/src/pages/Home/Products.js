import React, { useEffect, useRef } from 'react';
import Navbar from '../../Components/Pages/Navbar';
import figma from '../../assets/image/figma.png';
import IconLove from '../../Components/Icon/IconLove';
import IconDownload from '../../Components/Icon/IconDownload';
import IconShare from '../../Components/Icon/IconShare';

export default function Products() {
	const sectionRef = useRef(null);

	useEffect(() => {
		if (sectionRef.current) {
			const offset = 180;
			const top =
				sectionRef.current.getBoundingClientRect().top +
				window.scrollY -
				offset;

			window.scrollTo({
				top: top,
				behavior: 'smooth',
			});
		}
	}, []);

	return (
		<>
			<Navbar name={'Han'} />
			<div className="flex my-[193px] mx-[104px]">
				<div className="flex" ref={sectionRef}>
					<div className="w-[626px] h-[438px] rounded-[8px] overflow-hidden">
						<img src={figma} alt="" className="object-cover w-full h-full" />
					</div>
					<div className="flex flex-col ml-[121px] max-w-[487px]">
						<div className="flex">
							<p className="text-[24px] font-bold text-[#34364A] max-w-[351px] mr-[108px]">
								Templates Website & Mobile Simple & creative
							</p>
							<IconLove />
						</div>
						<p className="text-justify mt-[28px] font-medium text-[20px] text-[#34364A]">
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industry's standard dummy text
							ever since the 1500s, when an unknown printer took a galley of
							type and scrambled it to make a type specimen book. It has
							survived not only five centuries, but also the leap into
							electronic.
						</p>
						<div className="mt-[32px] flex space-x-[20px] items-center">
							<div className="w-[149px] h-[83px] overflow-hidden">
								<img
									src={figma}
									alt=""
									className="w-full h-full object-cover"
								/>
							</div>
							<div className="w-[149px] h-[83px] overflow-hidden">
								<img
									src={figma}
									alt=""
									className="w-full h-full object-cover"
								/>
							</div>
							<div className="w-[50px] h-[50px] bg-[#EDDCFC] rounded-full flex justify-center items-center cursor-pointer">
								<IconDownload />
							</div>
							<div className="w-[50px] h-[50px] bg-[#EDDCFC] rounded-full flex justify-center items-center cursor-pointer">
								<IconShare />
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
