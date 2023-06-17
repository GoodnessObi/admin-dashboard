import useUsers from '../../../common/hooks/useUsers';
import UsersTable from './components/UsersTable';
import UsersHeader from './components/UsersHeader';
import './users.scss';

function Users() {
	const [users] = useUsers();

	console.log(users, 'iiiii');

	return (
		<div className='users'>
			<div className='page__header'>
				<h2>Users</h2>
			</div>

			<div className='users__body'>
				<UsersHeader users={users} />
				<UsersTable users={users} />
			</div>
		</div>
	);
}

export default Users;
