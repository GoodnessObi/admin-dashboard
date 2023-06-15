import { useParams } from 'react-router-dom';
import useUser from '../../../common/hooks/useUser';

function User() {
	const { id } = useParams() as { id: string };

	const user = useUser(id);
	console.log(user);

	return <div>User = {id}</div>;
}

export default User;
