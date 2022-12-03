import React, { FC } from "react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { TableContainer, Table, TableHead, TableRow, TableBody, styled, tableCellClasses, TableCell, Paper, Box } from "@mui/material";
import TodoItems from "./components/items";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));


const TodoList: React.FC = () => {
    const [todo, setTodo] = useState([] as any[]);
    const state = useSelector(state => state.todoStore);
    useEffect(() => {
        setTodo(state.todo);
    }, [state])
    return (
        <div>
            <TableContainer component={Paper}>
                {todo.length ? (
                    <Table sx={{ minWidth: 700 }} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell align="right">عنوان</StyledTableCell>
                                <StyledTableCell align="right">تعداد</StyledTableCell>
                                <StyledTableCell>عملیات</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>

                            {
                                todo.map((row, index) => (
                                    <TodoItems key={`todo-${index}`} title={row?.title} indicator={index} num={row?.num} />
                                ))
                            }
                        </TableBody>
                    </Table>
                ) : (
                    <Box sx={{ p: 4, mx: 5 , }} >
                        آیتمی در لیست شما وجود ندارد :)
                    </Box>
                )}
            </TableContainer>
        </div>
    )
}


export default TodoList;