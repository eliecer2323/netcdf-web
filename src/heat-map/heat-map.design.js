import React from 'react';
import ReactHeatmap from './react-heatmap';

const HeatMapDesign = (props) => {
    const {
        currentData,
        isChart
    } = props;


    if (currentData && currentData[0].length && isChart) {
        var data = [];
        for (let x = 0; x < currentData.length; x++) {
            for (let y = 0; y < currentData[x].length; y++) {
                data.push({ x, y, value: currentData[x][y] });
            }
        }

        return (
            <div style={styles.container}>
                <ReactHeatmap max={5} data={{ data: data, max: 1000 }} style={styles.container} />
            </div>
        );
    } else {
        return null;
    }
}

const styles = {
    container: {
        marginTop: 50,
        width: '100%',
        height: 800
    }
}

export default HeatMapDesign;
