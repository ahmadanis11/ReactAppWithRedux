import React from 'react';
import { Button } from 'antd';

export const Columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "firstName",
    sorter: (a, b) =>
      a?.firstName?.toLowerCase()?.localeCompare(b.firstName?.toLowerCase()),
  },
  {
    title: "Height",
    dataIndex: "height",
    key: "email",
    sorter: (a, b) => a?.height?.toLowerCase() === b?.height?.toLowerCase(),
  },
  {
    title: "Mass",
    dataIndex: "mass",
    key: "mass",
    sorter: (a, b) =>
      a?.mass
        ?.toLowerCase()
        ?.localeCompare(b.mass?.toLowerCase()),
  },
  {
    title: "Gender",
    dataIndex: "gender",
    key: "gender",
    sorter: (a, b) =>
      a?.gender
        ?.toLowerCase()
        ?.localeCompare(b?.gender?.toLowerCase()),
  },
  {
    title: "Edited",
    dataIndex: "edited",
    sorter: (a, b) =>
      a?.edited?.toLowerCase()?.localeCompare(
        b.edited?.toLowerCase()
      ),
    key: "edited",
  },
];

export const vehicleColumns= [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Model',
    dataIndex: 'model',
    key: 'model',
  },
  {
    title: 'Manufacturer',
    dataIndex: 'manufacturer',
    key: 'manufacturer',
  },
  {
    title: 'Vehicle Class',
    dataIndex: 'vehicle_class',
    key: 'vehicle_class',
  },
];
