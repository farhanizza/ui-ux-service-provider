import React, { useState } from 'react';
import Navbar from '../../../Components/Pages/Navbar';
import DesignSearchInterface from '../../../Components/Pages/DesignSearchInterface';
import figma from '../../../assets/image/figma.png';
import IconEdit from '../../../Components/Icon/IconEdit';
import IconDelete from '../../../Components/Icon/IconDelete';
import ModalEdit from '../../../Components/Pages/ModalEdit';
import ModalCreate from '../../../Components/Pages/ModalCreate';

export default function ManageProductTemplate() {
	const data = [
		{
			title: 'Monopay Payment App Free Website Template for Figma',
			sneak_peek_desc:
				'A clean and modern free website template for payment apps designed in Figma.',
			description:
				'Craft a modern and user-friendly website for your payment app with Monopay, a free website template for Figma. This easy-to-use template includes essential pre-designed pages for landing, about us, blog, blog posts, and contact, allowing you to build your website quickly and efficiently. Big thanks toflowbase.cofor this fantastic Free Website Template!',
			link_design:
				'https://www.figma.com/community/file/1148787566309534234/payment-template-by-flowbase-co',
		},
		{
			title: 'Safia Free SaaS Landing Page Template for Figma',
			sneak_peek_desc:
				'A sleek and modern free Figma Saas landing page template.',
			description:
				'Design like a pro with Safia, your free Figma SaaS landing page template. This sleek and modern design offers light and dark modes for perfect brand alignment. Packed with conversion-focused sections \u2013 clear header, engaging hero variations, comprehensive features, informative About section, strong call to action, and functional footer \u2013 Safia equips you with everything to build a high-converting landing page in Figma, absolutely free.',
			link_design:
				'https://www.figma.com/community/file/892582971189995704/safia-saas-template-by-flowbase-co',
		},
		{
			title: 'Planty Plants E-commerce Free Landing Page for Figma',
			sneak_peek_desc:
				'A sleek and modern plants e-commerce free landing page designed for both desktop and mobile.',
			description:
				'Introducing Planty, a sleek and modern plants e-commerce free landing page designed for both desktop and mobile. This user-friendly resource features a clean, minimalist interface that seamlessly blends style and functionality, saving you precious time in designing your plant- and nature-related landing pages. Download Planty today and start creating beautiful, plant-themed landing pages.',
			link_design:
				'https://www.figma.com/community/file/1131190530148317899/freebie-planty-plants-e-commerce-landing-page-design-ghurki-design-co',
		},
		{
			title: 'Indie Space Space News Free Website Template',
			sneak_peek_desc:
				'A clean and modern free website template tailored for space news, but versatile enough to suit other news-related sites.',
			description:
				'Explore this free website template tailored for space news, but versatile enough to suit other news-related sites. Created with love in Figma, it boasts a clean and modern aesthetic, making it easy to edit and well-organized. Ideal for your space-themed landing page or any other news project you have in mind.',
			link_design:
				'https://www.figma.com/community/file/1299739396531190572/space-news-website',
		},
		{
			title: 'Lalasia Furniture Free Website Template for Figma',
			sneak_peek_desc:
				'A free website template built with Figma for a modern and professional furniture website.',
			description:
				'Lalasia is a free website template built with Figma for a modern and professional furniture website. It includes 10 screens, desktop and responsive versions, and an asset and style guide, making it easy to customize to your own branding. Lalasia is a great starting point for anyone building a furniture website, and we\u2019re grateful toSickle Teamfor sharing this amazing freebie!',
			link_design:
				'https://www.figma.com/community/file/1129496513774660135/lalasia-furniture-website-freebie',
		},
		{
			title: 'Maillard Free Restaurant HTML Website Template',
			sneak_peek_desc:
				'Maillard is a free restaurant HTML website template that features a simple, modern, and elegant design.',
			description:
				'Check out this new website template fromStyleShout. Maillard is a free restaurant HTML website template that features a simple, modern, and elegant design. It includes all the pages you need to showcase your business, such as a homepage, menu page, reservation page, and about page. The template is also easy to customize, as the code is well organized and commented. With Maillard, you can create a professional and stunning website for your restaurant and cafe business in no time.',
			link_design: 'https://styleshout.com/free-templates/maillard/',
		},
		{
			title: 'E-Commerce Website Free UI Kit + Design System',
			sneak_peek_desc:
				'A modular free UI kit for rapidly building and prototyping e-commerce websites.',
			description:
				'Here is a modular free UI kit for rapidly building and prototyping e-commerce websites. It includes over 50 pre-configured sections, multiple pre-configured layouts, and a variety of components and styles that can be easily customized to match your brand. Whether you\u2019re creating a desktop or mobile website, this kit has everything you need to get started quickly and easily. Big thanks toJust UXfor creating and sharing this amazing Figma freebie!',
			link_design: 'https://www.figma.com/community/file/1113372221049615805',
		},
		{
			title:
				'Positivus Modern Free Landing Page Template for Digital Marketing',
			sneak_peek_desc:
				'A beautiful and functional free landing page template designed specifically for digital marketing agencies.',
			description:
				'Check out this amazing Figma freebie created byOlga Averchenko. Positivus is a beautiful and functional free landing page template designed specifically for digital marketing agencies. Its clean and modern design makes it the perfect way to showcase your agency\u2019s services and case studies to potential clients. It comes complete with two screens: one for desktop and one for mobile. It also includes a variety of styles and components, all designed using Figma\u2019s auto layout feature for maximum efficiency.',
			link_design:
				'https://olgaaverchenko.gumroad.com/l/positivus-landing-page-design',
		},
		{
			title: 'Free Webinar Landing Page Template for Figma',
			sneak_peek_desc:
				'A simple and calming free webinar landing page template that features pastel colors and harmonious typography.',
			description:
				'Check out this Figma freebie fromJoydeep Sengupta. A simple and calming free webinar landing page template that features pastel colors and harmonious typography, creating a relaxing and inviting atmosphere. It includes all the essential elements to convert visitors into registrants, such as a call-to-action button, subscription form, and social media links. The design is also highly versatile, so you can easily adapt it to your branding and needs. The template is fully customizable and utilizes Auto Layout, making it easy to edit and update. It is also well-organized, with all the layers and files labeled clearly.',
			link_design: 'https://www.figma.com/community/file/1229726111515983803',
		},
		{
			title: 'Interior Design Free Landing Page for Figma',
			sneak_peek_desc:
				'A a trendy and customizable free landing page design to jumpstart your next interior design project.',
			description:
				'Looking for a trendy and customizable free landing page design to jumpstart your next interior design project? Look no further than this free Figma template! This template features a sleek and user-friendly style that can be easily customized to suit your personal likes and preferences. With its modern style and user-friendly interface, this landing page is ideal for showcasing your work and attracting potential clients. Many thanks toIgnacio Pradosfor creating and sharing this fantastic freebie!',
			link_design: 'https://ignaprados.gumroad.com/l/interiordesign',
		},
		{
			title: 'Online Course Free Landing Page Template for Figma',
			sneak_peek_desc:
				'A clean and modern landing page design perfect for promoting online courses.',
			description:
				'Check out this beautiful free figma resource designed byDwinawan. It features a clean and modern landing page design perfect for promoting online courses. The layout is enhanced by a skillful use of grid, with attention-grabbing typography and ample white space adding to its appeal. I\u2019m sure that you\u2019ll love this free landing page template, so go ahead and download it now. Enjoy!',
			link_design: 'https://www.figma.com/community/file/978648046298721882',
		},
		{
			title: 'Hudson Free Personal HTML Website Template',
			sneak_peek_desc:
				'Hudson is a simple and modern free personal website template for creatives and professionals who want to showcase their skills and work in an eye-catching way.',
			description: '',
			link_design: '',
		},
		{
			title: 'Embrace Free Landing Page Template for Figma',
			sneak_peek_desc:
				'Embrace is a Figma free landing page template. A useful resource for getting started with creating high-converting landing pages.',
			description:
				'Embrace is a free landing page template made in Figma. This is a handy resource that can help you get started designing high-converting landing pages. It is completely customizable, allowing you to create the ideal look for your agency or any other type of business website. Big thanks toMuhammad Aqsath Fazafor creating and sharing this free landing page template.',
			link_design: 'https://www.figma.com/community/file/1181960949167857170',
		},
	];

	const [isEdit, setIsEdit] = useState(false);
	const [isCreate, setIsCreate] = useState(false);

	const openModalEdit = () => {
		setIsEdit(true);
	};

	const closeModalEdit = () => {
		setIsEdit(false);
	};

	const openModalCreate = () => {
		setIsCreate(true);
	};

	const closeModalCreate = () => {
		setIsCreate(false);
	};

	return (
		<>
			<Navbar name={'Han'} />
			<div className="flex px-[150px] pt-[57px] pb-[190px]">
				<div className="flex flex-col w-full">
					<DesignSearchInterface setIsCreate={setIsCreate} />

					<table className="table-auto mt-[57px] rounded-lg overflow-hidden">
						<thead>
							<tr className="bg-[#EDDCFC] rounded-lg">
								<th className="w-[200px] text-left p-2 text-[12px] font-semibold pl-[32px]">
									Template Name
								</th>
								<th className="w-[300px] text-left p-2 text-[12px] font-semibold">
									Description
								</th>
								<th className="text-left pl-[30px] text-[12px] font-semibold">
									Image
								</th>
								<th className="w-[300px] text-left p-2 text-[12px] font-semibold">
									Link Design
								</th>
								<th className="text-left p-2 text-[12px] font-semibold pl-[61px]">
									Action
								</th>
							</tr>
						</thead>
						<tbody className="">
							{data.map((datas, index) => (
								<tr className="mt-[21px] border-b-4" key={index}>
									<td className="p-2 text-[12px] font-semibold pl-[32px]">
										{datas.title}
									</td>
									<td className="text-justify text-[12px] font-semibold p-2 space-x-[16px]">
										{datas.description ? datas.description : 'data not found'}
									</td>
									<td className="p-2">
										<div className="flex items-center flex-col space-y-[16px]">
											<div className="w-[80px] h-[55px] rounded-[8px] bg-gray-300">
												<img
													src={figma}
													alt=""
													className="w-full h-full object-cover"
												/>
											</div>
											<div className="w-[80px] h-[55px] rounded-[8px] bg-gray-300">
												<img
													src={figma}
													alt=""
													className="w-full h-full object-cover"
												/>
											</div>
											<div className="w-[80px] h-[55px] rounded-[8px] bg-gray-300">
												<img
													src={figma}
													alt=""
													className="w-full h-full object-cover"
												/>
											</div>
										</div>
									</td>
									<td className="p-2">
										<p className="text-justify">
											<a
												href={datas.link_design}
												className="text-[#34364A] text-[12px] font-semibold"
											>
												{datas.link_design
													? datas.link_design
													: 'data not found'}
											</a>
										</p>
									</td>
									<td className="pl-[61px]">
										<div className="flex space-x-[11px]">
											<div
												className="w-[32px] h-[32px] rounded-[8px] bg-[#EDDCFC] flex justify-center items-center cursor-pointer"
												onClick={() => setIsEdit(true)}
											>
												<IconEdit />
											</div>
											<div className="w-[32px] h-[32px] rounded-[8px] bg-[#EDDCFC] flex justify-center items-center cursor-pointer">
												<IconDelete />
											</div>
										</div>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
				{isEdit && (
					<ModalEdit isOpen={openModalEdit} onClose={closeModalEdit} />
				)}
				{isCreate && (
					<ModalCreate isOpen={openModalCreate} onClose={closeModalCreate} />
				)}
			</div>
		</>
	);
}
