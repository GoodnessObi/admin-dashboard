// import ReactPaginate from 'react-paginate';
// import { useEffect, useState } from 'react';
// import { AnymatchFn } from 'vite';

// type PaginationProps = {
// 	total: number;
// 	onPageChange: () => void;
// };

// const Pagination = ({ total, onPageChange }: PaginationProps) => {
// 	const itemsPerPage = 10;
// 	const [itemOffset, setItemOffset] = useState(0);
// 	const [pageCount, setPageCount] = useState(0);

// 	useEffect(() => {
// 		const endOffset = itemOffset + itemsPerPage;
// 		console.log(`Loading items from ${itemOffset} to ${endOffset}`);
// 		setCurrentUsers(users.slice(itemOffset, endOffset));
// 		setPageCount(Math.ceil(total / itemsPerPage));
// 	}, [itemOffset, itemsPerPage]);

// 	const handlePageClick = (event: any) => {
// 		const newOffset = (event.selected * itemsPerPage) % total;
// 		console.log(
// 			`User requested page number ${event.selected}, which is offset ${newOffset}`
// 		);
// 		// setItemOffset(newOffset);
// 	};
// 	return (
// 		<div>
// 			<ReactPaginate
// 				nextLabel='next >'
// 				onPageChange={handlePageClick}
// 				pageRangeDisplayed={3}
// 				marginPagesDisplayed={2}
// 				pageCount={pageCount}
// 				previousLabel='< previous'
// 				pageClassName='page-item'
// 				pageLinkClassName='page-link'
// 				previousClassName='page-item'
// 				previousLinkClassName='page-link'
// 				nextClassName='page-item'
// 				nextLinkClassName='page-link'
// 				breakLabel='...'
// 				breakClassName='page-item'
// 				breakLinkClassName='page-link'
// 				containerClassName='pagination'
// 				activeClassName='active'
// 				renderOnZeroPageCount={null}
// 			/>
// 		</div>
// 	);
// };
// export default Pagination;
