// src/components/DataTable.tsx
import React from 'react';
import DataTable from 'react-data-table-component';
import { useSelector } from 'react-redux';

const DataTableComponent: React.FC = () => {
  const users = useSelector((state: any) => state.user.users); // Update with your actual Redux state structure

  const columns = [
    {
      name: 'Name',
      selector: 'name',
      sortable: true,
    },
    {
      name: 'Age',
      selector: 'age',
      sortable: true,
    },
    {
      name: 'Sex',
      selector: 'sex',
      sortable: true,
    },
    {
      name: 'Mobile',
      selector: 'mobile',
      sortable: true,
    },
    {
      name: 'Govt ID Type',
      selector: 'govtIdType',
      sortable: true,
    },
    {
      name: 'Govt ID',
      selector: 'govtId',
      sortable: true,
    },
    {
      name: 'Address',
      selector: 'address',
      sortable: true,
    },
    {
      name: 'State',
      selector: 'state',
      sortable: true,
    },
    {
      name: 'City',
      selector: 'city',
      sortable: true,
    },
    {
      name: 'Country',
      selector: 'country',
      sortable: true,
    },
    {
      name: 'Pincode',
      selector: 'pincode',
      sortable: true,
    },
  ];

  return (
    <DataTable
      title="Submitted Users"
      columns={columns}
      data={users}
      pagination
      paginationPerPage={5}
      paginationRowsPerPageOptions={[5, 10, 20]}
    />
  );
};

export default DataTableComponent;
