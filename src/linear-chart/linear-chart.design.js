import React from 'react';
import { Chart } from 'primereact/chart';

const LinearChartDesign = (props) => {
    const {
        currentData,
        selectedVariable,
        isChart
    } = props;

    if (currentData && !currentData[0].length && isChart) {
        const data = {
            labels: currentData.map((elem, i) => i),
            datasets: [
                {
                    label: selectedVariable.description,
                    data: currentData,
                    fill: false,
                    borderColor: '#4bc0c0'
                }
            ]   
        };

        return (
            <div style={styles.margin}>
                <Chart type="line" data={data} />
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

export default LinearChartDesign;
