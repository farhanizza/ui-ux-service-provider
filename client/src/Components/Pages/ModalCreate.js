import React, { useState } from 'react';
import figma from '../../assets/image/figma.png';
import Button from '../../Components/Auth/Button';
import axios from 'axios';

export default function ModalCreate({ isOpen, onClose }) {
	const [templateName, setTemplateName] = useState('');
	const [description, setDescription] = useState('');
	const [linkDesign, setLinkDesign] = useState('');

	if (!isOpen) return null;

	const handleCreate = async () => {
		await axios
			.post(`http://localhost:5000/api/addProduct`, {
				templateName,
				description,
				linkDesign,
			})
			.then(async (response) => {
				if (response.data.message === 'Product added successfully') {
					alert(response.data.message);
				}
			})
			.catch((error) => {
				alert(error.response.data.message);
			});
	};

	return (
		<>
			<div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
				<div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full relative">
					<div className="flex justify-between">
						<p className="text-black text-[24px] font-bold">Add template</p>
						<p
							className="text-black text-[24px] font-bold cursor-pointer"
							onClick={onClose}
						>
							X
						</p>
					</div>
					<div className="flex flex-col mt-[48px]">
						<label
							htmlFor="template"
							className="text-[18px] font-medium text-[#34364A]"
						>
							Template name
						</label>
						<input
							type="text"
							name="template"
							id="template"
							onChange={(e) => setTemplateName(e.target.value)}
							className="border-[3px] border-[#EDDCFC] rounded-[12px] w-[409px] h-[45px] mt-[13px] pl-[10px]"
						/>
					</div>
					<div className="flex flex-col mt-[32px]">
						<label
							htmlFor="description"
							className="text-[18px] font-medium text-[#34364A]"
						>
							Description
						</label>
						<textarea
							type="text"
							name="description"
							id="description"
							onChange={(e) => setDescription(e.target.value)}
							className="border-[3px] border-[#EDDCFC] rounded-[12px] w-[409px] h-[45px] mt-[13px] pl-[10px]"
						></textarea>
					</div>
					<div className="flex flex-col mt-[32px]">
						<label
							htmlFor="linkDesign"
							className="text-[18px] font-medium text-[#34364A]"
						>
							Link design
						</label>
						<input
							type="text"
							name="linkDesign"
							id="linkDesign"
							onChange={(e) => setLinkDesign(e.target.value)}
							className="border-[3px] border-[#EDDCFC] rounded-[12px] w-[409px] h-[45px] mt-[13px] pl-[10px]"
						/>
					</div>
					<div className="flex flex-col mt-[32px]">
						<p className="text-[18px] font-medium text-[#34364A]">Sneek peak</p>
						<div className="flex mt-[12px] space-x-[26px]">
							<div className="w-[150px] h-[100px] overflow-hidden rounded-[8px]">
								<img
									src={figma}
									alt=""
									className="w-full h-full object-cover"
								/>
							</div>
							<div className="w-[150px] h-[100px] overflow-hidden rounded-[8px]">
								<img
									src={figma}
									alt=""
									className="w-full h-full object-cover"
								/>
							</div>
							<div className="w-[150px] h-[100px] overflow-hidden rounded-[8px]">
								<img
									src={figma}
									alt=""
									className="w-full h-full object-cover"
								/>
							</div>
						</div>
					</div>
					<div className="mt-[32px]">
						<Button name={'Create template'} action={handleCreate} />
					</div>
				</div>
			</div>
		</>
	);
}
