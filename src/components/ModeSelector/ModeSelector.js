import React, {useEffect, useState} from "react";
import "./ModeSelector.css"
import {Col, Button, Alert} from 'reactstrap';
import Select from 'react-select'

const ModeSelector = (props) => {

    const [modes, setModes] = useState(null);
    const [selectedOption, setSelectedOption] = useState(null);
    const [alert, setAlert] = useState(false);

    useEffect(() => {
        if (props.modes && props.modes.length) {
            const options = props.modes.map(item => {
                return {
                    value: item.modeName,
                    label: item.modeName.charAt(0).toUpperCase() + item.modeName.slice(1)
                }
            });
            setModes(options);
        }
    }, [props.modes]);

    const onSelect = (selectedOption) => {
        setSelectedOption(selectedOption);
    }

    const onSubmit = () => {
        if (selectedOption) {
            const selectedMode = props.modes.find(item => item.modeName === selectedOption.value);
            props.onSubmit(selectedMode);
            setAlert(false)
        } else {
            setAlert(true)
        }
    }

    return (
        <div className="d-flex mb-3">
            <Col xs="4">
                {
                    modes &&
                    <Select
                        value={selectedOption}
                        onChange={(selectedOption) => onSelect(selectedOption)}
                        options={(modes && modes.length) && modes}
                    />
                }
            </Col>

            <Button color="primary" onClick={() => onSubmit()}>
                Start
            </Button>
            {
                alert &&
                <Alert className="alert" color="danger">
                    Please, choose an option!
                </Alert>
            }
        </div>
    )
}

export default ModeSelector;
