import React from 'react';
import {
    makeStyles,
    Paper,
    Button,
    Dialog,
    DialogActions,
    DialogTitle,
    DialogContent,
    DialogContentText,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from '@material-ui/core';
import paperInfo from "../state/doubleUNetInfo.json";

const useStyles = makeStyles((theme) => ({
    tableHead: {
        backgroundColor: theme.palette.primary.main,
    },
    table: {
        borderWidth: theme.spacing(0.3),
        borderColor: theme.palette.primary.main,
        borderStyle: 'solid',
    }
}));

export function AboutModal({ hideModal }) {
    const classes = useStyles();
    const descriptionElementRef = React.useRef(null);

    React.useEffect(() => {
        const { current: descriptionElement } = descriptionElementRef;
        if (descriptionElement !== null) {
            descriptionElement.focus();
        }
    }, []);

    return (
        <Dialog
            open
            onClose={hideModal}
            scroll="paper"
            aria-labelledby="scroll-dialog-title"
            aria-describedby="scroll-dialog-description"
            maxWidth="lg"
        >
            <DialogTitle id="scroll-dialog-title">DoubleU-Net vs other methods</DialogTitle>
            <DialogContent dividers>
                <DialogContentText
                    id="scroll-dialog-description"
                    ref={descriptionElementRef}
                    tabIndex={-1}
                    component="span"
                >
                    <TableContainer component={Paper} className={classes.table}>
                        <Table className={classes.table} aria-label="simple table">
                            <TableHead>
                                <TableRow className={classes.tableHead}>
                                    {paperInfo.columnNames.map((columnName, index) => (
                                        index === 0 ?
                                            <TableCell key={"inner" + columnName + index} align="left">{columnName}</TableCell>
                                            :
                                            <TableCell key={"inner" + columnName + index} align="center">{columnName}</TableCell>
                                    ))}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {paperInfo.rows.map((row, index) => (
                                    <TableRow key={"row_" + index}>
                                        {
                                            paperInfo.columnNames.map((columnName, index) => (
                                                index === 0 ?
                                                    <TableCell key={"inner_row_" + index} component="th" scope="row" align="left">
                                                        {row[columnName] ?? "-"}
                                                    </TableCell>
                                                    :
                                                    <TableCell key={"inner_row_" + index} align="center">{row[columnName] ?? "-"}</TableCell>
                                            ))
                                        }
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={hideModal}>Go back</Button>
            </DialogActions>
        </Dialog>
    );
}