import React, { useEffect, useRef, useState } from 'react';

import { 
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    CircularProgress,
    Button,
    Select,
    MenuItem,
} from '@mui/material';

import { Pagination, Typography } from '@mui/material';


const Table = () => {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [tableContainerHeight, setTableContainerHeight ] = useState(0);

    const { 
        tableHeading = [],
        rowsData =[],
        isLoading = false,
        showPagination= true,
        skip,
        currentPage,
        totalPage,
        handlePrevPage,
        handleNextPage,
        onChangeRowsPerPage,
        limit,
        onChangePagination,
    } = props;

    const tableContainerRef = useRef(null);

    useEffect=(() => {
        const height = tableContainerRef.current?.getBoundingClientRect()?.height;
        setTableContainerHeight(height || 0);
        setPage(0);
    }, [rowsData]);

    



}