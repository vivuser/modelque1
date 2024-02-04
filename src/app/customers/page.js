"use client"
import { useMemo, useState } from "react";
import TableData from "../components/Table";
import { dummyRows } from "../utils/dummyData/rowsData";

const columns = [
    {
        name: 'S.no',
        key: 's_no',
      },
    {
        name:'Customer Email',
        key:'email',
    }, {
        name: "First Name",
        key: 'firstName'
      },
      {
        name: 'Last Name',
        key: 'lastName',
      },
      {
        name: 'Phone Number',
        key: 'primaryPhone',
      },
]

const TabularDataPage = () => {

    const [currentPage, setCurrentPage] = useState(0);
    const [filters, setFilters] = useState({
        limit: 10,
        skip: 0,
        page: 0,
    })

    const onChangePagination = (e, page) => {
        const skip = page * filters.limit
        setFilters({ ...filters, skip, page })
    }

    const onChangeRowsPerPage = (e) => {
        const newFilters = { limit: parseInt(e, 10), page: 0, skip: 0 }
        setFilters(newFilters)
        setCurrentPage(0)
    }   

    const totalPage = useMemo(() =>  {
        return Math.ceil(dummyRows.length / filters.limit) > 1 ? Math.ceil(dummyRows.length / filters.limit) : 1
    }, [dummyRows.length, filters.limit]);

    console.log(totalPage,'this')

    const handlePrevPage = (prevPage) => {
        setCurrentPage(prevPage)
        const skip = prevPage * filters.limit
        setFilters({ ...filters, skip, page: prevPage })
    }

    const handleNextPage = (nextPage) => {
        console.log(nextPage, 'nextPage')
        setCurrentPage(nextPage)
        const skip = nextPage * filters.limit
        setFilters({ ...filters, skip, page: nextPage })
    }

    const parseRowData = useMemo(() => {
        return dummyRows?.map((customer, idx) => {
            return {
                ...customer,
                s_no: filters.skip + (idx + 1),
                email: customer?.email,
                firstName: customer?.firstName,
                lastName: customer?.lastName,
                primaryPhone: customer?.primaryPhone
            }
        }) || []
    }, [dummyRows, filters.skip])


    return (
        <div className="mt-20 ml-20">
            <TableData 
            tableHeading = {columns}
            rowsData={parseRowData}
            currentPage={currentPage}
            totalPage={totalPage}
            skip={filters.skip}
            handlePrevPage={handlePrevPage}
            handleNextPage={handleNextPage}
            onChangeRowsPerPage={onChangeRowsPerPage}
            limit={filters.limit}
            onChangePagination={onChangePagination}
            />
        </div>
    )
}

export default TabularDataPage;