import { Link, useNavigate } from 'react-router-dom';
import Icons from '../../../assets/images';
import './Signin.scss';

function Signin() {
	const navigate = useNavigate();

	return (
		<div className='login'>
			<div className='login__imgGroup'>
				<img src={Icons['Signin']} alt='' />
			</div>

			<div className='login__formGroup'>
				<div className='login__formGroup-container'>
					<div className='logo-img'>
						<img src={Icons['Logo']} alt='' />
					</div>
					<div className='login__heading'>
						<h1>Welcome!</h1>
						<p>Enter details to login.</p>
					</div>

					<form action=''>
						<div className='form__group'>
							<label htmlFor='email' hidden>
								Email
							</label>
							<input
								type='email'
								placeholder='email'
								name='email'
								className='form__input'
							/>
						</div>
						<div className='form__group password-group'>
							<label htmlFor='password' hidden>
								Email
							</label>
							<input
								type='password'
								name='password'
								placeholder='password'
								className='form__input'
								autoComplete='true'
							/>
							<span role='button' className='show-password'>
								SHOW
							</span>
						</div>

						<Link to='/#' className='forgot-password'>
							forgot password
						</Link>

						<button
							className='form__button'
							onClick={(e) => {
								e.preventDefault();
								navigate('/users');
							}}
						>
							LOG IN
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}

export default Signin;
