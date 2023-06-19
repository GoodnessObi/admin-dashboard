// import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Icons from '../../../../assets/images';
import { User } from '../../../../types';
import './UsersTable.scss';
import DropdownBtn from './Dropdown';
import FilterForm from './FilterForm';
import { useState } from 'react';
import moment from 'moment';

function UsersTable({ users }: { users: User[] }) {
	const [isFormOpen, setIsFormOpen] = useState<boolean>(false);

	const formatDate = (date: string) => {
		return moment(date).format('MMM DD YYYY, h:mm a');
	};

	const toggleForm = () => {
		setIsFormOpen(!isFormOpen);
	};
	const filterUsers = () => {
		toggleForm();
	};

	const resetFilter = () => {
		toggleForm();
	};

	return (
		<div className='users__tabBody' onClick={() => setIsFormOpen(false)}>
			{isFormOpen && (
				<div className='filterForm'>
					<FilterForm onSubmit={filterUsers} onReset={resetFilter} />
				</div>
			)}
			<div className='mobile-header'>
				<p>Users</p>
				<span
					role='button'
					className='open-filter'
					onClick={(e) => {
						e.stopPropagation();
						toggleForm();
					}}
				>
					<img src={Icons['Filter']} alt='' />
				</span>
			</div>
			<table>
				<thead>
					<tr>
						<th>
							Organization{' '}
							<span
								role='button'
								className='open-filter'
								onClick={(e) => {
									e.stopPropagation();
									toggleForm();
								}}
							>
								<img src={Icons['Filter']} alt='' />
							</span>
						</th>
						<th>
							Username{' '}
							<span
								role='button'
								className='open-filter'
								onClick={(e) => {
									e.stopPropagation();
									toggleForm();
								}}
							>
								<img src={Icons['Filter']} alt='' />
							</span>
						</th>
						<th>
							Email{' '}
							<span
								role='button'
								className='open-filter'
								onClick={(e) => {
									e.stopPropagation();
									toggleForm();
								}}
							>
								<img src={Icons['Filter']} alt='' />
							</span>
						</th>
						<th>
							Phonenumber{' '}
							<span
								role='button'
								className='open-filter'
								onClick={(e) => {
									e.stopPropagation();
									toggleForm();
								}}
							>
								<img src={Icons['Filter']} alt='' />
							</span>
						</th>
						<th className='date'>
							Date joined{' '}
							<span
								role='button'
								className='open-filter'
								onClick={(e) => {
									e.stopPropagation();
									toggleForm();
								}}
							>
								<img src={Icons['Filter']} alt='' />
							</span>
						</th>
						<th>
							Status{' '}
							<span
								role='button'
								className='open-filter'
								onClick={(e) => {
									e.stopPropagation();
									toggleForm();
								}}
							>
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
								<Link to={`/users/${user.id}`}>
									{user.profile?.firstName} {user.profile?.lastName}
								</Link>
								<span className='status-span mobile'>Active</span>
							</td>
							<td data-name='email'>{user.email}</td>
							<td data-name='phoneumber'>
								{user.profile?.phoneNumber.slice(
									0,
									user.profile?.phoneNumber.indexOf('x')
								)}
							</td>
							<td data-name='date joined' className='date'>
								{user.createdAt && formatDate(user.createdAt)}
							</td>
							<td className='status'>
								<span className={`status-span ${user.status}`}>
									{user.status}
								</span>
							</td>
							<td data-name='action' className='action'>
								<DropdownBtn id={user.id} status={user.status} />
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}
export default UsersTable;
