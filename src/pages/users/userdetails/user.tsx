import { useParams } from 'react-router-dom';
import useUser from '../../../common/hooks/useUser';

function User() {
	const { id } = useParams() as { id: string };
	const [user, status] = useUser(id);

	console.log(user);

	return (
		<div className='page'>
			<div className='page__header'>
				<h2>User Details</h2>
				<div className='page__header-actions'>
					<button>blacklist user</button>
					<button>activate user</button>
				</div>
			</div>

			<div className='user__page'>
				<div className='user__tabHeader'>
					<div className='user__tabHeader-details'>
						<div>
							<img src={user.profile?.avatar} alt='' />
							<div>
								<p>
									{user.profile?.firstName} {user?.profile?.lastName}
								</p>
								<p>{user?.profile?.bvn}</p>
							</div>
						</div>

						<div>
							<p>User's Tier</p>
						</div>

						<div>
							<p>{user.accountBalance}</p>
							<p>{user.accountNumber}/Providus Bank</p>
						</div>
					</div>
					<div className='tabs'></div>
				</div>

				<div className='user__tabBody'>
					<div>
						<h5>Personal Information</h5>

						<div>
							<div>
								<p>full name</p>
								<p>
									{user.profile?.firstName} {user.profile?.lastName}
								</p>
							</div>

							<div>
								<p>phone number</p>
								<p>{user.profile?.phoneNumber}</p>
							</div>

							<div>
								<p>email</p>
								<p>{user.email}</p>
							</div>

							<div>
								<p>bvn</p>
								<p>{user.profile?.bvn}</p>
							</div>

							<div>
								<p>gender</p>
								<p>{user.profile?.gender}</p>
							</div>

							<div>
								<p>marital status</p>
								<p>Single</p>
							</div>

							<div>
								<p>children</p>
								<p>5</p>
							</div>

							<div>
								<p>type of residence</p>
								<p>Bungalow</p>
							</div>
						</div>
					</div>
					<div>
						<h5>Education and Employment</h5>

						<div>
							<div>
								<p>level of education</p>
								<p>{user.education?.level}</p>
							</div>

							<div>
								<p>employment status</p>
								<p>{user.education?.employmentStatus}</p>
							</div>

							<div>
								<p>sector of employment</p>
								<p>{user.education?.sector}</p>
							</div>

							<div>
								<p>duration of employment</p>
								<p>{user.education?.duration}</p>
							</div>

							<div>
								<p>office email</p>
								<p>{user.education?.officeEmail}</p>
							</div>

							<div>
								<p>monthly income</p>
								<p>
									{user.profile?.currency}
									{user.education?.monthlyIncome[0]} - {user.profile?.currency}
									{user.education?.monthlyIncome[1]}
								</p>
							</div>

							<div>
								<p>loan repayment</p>
								<p>
									{user.profile?.currency}
									{user.education?.loanRepayment}
								</p>
							</div>
						</div>
					</div>
					<div>
						<h5>Socials</h5>

						<div>
							<div>
								<p>twitter</p>
								<p>{user.socials?.twitter}</p>
							</div>

							<div>
								<p>facebook</p>
								<p>{user.socials?.facebook}</p>
							</div>

							<div>
								<p>instagram</p>
								<p>{user.socials?.instagram}</p>
							</div>
						</div>
					</div>
					<div>
						<h5>Guarantor</h5>

						<div>
							<div>
								<p>fullname</p>
								<p>
									{user.guarantor?.firstName} {user.guarantor?.lastName}
								</p>
							</div>

							<div>
								<p>phone number</p>
								<p>{user.guarantor?.phoneNumber}</p>
							</div>

							<div>
								<p>email address</p>
								<p>email@email.com</p>
							</div>

							<div>
								<p>relationship</p>
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
