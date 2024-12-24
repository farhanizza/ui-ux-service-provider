import React, { useState } from 'react';
import LoginImage from '../../assets/image/LoginImage.png';
import Button from '../../Components/Auth/Button';
import Username from '../../Components/Auth/Username';
import Password from '../../Components/Auth/Password';
import CreatedAccount from '../../Components/Auth/CreatedAccount';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function SignUp() {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [email, setemail] = useState('');
	const navigate = useNavigate();

	const handleSignUp = () => {
		axios
			.post('http://localhost:5000/api/signup', {
				username,
				password,
				email,
			})
			.then((response) => {
				if (response.status === 201) {
					navigate('/');
				}
			})
			.catch((error) => {
				console.error(
					'Error:',
					error.response ? error.response.data : error.message
				);
			});
	};
	return (
		<>
			<div className="flex justify-between">
				<div className="max-h-screen flex justify-between">
					<img src={LoginImage} alt="login_img" className="h-full" />

					<div className="flex items-center justify-center w-full flex-col">
						<h1 className="font-bold text-[40px] text-[#34364A]">
							UI UX Service
						</h1>

						<p className="font-semibold text-[26px] mt-[57px] text-[#34364A]">
							Create an account
						</p>
						<div className="mt-[35px]">
							<div className="flex flex-col">
								<Username label={'Username'} setUsername={setUsername} />
							</div>
							<div className="flex flex-col mt-[20px]">
								<Username label={'Email'} setUsername={setemail} />
							</div>
							<div className="flex flex-col mt-[20px]">
								<Password label={'Password'} setPassword={setPassword} />
							</div>
							<div className="flex flex-col mt-[20px]">
								<Button name={'Sign Up'} action={handleSignUp} />
							</div>
							<CreatedAccount
								label={'Already have an account?'}
								link={'Log In'}
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
