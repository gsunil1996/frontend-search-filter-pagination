import React, { useEffect, useState } from 'react'


const LocalSearchWithFilterAndPagination = () => {
    const users = [
        {
            id: 1,
            category: "games",
            name: "Leanne Graham",
            phoneNumber: 9123456780
        },
        {
            id: 2,
            category: "games",
            name: "Ervin Howell",
            phoneNumber: 9553030932
        },
        {
            id: 3,
            category: "games",
            name: "Clementine Bauch",
            phoneNumber: 7013248374
        },
        {
            id: 4,
            category: "movies",
            name: "Patricia Lebsack",
            phoneNumber: 6123456780
        },
        {
            id: 5,
            category: "movies",
            name: "Chelsey Dietrich",
            phoneNumber: 5123456780,

        },
        {
            id: 6,
            category: "shows",
            name: "Mrs. Dennis Schulist",
            phoneNumber: 8123456780,
        },
        {
            id: 7,
            category: "shows",
            name: "Kurtis Weissnat",
            phoneNumber: 4123456780,
        },
        {
            id: 8,
            category: "shows",
            name: "Nicholas Runolfsdottir V",
            phoneNumber: 3123456780,
        },
        {
            id: 9,
            category: "other",
            name: "Glenna Reichert",
            phoneNumber: 2123456780,
        },
        {
            id: 10,
            category: "other",
            name: "Clementina DuBuque",
            phoneNumber: 1123456780,
        }
    ];

    const dataPerPage = 2;
    const [currentPage, setCurrentPage] = useState(1);
    const [pageNumbers, setPageNumbers] = useState([]);

    const [search, setSearch] = useState("");
    const [categories, setCategories] = useState("");
    const [filteredData, setFilteredData] = useState([]);

    const filtering = (searchedVal, category) => {
        const filtered = users
            .filter(user => user.name.toString().toLowerCase().includes(searchedVal.toLowerCase()) || user.phoneNumber.toString().toLowerCase().includes(searchedVal.toLowerCase()) || user.category.toString().toLowerCase().includes(searchedVal.toLowerCase()))
            .filter(user => category === "" ? user : user.category == category);
        setFilteredData(filtered);
    }

    const handleSearch = (e) => {
        setSearch(e.target.value)
        filtering(e.target.value, categories);
    }

    const handleCategory = (e) => {
        setCategories(e.target.value)
        filtering(search, e.target.value);
    }

    useEffect(() => {
        setFilteredData(users);
    }, []);

    useEffect(() => {
        const pageNums = [];
        for (var j = 1; j <= Math.ceil(filteredData.length / dataPerPage); j++) {
            pageNums.push(j);
        }
        setPageNumbers(pageNums)
    }, [filteredData]);

    // get current page data
    const indexOfLastData = currentPage * dataPerPage;
    const indexOfFirstData = indexOfLastData - dataPerPage;
    const currentPageData = filteredData.slice(indexOfFirstData, indexOfLastData);


    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    return (
        <div style={{ marginBottom: "50px" }} >
            <h1>Local Search with filter and pagination</h1>
            <input
                type="search"
                value={search}
                placeholder="search..."
                onChange={e => handleSearch(e)}
            />
            <select onChange={e => handleCategory(e)}>
                <option value="">Choose Category</option>
                <option value="">All</option>
                <option value="movies">Movies</option>
                <option value="games">Games</option>
                <option value="shows">Shows</option>
                <option value="other">Other</option>{" "}
            </select>

            {currentPageData.map(user => (
                <div key={user.id}>{user.name} - {user.phoneNumber} - {user.category}</div>
            ))}
            {pageNumbers.map(number => (
                <button
                    onClick={() => handlePageChange(number)}
                    key={number}
                    style={{ background: currentPage === number ? "lightblue" : "" }}
                >
                    {number}
                </button>
            ))}
        </div>
    )
}

export default LocalSearchWithFilterAndPagination