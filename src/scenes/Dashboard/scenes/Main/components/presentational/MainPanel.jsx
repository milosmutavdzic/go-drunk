import React from 'react';
import Typography from '@material-ui/core/Typography';
import SimpleLineChart from './SimpleLineChart.jsx';
import SimpleTable from './SimpleTable.jsx';
import PropTypes from 'prop-types';

export const MainPanel = (props) => {
    let {classes} = props;
    return (
        <div>
            <Typography variant="h5" gutterBottom component="h2">
                Orders
            </Typography>
            <Typography component="div" className={classes.chartContainer}>
                <SimpleLineChart />
            </Typography>
            <Typography variant="h5" gutterBottom component="h2">
                Products
            </Typography>
            <div className={classes.tableContainer}>
                <SimpleTable />
            </div>
        </div>
    )
}

MainPanel.propTypes = {
    classes: PropTypes.object
}
