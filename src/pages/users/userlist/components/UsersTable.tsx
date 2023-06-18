// import { useNavigate } from 'react-router-dom';
import Icons from '../../../../assets/images';
import { User } from '../../../../types';
import './UsersTable.scss';

function UsersTable({ users }: { users: User[] }) {
	// const navigate = useNavigate();

	// const goToUser = (e, id) => {
	// 	e.preventDefault();
	// 	console.log(id, 'iddd');
	// 	navigate('/users/2');
	// }}

	return (
		<div className='users__tabBody'>
			<div className='mobile-header'>
				<p>Users</p>
				<span role='button'>
					<img src={Icons['Filter']} alt='' />
				</span>
			</div>
			<table>
				<thead>
					<tr>
						<th>
							Organization{' '}
							<span role='button'>
								<img src={Icons['Filter']} alt='' />
							</span>
						</th>
						<th>
							Username{' '}
							<span role='button'>
								<img src={Icons['Filter']} alt='' />
							</span>
						</th>
						<th>
							Email{' '}
							<span role='button'>
								<img src={Icons['Filter']} alt='' />
							</span>
						</th>
						<th>
							Phonenumber{' '}
							<span role='button'>
								<img src={Icons['Filter']} alt='' />
							</span>
						</th>
						<th className='date'>
							Date joined{' '}
							<span role='button'>
								<img src={Icons['Filter']} alt='' />
							</span>
						</th>
						<th>
							Status{' '}
							<span role='button'>
								<img src={Icons['Filter']} alt='' />
							</span>
						</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					{users.map((user) => (
						<tr key={user.id}>
							<td data-name='organization'>Lendsqr</td>
							<td data-name='usename' className='username'>
								{user.profile?.firstName} {user.profile?.lastName}
								<span className='status-span mobile'>Active</span>
							</td>
							<td data-name='email'>{user.email}</td>
							<td data-name='phoneumber'>03489488348934</td>
							<td data-name='date joined' className='date'>
								2009/02/27
							</td>
							<td className='status'>
								<span className='status-span'>Active</span>
							</td>
							<td data-name='action' className='action'>
								<span>
									<img src={Icons['More']} alt='' />
								</span>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}
export default UsersTable;
