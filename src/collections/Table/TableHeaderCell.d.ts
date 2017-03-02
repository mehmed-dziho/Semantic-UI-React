import * as React from 'react';
import { TableCellProps } from './TableCell';

interface TableHeaderCellProps extends TableCellProps {
  sorted?: 'ascending' | 'descending';
}

declare const TableHeaderCell: React.StatelessComponent<TableHeaderCellProps>;

export default TableHeaderCell;
