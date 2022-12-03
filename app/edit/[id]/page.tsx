'use client'
import UiButton from "@/components/ui/matrialUi/Button";
import { TextField, Box, Button, Grid, Container, Paper } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import * as React from 'react';
import { removeTodo, addTodo } from "@/redux/todo/action";
import { useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from 'next/navigation'
import UiTextField from "@/components/ui/matrialUi/TextField";

interface Props {
    params?: any;
}

const EditTodo: React.FC<Props> = ({ params }) => {
    const router = useRouter();
    const state = useSelector(state => state.todoStore);
    const { title, num } = state.todo[params.id];
    const [todoTitle, setTodoTitle] = useState<string>(title);
    const [todonum, setTodoNum] = useState<number>(num);
    const dispatch = useDispatch();
    const handleEditTodo = () => {
        if (todoTitle && todonum > 0) {
            dispatch(removeTodo(Number(params.id)))
            dispatch(addTodo(todoTitle, todonum))
            router.push("/");
        } else {
            toast.error('وارد نمودن فیلد های عنوان و تعداد الزامیست')
        }
    }
    return (
        <React.Fragment>
            <Container sx={{ mt: 10, mx: 5 }} maxWidth="sm">
                <UiButton children="بازگشت" link='/' />
            </Container>
            <Paper
                sx={{
                    p: 2,
                    pt: 5,
                    margin: 'auto',
                    minHeight: 250,
                    maxWidth: 850,
                    flexGrow: 1,
                    backgroundColor: (theme) =>
                        theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                }}
                elevation={0} >
                <Box>
                    <Grid sx={{ gap: 4, mb: 5 }} container
                        direction="row"
                        alignItems="center"
                        justifyContent="center"
                    >
                        <Grid>
                            <UiTextField id="title" textFieldChange={setTodoTitle} value={todoTitle} fullWidth={true} label="عنوان" type="text" shrink={true} />
                        </Grid>
                        <Grid>
                            <UiTextField id="number" textFieldChange={setTodoNum} value={todonum} fullWidth={true} label="تعداد" type="number" shrink={true} />
                        </Grid>
                    </Grid>
                    <Grid sx={{ gap: 4 }} container
                        direction="row"
                        alignItems="center"
                        justifyContent="center"
                    >
                        <Button
                            sx={{
                                mt: 1, width: '350px'
                            }} onClick={() => handleEditTodo()} variant="contained">ویرایش
                        </Button>
                    </Grid>
                </Box>
            </Paper>
        </React.Fragment >
    )
}

export default EditTodo;
