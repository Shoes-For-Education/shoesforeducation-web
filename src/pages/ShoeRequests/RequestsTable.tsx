import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    TablePagination
  } from '@mui/material';
import { Box } from "@mui/system";
import React from 'react';
import Avatar from '../../components/Avatar';
import { EProofType } from '../../store/enums/proof-type.enum';
import type { IAggregatedBookForm } from '../../store/interfaces/aggregated-book-form';
import type { IColumn } from '../../store/interfaces/column.interface';
import { genderMap } from '../../utils/mapping';
import AddressView from "./components/AddressView";
import SummaryModal from "./components/SummaryModal";
import VideoModal from "./components/VideoModal";
import { useStyles } from "./styles";
import { mappedShoeSizes } from "../RequestShoes/components/PersonalForm/utils/mapping";
import { EOrderStatus } from '../../store/enums/order-status.enum';
import clsx from 'clsx';

type OrdersPageContentProps = {
    bookForms: IAggregatedBookForm[],
    rows: number,
    page: number,
    count:number,
    handlePageChange: (e:React.MouseEvent<HTMLButtonElement> | null, newPage:number) => void,
    handleRowsChange: (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
}

function formatDate(dateString: string): string {
    const date = new Date(dateString);
    const day = date.getDate();
  
    const getOrdinal = (n: number) =>
      n + (["th", "st", "nd", "rd"][(n % 10 > 3 || ~~((n % 100) / 10) === 1) ? 0 : n % 10] || "th");
  
    const options: Intl.DateTimeFormatOptions = { month: 'short' };
    const month = new Intl.DateTimeFormat('en-US', options).format(date);
  
    return `${month} ${getOrdinal(day)} ${date.getFullYear()}`;
  }

const RequestsTable : React.FC<OrdersPageContentProps> = ({ 
        bookForms, rows, page, handlePageChange, handleRowsChange,count
    }) => {
    const columns:IColumn<IAggregatedBookForm>[] = [
        {
            id: "address",
            label: "Address",
            format: (e) => {
                return <AddressView bookForm={e} />
            }
        },
        {
            id: "summary",
            label: "Summary",
            format: (e) => {
                return <SummaryModal bookForm={e} disabled={e.proofType !== EProofType.WRITTEN} />
            }
        },
        {
            id: "user",
            label: "Video",
            format: (e) => {
                return <VideoModal bookForm={e} disabled={e.proofType !== EProofType.VIDEO} />
            }
        },
        {
            id: "shoeSize",
            label: "Shoe Size",
            format: (e) => {
                return mappedShoeSizes[e.shoeSize as keyof typeof mappedShoeSizes] || "-";
            }
        },
        {
            id: "gender",
            label: "Gender",
            format: (e) => {
                return genderMap[e.gender] || "-";
            }
        },
        {
            id: "createdAt",
            label: "Created On",
            format: (e) => { 
                if (!e.createdAt) return "-";
                return formatDate(e.createdAt)
            }
        },
        {
            id: "status",
            label: "Status",
            format: (e) => {
                switch(e.status) {
                    case EOrderStatus.CREATED:
                        return "Pending";
                    case EOrderStatus.REJECTED:
                        return <span style={{ color: "red" }}>Rejected</span>;
                    case EOrderStatus.APPROVED:
                        return <span style={{ color: "green" }}>Approved</span>;
                    default:
                        return "Unknown";
                }
            } 
        }
    ];

    const { classes } = useStyles();

    return (
        <Box className={clsx(classes.container, "px-4 w-screen lg:w-full flex flex-col items-center")}>
            <div className="overflow-scroll lg:w-full w-screen flex flex-col lg:items-center">
            <Table className={clsx(classes.table, "max-w-lg")}>
                <TableHead>
                   <TableRow>
                   {
                        columns.map(({ label } : IColumn<IAggregatedBookForm>) => { 
                            return (
                                <TableCell className={classes.cell} key={label}>
                                    { label }
                                </TableCell>
                            )
                        })
                    }
                   </TableRow>
                </TableHead>
                <TableBody className={classes.body}>
                    {
                        bookForms.map((bookForm:IAggregatedBookForm, _index:number) => {
                            return (
                                <TableRow className={classes.row} key={bookForm._id}>
                                    {
                                        columns.map((column : IColumn<IAggregatedBookForm>, key:number) => {
                                            const content = column.format ? column.format(bookForm) : bookForm[column.id];
                                            
                                            return (
                                                <TableCell className={classes.cell} key={`${bookForm._id}-${key}`}>
                                                    { content }
                                                </TableCell>
                                            )
                                        })
                                    }
                                </TableRow>
                            )
                        })
                    }
                </TableBody>
            </Table>
            </div>
            <TablePagination
                component="div"
                count={count}
                page={page}
                onPageChange={handlePageChange}
                rowsPerPage={rows}
                onRowsPerPageChange={handleRowsChange}
            />
        </Box>
    )
}   

export default React.memo(RequestsTable);