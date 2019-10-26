import React, {useState} from 'react';

// material-ui
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Fab from '@material-ui/core/Fab';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import AddCircleOutlinedIcon from '@material-ui/icons/AddCircleOutlined';
import teal from '@material-ui/core/colors/teal';


import { createMuiTheme } from '@material-ui/core/styles';

import PromotionForm from '../PromotionForm/PromotionForm'

// components
import Title from '../Title/Title';

// constructor for creating mock data
function createData(id, name, qtypeople, description) {
    return { id, name, qtypeople, description };
}

// generate mock data
const rows = [
    createData(0, 'Cinco De Mayo', '15% off on all beers', 10),
    createData(1, 'Independence Day', 'Buy 1 get 1 free', 15),
    createData(2, 'Super Bowl', '1 Free Appetizer', 5),
    createData(3, 'Bootcamp Graduation Party', '25% off drinks with student ID', 8),
    createData(4, 'Jay-Z\'s Birthday Party', 'Free valet parking', 4)
];

// styling
const useStyles = makeStyles(theme => ({
    // promo bottom
    promoBottom: {
        marginTop: theme.spacing(3),
    },
    // icon sizes
    fab: {
        margin: theme.spacing(1)
    },
    marginIcon: {
        margin: theme.spacing(1),
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
    },
}));

// trying to add button color; may need to theme the entire page
// const addIconColor = teal[200]; // #80cbc4
// const theme = createMuiTheme({
//     palette: {
//         primary: addIconColor,
//         secondary: {
//             main: '#f44336',
//         },
//     },
// });

const addPromotion = () => {
    console.log('add promo');
};

const deletePromotion = () => {
    console.log('delete promo');
};



// render promotions
export default function Promotions() {
    const classes = useStyles();
    const [formActive, setActive] = useState(false);

    return (
        <React.Fragment>

            <Title>My Promotions</Title>

            <Table size="medium">

                {/* columns */}
                <TableHead>
                    <TableRow>
                        <TableCell>name</TableCell>
                        <TableCell>description</TableCell>
                        <TableCell>qtypeople</TableCell>
                        {/* <TableCell align="right">Some buttons</TableCell> */}
                    </TableRow>
                </TableHead>

                {/* promo information */}
                <TableBody>

                    {/* mapo through promo response and append data to promo table */}
                    {rows.map(row => (
                        <TableRow key={row.id}>
                            <TableCell>{row.name}</TableCell>
                            <TableCell>{row.qtypeople}</TableCell>
                            <TableCell>{row.description}</TableCell>
                            {/* <TableCell align="right">{row.amount}</TableCell> */}
                        </TableRow>
                    ))}

                </TableBody>

            </Table>
            <div className={classes.promoBottom}>
                <Fab size="small" variant="extended" aria-label="delete" className={classes.fab}       onClick={() => {
            formActive ? setActive(false) : setActive(true);
          }}>
                    <AddIcon className={classes.extendedIcon} />
                    Add Promotion
                </Fab>
                <Fab size="small" variant="extended" aria-label="delete" className={classes.fab} onClick={deletePromotion}>
                    <DeleteIcon className={classes.extendedIcon} />
                    Delete Promotion
                </Fab>
                {formActive ? <PromotionForm formContents= {addPromotion}/> : <span></span>}

            </div>
        </React.Fragment>

    );
}