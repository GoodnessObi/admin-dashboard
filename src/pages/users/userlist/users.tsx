import useUsers from '../../../common/hooks/useUsers';

function Users() {
	const users = useUsers();

	console.log(users, 'iiiii');

	return <div>Users</div>;
}

export default Users;
