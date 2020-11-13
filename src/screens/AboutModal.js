import React from 'react';
import {
    makeStyles,
    Paper,
    Grid,
    Card,
    CardContent,
    CardActions,
    Box,
    Button,
    Dialog,
    DialogActions,
    DialogTitle,
    DialogContent,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
    Divider,
} from '@material-ui/core';
import paperInfo from "../state/doubleUNetInfo.json";
import { useRecoilValue } from 'recoil';
import { packagesInfoState } from '../state/packagesInfo';

const CATEGORIES_SPACING = 2

const useStyles = makeStyles((theme) => ({
    tableHead: {
    },
    table: {
    },
    grid: {
        flexGrow: 1,
    },
    card: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
    }
}));

export function AboutModal({ hideModal }) {
    const classes = useStyles();
    const packagesInfo = useRecoilValue(packagesInfoState);

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
                <Typography variant="h5">Metrics</Typography> <Divider /> <Box m={CATEGORIES_SPACING} />
                <TableContainer component={Paper} className={classes.table} variant="outlined">
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
                </TableContainer> <Box m={CATEGORIES_SPACING} />
                <Typography variant="h5">Credits</Typography> <Divider /> <Box m={CATEGORIES_SPACING} />
                {
                    paperInfo.credits.map((credit, index) => (
                        <React.Fragment key={"credit_" + index}>
                            <Card variant="outlined">
                                <CardContent>
                                    <Typography color="textSecondary" gutterBottom>{credit.author}</Typography>
                                    <Typography variant="h5" component="h2">{credit.title}</Typography>
                                    <Typography color="textSecondary">{"Source : " + credit.booktitle}</Typography>
                                    <Typography color="textSecondary">{"Year : " + credit.year}</Typography>
                                    <Typography color="textSecondary">{"Pages : " + credit.pages}</Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small" onClick={() => window.open(credit.arXivLink, "_blank")}>Learn More</Button>
                                    <Button size="small" onClick={() => window.open(credit.paperLink, "_blank")}>Paper</Button>
                                    <Button size="small" onClick={() => window.open(credit.githubLink, "_blank")}>Github</Button>
                                </CardActions>
                            </Card>
                            <Box m={CATEGORIES_SPACING}/>
                        </React.Fragment>
                    ))
                }
                <Typography variant="h5">Open source packages used</Typography> <Divider /> <Box m={CATEGORIES_SPACING} />
                <Grid container spacing={2} className={classes.grid}>
                {
                    Object.entries(packagesInfo)
                    .map(([packageName, packageInfo], index) => (
                        <Grid item xs={12} sm={6} lg={4} key={"package_" + index}>
                            <Card className={classes.card} variant="outlined">
                                <CardContent>
                                    <Typography color="textSecondary" gutterBottom>{packageInfo.author?.name ?? packageInfo.author}</Typography>
                                    <Typography variant="h5" component="h2">{packageInfo.name}</Typography>
                                    <Typography color="textSecondary">{"Version : " + packageInfo.version}</Typography>
                                    <Typography color="textSecondary">{packageInfo.description}</Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small" onClick={() => window.open(packageInfo.homepage, "_blank")}>Learn More</Button>
                                    <Button size="small" onClick={() => window.open(packageInfo.repository.url, "_blank")}>Github</Button>
                                    <Button size="small" onClick={() => window.open(`https://www.npmjs.com/package/${packageInfo.name}`, "_blank")}>npm</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))
                }
                </Grid>
            </DialogContent>
            <DialogActions>
                <Button size="small" onClick={() => window.open("https://github.com/YassineElbouchaibi/medica-vue-frontend", "_blank")}>Frontend Github Repository</Button>
                <Button size="small" onClick={() => window.open("https://github.com/YassineElbouchaibi/medica-vue-backend", "_blank")}>Backend Github Repository</Button>
                <Button onClick={hideModal}>Go back</Button>
            </DialogActions>
        </Dialog>
    );
}