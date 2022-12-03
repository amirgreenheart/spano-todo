import { tableCellClasses, IconButton, styled, TableCell, TableRow } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Link from 'next/link';
import { removeTodo } from "@/redux/todo/action";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
type Props = {
    title: string,
    num: number,
    indicator: number
}
const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
}));
const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));
const TodoItems: React.FC<Props> = ({ title, num, indicator }) => {
    const dispatch = useDispatch();
    const handleRemoveTodo = (todoIndex: number) => {
        dispatch(removeTodo(todoIndex))
        toast.success('گزینه انتخابی شما با موفقیت حذف شد')
    }
    return (
        <StyledTableRow>
            <StyledTableCell align="right" component="th">
                {title}
            </StyledTableCell>
            <StyledTableCell align="right">{num}</StyledTableCell>
            <StyledTableCell>
                <IconButton onClick={() => handleRemoveTodo(indicator)} aria-label="delete">
                    <DeleteIcon />
                </IconButton>
                <Link href={`/edit/${indicator}`}>
                    <IconButton aria-label="edit">
                        <EditIcon />
                    </IconButton>
                </Link>
            </StyledTableCell>
        </StyledTableRow>
    )
}
export default TodoItems;