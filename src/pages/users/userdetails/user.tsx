import { Link, useParams } from 'react-router-dom';
import useUser from '../../../common/hooks/useUser';
import './user.scss';
import Icons from '../../../assets/images';

function User() {
	const { id } = useParams() as { id: string };
	const [user] = useUser(id);

	return (
		<div className='user'>
			<div className='back-button'>
				<Link to='/users'>
					<img src={Icons['BtnBack']} alt='' />
					<span>Back to Users</span>
				</Link>
			</div>
			<div className='page__header'>
				<h2>User Details</h2>
				<div className='page__header-actions'>
					<button className='blacklist'>blacklist user</button>
					<button className='activate'>activate user</button>
				</div>
			</div>

			<div className='user__page'>
				<div className='user__tabHeader'>
					<div className='user__tabHeader-details'>
						<div className='user-img-name'>
							<img src={user.profile?.avatar} alt='' className='user-avatar' />
							<div>
								<p className='p-lead'>
									{user.profile?.firstName} {user?.profile?.lastName}
								</p>
								<p className='p-medium'>{user?.profile?.bvn}</p>
							</div>
						</div>

						<div className='user-tier'>
							<p className='p-medium'>User's Tier</p>
							<span>
								<img src={Icons['Star']} alt='' />
								<img src={Icons['StarOutline']} alt='' />
								<img src={Icons['StarOutline']} alt='' />
							</span>
						</div>

						<div className='user-bank'>
							<p className='p-lead'>
								{user.profile?.currency}
								{user.accountBalance}
							</p>
							<p className='p-light'>{user.accountNumber}/Providus Bank</p>
						</div>
					</div>
					<div className='tabs'></div>
				</div>

				<div className='user__tabBody'>
					<div className='user__bodySection personal-information'>
						<h5>Personal Information</h5>

						<div className='details'>
							<div>
								<p className='p-heading'>full name</p>
								<p>
									{user.profile?.firstName} {user.profile?.lastName}
								</p>
							</div>

							<div>
								<p className='p-heading'>phone number</p>
								<p>{user.profile?.phoneNumber}</p>
							</div>

							<div>
								<p className='p-heading'>email</p>
								<p>{user.email}</p>
							</div>

							<div>
								<p className='p-heading'>bvn</p>
								<p>{user.profile?.bvn}</p>
							</div>

							<div>
								<p className='p-heading'>gender</p>
								<p>{user.profile?.gender}</p>
							</div>

							<div>
								<p className='p-heading'>marital status</p>
								<p>Single</p>
							</div>

							<div>
								<p className='p-heading'>children</p>
								<p>5</p>
							</div>

							<div>
								<p className='p-heading'>type of residence</p>
								<p>Bungalow</p>
							</div>
						</div>
					</div>
					<div className='user__bodySection education'>
						<h5>Education and Employment</h5>

						<div className='details'>
							<div>
								<p className='p-heading'>level of education</p>
								<p>{user.education?.level}</p>
							</div>

							<div>
								<p className='p-heading'>employment status</p>
								<p>{user.education?.employmentStatus}</p>
							</div>

							<div>
								<p className='p-heading'>sector of employment</p>
								<p>{user.education?.sector}</p>
							</div>

							<div>
								<p className='p-heading'>duration of employment</p>
								<p>{user.education?.duration}</p>
							</div>

							<div>
								<p className='p-heading'>office email</p>
								<p>{user.education?.officeEmail}</p>
							</div>

							<div>
								<p className='p-heading'>monthly income</p>
								<p>
									{user.profile?.currency}
									{user.education?.monthlyIncome[0]} - {user.profile?.currency}
									{user.education?.monthlyIncome[1]}
								</p>
							</div>

							<div>
								<p className='p-heading'>loan repayment</p>
								<p>
									{user.profile?.currency}
									{user.education?.loanRepayment}
								</p>
							</div>
						</div>
					</div>
					<div className='user__bodySection socials'>
						<h5>Socials</h5>

						<div className='details'>
							<div>
								<p className='p-heading'>twitter</p>
								<p>{user.socials?.twitter}</p>
							</div>

							<div>
								<p className='p-heading'>facebook</p>
								<p>{user.socials?.facebook}</p>
							</div>

							<div>
								<p className='p-heading'>instagram</p>
								<p>{user.socials?.instagram}</p>
							</div>
						</div>
					</div>
					<div className='user__bodySection guarantors'>
						<h5>Guarantor</h5>

						<div className='details'>
							<div>
								<p className='p-heading'>fullname</p>
								<p>
									{user.guarantor?.firstName} {user.guarantor?.lastName}
								</p>
							</div>

							<div>
								<p className='p-heading'>phone number</p>
								<p>{user.guarantor?.phoneNumber}</p>
							</div>

							<div>
								<p className='p-heading'>email address</p>
								<p>email@email.com</p>
							</div>

							<div>
								<p className='p-heading'>relationship</p>
								<p>Nephew</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default User;
