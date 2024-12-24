import React, { useEffect, useState } from 'react';
import Navbar from '../../../Components/Pages/Navbar';
import DesignSearchInterface from '../../../Components/Pages/DesignSearchInterface';
import figma from '../../../assets/image/figma.png';
import IconEdit from '../../../Components/Icon/IconEdit';
import IconDelete from '../../../Components/Icon/IconDelete';
import ModalEdit from '../../../Components/Pages/ModalEdit';
import ModalCreate from '../../../Components/Pages/ModalCreate';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';

export default function ManageProductTemplate() {
	const [isEdit, setIsEdit] = useState(false);
	const [isCreate, setIsCreate] = useState(false);
	const [data, setData] = useState('');
	const [dataProduct, setDataProduct] = useState([]);
	const { id } = useParams();

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

	useEffect(() => {
		const fetchUser = async () => {
			try {
				const response = await axios.get(
					'http://localhost:5000/api/getUser/' + id
				);
				setData(response.data);
			} catch (error) {
				console.error('Error fetching user data:', error);
			}
		};

		fetchUser();
	}, []);

	useEffect(() => {
		const fetchProduct = async () => {
			try {
				const response = await axios.get(
					'http://localhost:5000/api/getAllProduct'
				);
				setDataProduct(response.data);
			} catch (error) {
				console.error('Error fetching user data:', error);
			}
		};

		fetchProduct();
	}, []);

	return (
		<>
			<Navbar name={`${Cookies.get('username')}`} userId={id} />
			<div className="flex px-[150px] pt-[57px] pb-[190px]">
				<div className="flex flex-col w-full">
					<DesignSearchInterface
						setIsCreate={setIsCreate}
						userRole={data.role}
						userId={id}
					/>

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
							{dataProduct.map((datas, index) => (
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
