import Icons from '../../../../assets/images';
import { User } from '../../../../types';
import './UsersHeader.scss';

function UsersHeader({ users }: { users: User[] }) {
	const activeUsers = users.filter((user: User) => user.status === 'active');

	return (
		<div className='users__header'>
			<div className='users__card'>
				<img src={Icons['User']} alt='' />
				<p>users</p>
				<p className='count'>{users.length}</p>
			</div>
			<div className='users__card'>
				<img src={Icons['ActiveUser']} alt='' />
				<p>active users</p>
				<p className='count'>{activeUsers.length}</p>
			</div>
			<div className='users__card'>
				<img src={Icons['LoanUser']} alt='' />
				<p>users with loans</p>
				<p className='count'>{users.length}</p>
			</div>
			<div className='users__card'>
				<img src={Icons['SavingsUser']} alt='' />
				<p>users with savings</p>
				<p className='count'>{users.length}</p>
			</div>
		</div>
	);
}
export default UsersHeader;
