import React, { useEffect, useState } from 'react'

const LocalSearch = () => {
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

    const [search, setSearch] = useState("");
    const [filteredData, setFilteredData] = useState([]);

    const filtering = (searchedVal) => {
        const filtered = users.filter(user => user.name.toString().toLowerCase().includes(searchedVal.toLowerCase()) || user.phoneNumber.toString().toLowerCase().includes(searchedVal.toLowerCase()) || user.category.toString().toLowerCase().includes(searchedVal.toLowerCase()));
        setFilteredData(filtered);
    }

    const handleSearch = (e) => {
        setSearch(e.target.value)
        filtering(e.target.value);
    }

    useEffect(() => {
        setFilteredData(users);
    }, [])

    return (
        <div>
            <h1>Local Search</h1>
            <input
                type="search"
                value={search}
                placeholder="search..."
                onChange={e => handleSearch(e)}
            />

            {filteredData.map(user => (
                <div key={user.id}>{user.name} - {user.phoneNumber} - {user.category}</div>
            ))}
        </div>
    )
}

export default LocalSearch