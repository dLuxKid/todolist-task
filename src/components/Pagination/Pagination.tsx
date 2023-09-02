import ReactPaginate from 'react-paginate';

interface Props {
    totalPages: number,
    handlePageChange: (selected: any) => void
}

export default function Pagination({ totalPages, handlePageChange }: Props) {
    return (
        <div className='mb-12 md:mb-0 pt-5 w-full border-t border-t-gray-200 flex-center'>
            <ReactPaginate
                pageCount={totalPages}
                onPageChange={handlePageChange}
                previousLabel={"← Previous"}
                nextLabel={"Next →"}
                breakLabel={"..."}
                containerClassName={"flex items-center gap-1 text-xs md:text-base font-semibold text-gray-900 w-full"}
                activeClassName={"rounded-full bg-gray-50 h-10 w-10 flex-center"}
                pageClassName='h-10 w-10 flex-center'
                previousClassName={'mr-auto'}
                nextClassName={'ml-auto'}
            />
        </div>
    )
}
