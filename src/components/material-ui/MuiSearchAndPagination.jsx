import React, { useEffect, useState } from 'react'
import SearchBar from "material-ui-search-bar";
import Pagination from '@mui/material/Pagination';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

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

const columns = [
    {
        id: "id",
        label: "ID",
        minwidth: 60,
        align: "left",
        background: "#755139FF"
    },
    {
        id: "category",
        label: "Category",
        minwidth: 60,
        align: "left",
        background: "#755139FF"
    },

    {
        id: "name",
        label: "Name",
        minwidth: 60,
        align: "left",
        background: "#755139FF"
    },

    {
        id: "phoneNumber",
        label: "Phone Number",
        minwidth: 60,
        align: "left",
        background: "#755139FF"
    },
]


const MuiSearchAndPagination = () => {

    const [search, setSearch] = useState("");
    const [filteredData, setFilteredData] = useState([]);

    const dataPerPage = 2;
    const [currentPage, setCurrentPage] = useState(1);
    const [pageCount, setPageCount] = useState(1);

    // get current page data
    const indexOfLastData = currentPage * dataPerPage;
    const indexOfFirstData = indexOfLastData - dataPerPage;
    const currentPageData = filteredData.slice(indexOfFirstData, indexOfLastData);

    const handlePageChange = (event, newPage) => {
        setCurrentPage(newPage);
    }


    const requestSearch = (searchedVal) => {
        // console.log('searchedVal', searchedVal)
        const filteredRows = users.filter((row) => {
            return (
                row.name
                    .toString()
                    .toLowerCase()
                    .includes(searchedVal.toLowerCase()) ||
                row.phoneNumber
                    .toString()
                    .toLowerCase()
                    .includes(searchedVal.toLowerCase()) ||
                row.category
                    .toString()
                    .toLowerCase()
                    .includes(searchedVal.toLowerCase())
            );
        });
        setFilteredData(filteredRows);
    }

    const cancelSearch = () => {
        setSearch("");
        requestSearch(search); // this is not required while handleling backend pagination
    }

    useEffect(() => {
        setFilteredData(users);
    }, []);

    useEffect(() => {
        setPageCount(Math.ceil(filteredData.length / dataPerPage))
    }, [filteredData]);

    return (
        <div style={{ marginBottom: "50px" }} >

            <h1>Material ui Search and pagination</h1>

            <div style={{ width: "60%", margin: "auto", background: "#FCF6F5FF", padding: "20px" }} >

                <div style={{ display: "flex", justifyContent: "flex-end" }} >
                    <SearchBar
                        value={search}
                        onChange={(searchVal) => requestSearch(searchVal)}
                        //  onRequestSearch={() => getData()} // this works on enter
                        onCancelSearch={() => cancelSearch()}
                        style={{ marginBottom: "20px" }}
                    />
                </div>


                <TableContainer component={Paper}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                {columns.map((column) => (
                                    <TableCell
                                        key={column.id}
                                        align={column.align}
                                        style={{
                                            minWidth: column.minWidth,
                                            background: column.background,
                                            color: "#fff",
                                        }}
                                    >
                                        {column.label}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {currentPageData.map((row) => {
                                return (
                                    <TableRow
                                        hover
                                        role="checkbox"
                                        tabIndex={-1}
                                        key={row._id}
                                        style={{
                                            background: "#F2EDD7FF"
                                        }}
                                    >
                                        <TableCell align="left" >
                                            {row.id}
                                        </TableCell>

                                        <TableCell align="left" >
                                            {row.category}
                                        </TableCell>

                                        <TableCell align="left" >
                                            {row.name}
                                        </TableCell>

                                        <TableCell align="left" >
                                            {row.phoneNumber}
                                        </TableCell>

                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>

                <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }} >
                    <Pagination
                        count={pageCount}
                        page={currentPage}
                        onChange={handlePageChange}
                        variant="outlined"
                        color="primary"
                    />
                </div>

            </div>

        </div>
    )
}

export default MuiSearchAndPagination