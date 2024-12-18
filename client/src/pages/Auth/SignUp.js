import React from 'react';
import LoginImage from '../../assets/image/LoginImage.png';
import Button from '../../Components/Auth/Button';
import Username from '../../Components/Auth/Username';
import Password from '../../Components/Auth/Password';
import CreatedAccount from '../../Components/Auth/CreatedAccount';

export default function SignUp() {
	const handleSignUp = () => {
		console.log('Cek');
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
								<Username label={'Username'} />
							</div>
							<div className="flex flex-col mt-[20px]">
								<Username label={'Email'} />
							</div>
							<div className="flex flex-col mt-[20px]">
								<Password label={'Password'} />
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
