
const tablecolumns = [
  {
    Header: 'Title',
    accessor: 'title'
  }, {
    Header: 'Authors',
    accessor: 'authors'
  }, {
    Header: 'Source',
    accessor: 'source'
  }, {
    Header: 'Pub. Year',
    accessor: 'pubyear'
  }, {
    Header: 'DOI',
    accessor: 'doi'
  }, {
    Header: 'Claimed Benefit',
    accessor: 'claim'
  }, {
    Header: 'Level of Evidence',
    accessor: 'evidence'
  }
]
const headCells = [
  {
    id: 'title',
    numeric: false,
    disablePadding: true,
    label: 'Title',
  },
  {
    id: 'authors',
    numeric: true,
    disablePadding: false,
    label: 'Authors',
  },
  {
    id: 'source',
    numeric: true,
    disablePadding: false,
    label: 'Source',
  },
  {
    id: 'pubyear',
    numeric: true,
    disablePadding: false,
    label: 'Pub. Year',
  },
  {
    label: 'DOI',
    numeric: false,
    disablePadding: false,
    id: 'doi',
  },
  {
    label: 'Claimed Benefit',
    numeric: false,
    disablePadding: false,
    id: 'claim',
  },
  {
    label: 'Level of Evidence',
    numeric: false,
    disablePadding: false,
    id: 'evidence',
  },

];

export default headCells;