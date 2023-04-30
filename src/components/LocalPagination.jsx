import React, { useEffect, useState } from 'react'

const LocalPagination = () => {
    const [data, setData] = useState([]);
    const dataPerPage = 10;
    const [currentPage, setCurrentPage] = useState(1);
    const [pageNumbers, setPageNumbers] = useState([]);

    useEffect(() => {
        // generate fake data 
        const fakeData = [];
        for (var i = 1; i < 100; i++) {
            fakeData.push({
                id: i,
                filename: "file-" + i
            });
        }
        setData(fakeData);

        const pageNums = [];
        // setting page numbers in array
        // fakeData.length is totalPageCount
        for (var j = 1; j <= Math.ceil(fakeData.length / dataPerPage); j++) {
            pageNums.push(j);
        }
        setPageNumbers(pageNums)
    }, []);

    // get current page data
    const indexOfLastData = currentPage * dataPerPage;
    const indexOfFirstData = indexOfLastData - dataPerPage;
    const currentPageData = data.slice(indexOfFirstData, indexOfLastData);


    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    return (
        <div>
            <h1>Local Pagination</h1>
            {currentPageData.map(item => (
                <div key={item.id}>{item.filename}</div>
            ))}
            {/* pagination */}
            {pageNumbers.map(number => (
                <button
                    onClick={() => handlePageChange(number)}
                    key={number}
                    style={{ background: currentPage === number ? "lightblue" : "" }}
                >
                    {number}
                </button>
            ))}
            <br />
            total pages : {pageNumbers.length}
        </div>
    )
}

export default LocalPagination