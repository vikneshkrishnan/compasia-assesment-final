"use client"

import { useEffect, useState } from "react";
import axios from "axios";
import { Order } from "../../../../packages/models/product.model";
import { Table, TableCell, TableContainer, TableHead, TablePagination, TableRow } from "@mui/material";

export default function Orders(): JSX.Element {
    const [orders, setOrders] = useState<Order[]>([]);
    const [page, setPage] = useState<number>(0);
    const [rowsPerPage, setRowsPerPage] = useState<number>(5);
    const [totalRows, setTotalRows] = useState<number>(0);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const pageNumber = page + 1;
                const res = await axios.get('http://localhost:3000/orders', {
                    params: {
                        page: pageNumber ,
                        pageSize: rowsPerPage,
                    }
                });
                setOrders(res.data.data);
                setTotalRows(res.data.total);
            } catch (e) {
                console.log(e);
            }
        };
        fetchOrders();
    }, [page, rowsPerPage]);

    const handleChangePage = (event: unknown, newPage: number) => {
        console.log(`Changing to page: ${newPage}`);
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newPageSize = parseInt(event.target.value, 10);
        console.log(`Changing rows per page to: ${newPageSize}`);
        setRowsPerPage(newPageSize);
        setPage(0);
    };

    return (
        <>
            <TableContainer>
                <Table sx={{minWidth: 650}} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Order ID</TableCell>
                            <TableCell align="right">Product ID</TableCell>
                            <TableCell align="right">Product Name</TableCell>
                            <TableCell align="right">Product Color</TableCell>
                            <TableCell align="right">Order Date Time</TableCell>
                        </TableRow>
                    </TableHead>
                    {orders.map((order) => (
                        <TableRow
                            key={order.id}
                            sx={{'&:last-child td, &:last-child th': {border: 0}}}
                        >
                            <TableCell component="th" scope="row">
                                {order.id}
                            </TableCell>
                            {/* Access the specific properties of the objects */}
                            <TableCell align="right">{order.productId}</TableCell>
                            <TableCell align="right">{order.productName}</TableCell>
                            {/* If productColor is an object, access its property */}
                            <TableCell align="right">{order.productColor}</TableCell>
                            <TableCell align="right">{order.orderDate}</TableCell>
                        </TableRow>
                    ))}
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={totalRows}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}/>
        </>
    );
}
