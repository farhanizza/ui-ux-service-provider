import React from 'react';
import figma from '../../assets/image/figma.png';
import Button from '../../Components/Auth/Button';

export default function ModalCreate({ isOpen, onClose }) {
	if (!isOpen) return null;

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
						<Button name={'Create template'} />
					</div>
				</div>
			</div>
		</>
	);
}
