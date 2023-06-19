import useUsers from '../../../common/hooks/useUsers';
import UsersTable from './components/UsersTable';
import UsersHeader from './components/UsersHeader';
import './Users.scss';
import '../../../common/UIElements/pagination/Pagination.scss';
import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { User } from '../../../types';

function Users() {
	const [users] = useUsers();
	const [currentUsers, setCurrentUsers] = useState<User[]>([]);
	const [pageCount, setPageCount] = useState(0);
	const [itemOffset, setItemOffset] = useState(0);
	const [itemsPerPage, setItemsPerPage] = useState(10);

	useEffect(() => {
		const endOffset = itemOffset + itemsPerPage;
		setCurrentUsers(users.slice(itemOffset, endOffset));
		setPageCount(Math.ceil(users.length / itemsPerPage));
	}, [itemOffset, itemsPerPage, users]);

	const handlePageClick = (event: any) => {
		const newOffset = (event.selected * itemsPerPage) % users.length;
		setItemOffset(newOffset);
	};

	const selectPageCount = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setItemsPerPage(+e.currentTarget.value);
	};

	return (
		<div className='users'>
			<div className='page__header'>
				<h2>Users</h2>
			</div>

			<div className='users__body'>
				<UsersHeader users={users} />
				<UsersTable users={currentUsers} />

				<div className='pagination_wrapper'>
					<ReactPaginate
						nextLabel='>'
						onPageChange={handlePageClick}
						pageRangeDisplayed={3}
						marginPagesDisplayed={2}
						pageCount={pageCount}
						previousLabel='<'
						pageClassName='page-item'
						pageLinkClassName='page-link'
						previousClassName='page-item prev'
						previousLinkClassName='page-link'
						nextClassName='page-item next'
						nextLinkClassName='page-link'
						breakLabel='...'
						breakClassName='page-item'
						breakLinkClassName='page-link'
						containerClassName='pagination'
						activeClassName='active'
						renderOnZeroPageCount={null}
					/>

					{users.length > 0 && (
						<div className='select-box'>
							<span>
								Showing out
								<span>
									<label htmlFor='pageitems' hidden></label>
									<select
										className='pageitems'
										name='page Items'
										id='pageitems'
										onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
											selectPageCount(e)
										}
									>
										<option value='10'>{itemsPerPage}</option>
										<option value='20'>20</option>
										<option value='50'>50</option>
										<option value='100'>100</option>
									</select>
								</span>
								of {users.length}
							</span>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}

export default Users;
