import React, { Fragment } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';

const TableDesign = (props) => {
    const {
        variables,
        selectedVariable,
        onSelectionChange,
        onViewData,
        currentData
    } = props;

    let footer = (selectedVariable ?
        <div style={styles.footer}>
            <Button label="Ver Datos" icon="pi pi-search-plus" onClick={onViewData} />
            <Button label="Ver Gráfico" icon="pi pi-chart-line" onClick={onViewData} />
        </div> :
        null
    );
    
    return (
        <Fragment>
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
            <span>
                {currentData}
            </span>
        </Fragment>
        );
    }

    const styles = {
        footer: {
            width: '100%',
            display: 'flex',
            justifyContent: 'space-evenly'
        }
    }
    
    export default TableDesign;
