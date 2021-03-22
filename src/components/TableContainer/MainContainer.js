import React, {useEffect, useState} from "react";
import {Container, Row, Col} from 'reactstrap';
import ModeSelector from "../ModeSelector";
import SquaresTable from "../SquaresTable";
import HoverResults from "../HoverResults";

const MainContainer = (props) => {

    const [fieldSize, setFieldSize] = useState([]);
    const [currentMode, setCurrentMode] = useState(null);
    const [hoverHistory, setHoverHistory] = useState([])

    useEffect(() => {
        if (currentMode && currentMode.field && typeof currentMode.field == 'number') {
            setFieldSize([]);
            const fieldSizeArr = [];
            for (let i = 1; i <= currentMode.field; i++) {
                fieldSizeArr.push(i)
            }
            setFieldSize(fieldSizeArr);
        }

    }, [currentMode]);

    const onModeChanges = (mode) => {
        setCurrentMode(mode);
        setHoverHistory([]);
    }

    const getTdCoordinates = (id) => {
        const hoveredCell = document.getElementById(id);
        const col = hoveredCell.cellIndex + 1;
        const row = hoveredCell.parentNode.rowIndex + 1;
        setHoverHistory([...hoverHistory, {col, row}]);
    }

    return (
        <Container className="m-3">
            <Row>
                <Col xs="9">
                    <ModeSelector modes={props.modes}
                                  onSubmit={(mode) => onModeChanges(mode)}

                    />
                    <SquaresTable fieldSize={fieldSize} onHover={(id) => getTdCoordinates(id)}/>
                </Col>
                <Col xs="3">
                    <HoverResults hoverHistory={hoverHistory}/>
                </Col>
            </Row>

        </Container>
    );
}

export default MainContainer;
