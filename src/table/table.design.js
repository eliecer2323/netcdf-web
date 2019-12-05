import React from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import DataViewerDesign from '../data-viewer/data-viewer.design';
import LinearChartDesign from '../linear-chart/linear-chart.design';
import HeatMapDesign from '../heat-map/heat-map.design';

const TableDesign = (props) => {
    const {
        variables,
        selectedVariable,
        onSelectionChange,
        onViewData,
        onViewChart,
        isChart,
        currentData
    } = props;

    let footer = (selectedVariable ?
        <div style={styles.footer}>
            <Button label="Ver Datos" icon="pi pi-search-plus" onClick={onViewData} />
            <Button label="Ver Gráfico" icon="pi pi-chart-line" onClick={onViewChart} />
        </div> :
        null
    );
    
    return (
        <div style={styles.container}>
            <DataTable
                value={variables}
                selectionMode="single"
                selection={selectedVariable}
                onSelectionChange={onSelectionChange}
                footer={footer}
            >
                <Column field="dataType" header="Data Type" />
                <Column field="description" header="Description" />
                <Column field="dimensions" header="Dimensions" />
                <Column field="name" header="Name" />
                <Column field="shape" header="Shape" />
                <Column field="units" header="Units" />
            </DataTable>
            <LinearChartDesign
                currentData={currentData}
                selectedVariable={selectedVariable}
                isChart={isChart}
            />
            <HeatMapDesign
                currentData={currentData}
                isChart={isChart}
            />
            <DataViewerDesign
                currentData={currentData}
                selectedVariable={selectedVariable}
            />
        </div>
        );
    }

    const styles = {
        footer: {
            width: '100%',
            display: 'flex',
            justifyContent: 'space-evenly'
        },
        container: {
            width: '100%',
            paddingLeft: '10%',
            paddingRight: '10%'
        }
    }
    
    export default TableDesign;
