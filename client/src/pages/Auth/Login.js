import React from 'react';
import LoginImage from '../../assets/image/LoginImage.png';
import Button from '../../Components/Auth/Button';
import Username from '../../Components/Auth/Username';
import Password from '../../Components/Auth/Password';
import CreatedAccount from '../../Components/Auth/CreatedAccount';
import { useNavigate } from 'react-router-dom';

export default function Login() {
	const navigate = useNavigate();

	const handleLogin = () => {
		navigate('/home');
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
							Log In
						</p>
						<div className="mt-[35px]">
							<div className="flex flex-col">
								<Username label={'Username or Email'} />
							</div>
							<div className="flex flex-col mt-[20px]">
								<Password label={'Password'} />
							</div>
							<div className="flex flex-col mt-[20px]">
								<Button name={'Log In'} action={handleLogin} />
							</div>
							<CreatedAccount
								label={'Don’t you have an account?'}
								link={'Sign Up'}
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
