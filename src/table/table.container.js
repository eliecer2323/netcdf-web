import React, { useState, useEffect } from 'react';
import TableDesign from './table.design';

const TableContainer = (props) => {

    const [variables, setVariables] = useState([]);
    const [selectedVariable, setSelectedVariable] = useState(null);
    const [currentData, setCurrentData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/data/all').then((response) => {
            return response.json();
        }).then((body) => {
            const mappedVariables = body.map(x => (
                {
                    dataType: x[0],
                    description: x[1],
                    dimensions: x[2],
                    name: x[3],
                    shape: x[4],
                    units: x[5]
                }
            ));
            setVariables(mappedVariables);
        }).catch(error => {
            console.log(error);
        });
    }, []);

    const onSelectionChange = ({value}) => {
        setSelectedVariable(value);
    }

    const onViewData = () => {
        fetch(`http://localhost:8080/data/variable/${selectedVariable.name}`).then((response) => {
            return response.json();
        }).then((body) => {
            setCurrentData(body);
        }).catch(error => {
            console.log(error);
        });
    }

    return (
        <TableDesign
            variables={variables}
            selectedVariable={selectedVariable}
            onSelectionChange={onSelectionChange}
            onViewData={onViewData}
            currentData={currentData}
        />
    );
}

export default TableContainer;
