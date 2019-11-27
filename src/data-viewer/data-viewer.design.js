import React from 'react';

const DataViewerDesign = (props) => {
    const {
        currentData
    } = props;

    if (currentData) {
        return (
            <div style={styles.margin}>
                <h1>Datos</h1>
                <div style={styles.dataContainer}>
                    {JSON.stringify(currentData)}
                </div>
            </div>
        );
    } else {
        return null;
    }
}

const styles = {
    margin: {
        marginTop: 50
    },
    dataContainer: {
        display: 'flex',
        overflow: 'auto',
        height: 600
    }
}

export default DataViewerDesign;
