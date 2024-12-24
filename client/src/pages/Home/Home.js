import React, { useEffect, useState } from 'react';
import Navbar from '../../Components/Pages/Navbar';
import LoginImage from '../../assets/image/LoginImage.png';
import { Link, useParams } from 'react-router-dom';
import DesignSearchInterface from '../../Components/Pages/DesignSearchInterface';
import Cookies from 'js-cookie';
import axios from 'axios';

export default function Home() {
	const [data, setData] = useState('');
	const [dataProduct, setDataProduct] = useState([]);
	const { id } = useParams();

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
				<div className="flex flex-col">
					<p className="text-[24px] font-bold text-[#34364A] max-w-[351px]">
						Templates Website & Mobile Simple & creative
					</p>
					<DesignSearchInterface
						setIsCreate={false}
						userRole={data.role}
						userId={id}
					/>
					<div className="grid grid-cols-4 gap-[72px] mt-[46px]">
						{dataProduct?.map((data, index) => (
							<Link to={`/products/${data._id}`}>
								<div
									key={index}
									className="flex justify-center px-[16px] py-[17px] w-[230px] h-[230px] rounded-[12px] bg-[#EDDCFC]"
								>
									<div className="flex flex-col">
										<div className="w-[200px] h-[140px] rounded-[8px] overflow-hidden bg-red-500">
											<img
												src={LoginImage}
												alt=""
												className="object-cover w-full h-full"
											/>
										</div>
										<p className="mt-[12px] text-justify font-bold text-[14px] text-[#34364A]">
											{data.title}
										</p>
									</div>
								</div>
							</Link>
						))}
					</div>
				</div>
			</div>
		</>
	);
}
