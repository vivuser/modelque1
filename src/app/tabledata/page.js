"use client"
import { useMemo, useState } from "react";
import TableData from "../components/Table";
import { dummyRows } from "../utils/dummyData/rowsData";

const columns = [

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



const TabularDataPage = (filters = {}) => {

    const [currentPage, setCurrentPage] = useState(0);

    const parseRowData = useMemo(() => {
        return dummyRows?.map((customer, idx) => {
            return {
                ...customer,
                sno: filters.skip + (idx + 1),
                email: customer?.email,
                firstName: customer?.firstName,
                lastName: customer?.lastName,
            }
        }) || []
    })

    return (
        <div className="mt-20 ml-20">
            <TableData 
            tableHeading = {columns}
            rowsData={parseRowData}
            currentPage={currentPage}
            // totalPages={totalPages}
            skip={filters.skip}
            // handlePrevPage={handlePrevPage}
            // handleNextPage={handleNextPage}
            // onChangeRowsPerPage={onChangeRowsPerPage}
            limit={filters.limit}
            // onChangePagination={onChangePagination}
            />
        </div>
    )
}

export default TabularDataPage;