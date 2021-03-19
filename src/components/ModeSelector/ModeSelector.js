import React, {useEffect, useState} from "react";
import Select from 'react-select';


const ModeSelector = (props) => {

    const [modes, setModes] = useState(null);
    const [selectedMode, setSelectedMode] = useState();

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
    },[props.modes]);

    const onSelect = (selectedMode) => {
        setSelectedMode(selectedMode);
        props.onModeSelect(selectedMode.value)
    }

    return (
        <Select
            value={selectedMode}
            onChange={(selectedMode) => onSelect(selectedMode)}
            options={modes}
            defaultValue={{label: "Pick mode", value: 0}}
        />
    )
}

export default ModeSelector;
