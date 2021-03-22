import React, {useEffect, useState} from "react";
import {Container, Row, Col} from 'reactstrap';
import ModeService from "../../services/modeService";
import ModeSelector from "../ModeSelector";
import SquaresTable from "../SquaresTable";
import HoverResults from "../HoverResults";

const modeService = new ModeService();

const App = () => {

    const [modes, setModes] = useState(null);
    const [currentMode, setCurrentMode] = useState(null);
    const [hoverHistory, setHoverHistory] = useState([])

    useEffect(() => {
        modeService.fetchModes()
            .then(data => setModes(data))
            .catch(err => console.log(err));
    }, []);

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
                    <ModeSelector modes={modes}
                                  onSubmit={(mode) => onModeChanges(mode)}

                    />
                    <SquaresTable field={currentMode && currentMode.field} onHover={(id) => getTdCoordinates(id)}/>
                </Col>
                <Col xs="3">
                    <HoverResults hoverHistory={hoverHistory}/>
                </Col>
            </Row>

        </Container>
    );
}

export default App;
