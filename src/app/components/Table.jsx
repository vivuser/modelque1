"use client"
import React from 'react';
import { useEffect, useRef, useState } from 'react';


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

function stableSort(array) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a,b) => {
        return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
}


const TableData = (props) => {
    const [page, setPage] = React.useState(0);
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

    const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, rowsData.length - page * rowsPerPage);


    useEffect(() => {
        const height = tableContainerRef.current?.getBoundingClientRect()?.height;
        setTableContainerHeight(height || 0);
        setPage(0);
    }, [rowsData]);

    const handleChangePage = (event, newPage) => {
        if ((newPage - 1) != currentPage) {
            if ((newPage -1) >  currentPage) {
                newPage = newPage > 1 ? newPage -1 : 0 
                handleNextPage(newPage);
            }
            if ((newPage -1) < currentPage) {
                newPage = newPage > 1 ? newPage - 1: 0
                handlePrevPage(newPage);
            }
            setPage(newPage - 1);
        }
    }

    const handleChangeRowsPerPage = (event) => {
        const newRowsPerPage = event?.target?.value ?? 10;
        setRowsPerPage(newRowsPerPage);
        onChangeRowsPerPage(newRowsPerPage);
        setPage(1)
    };




    return (
        <>
        <TableContainer 
        ref={tableContainerRef}  
        >
            <Table >
            <TableHead>
                <TableRow>
                    {tableHeading.map((heading, index) => {
                        return (
                            <TableCell
                                key={index}
                            >
                                {heading?.name}
                            </TableCell>
                        );
                    })}
                </TableRow>
            </TableHead>
            <TableBody>
                        {rowsData && rowsData?.length ? (
                            stableSort(rowsData)
                                .slice(page * limit, page * limit + limit)
                                .map((row, index) => {
                                    return (
                                        <TableRow key={index}>
                                            {tableHeading?.map((heading, _index) => {
                                                return (
                                                    <TableCell className={heading.key === 'actions' ? "more": "table-custom-width"} key={_index}>
                                                        {row?.[heading.key]}
                                                    </TableCell>
                                                );
                                            })}
                                        </TableRow>
                                    )
                                })
                        ) : 'no data'
                     }
            </TableBody>
            </Table>
        </TableContainer>

        {showPagination && rowsData && rowsData.length > 0 && (
            <div>
            <Pagination 
                count={totalPage}
                page={currentPage + 1}
                onChange={(event, newPage) => handleChangePage(event, newPage)}
                color="primary"
                shape="rounded"
                size="large"
                siblingCount={1}
                boundaryCount={1}
                />
                <div>
                <span>Rows Per Page &nbsp;</span>
                <Select value={limit} onChange={handleChangeRowsPerPage}>
                    {[10, 20, 30].map((option) => (
                        <MenuItem key={option} value={option}>
                        {option}
                        </MenuItem>
                    ))}
                </Select>
                </div>
            </div>
        )}

</>)
    



}

export default TableData;