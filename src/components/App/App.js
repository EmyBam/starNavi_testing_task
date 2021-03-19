import React, {Fragment, useEffect, useState} from "react";
import ModeService from "../../services/modeService";
import ModeSelector from "../ModeSelector";

const modeService = new ModeService();

const App = (props) => {

    const [modes, setModes] = useState(null);

    useEffect(() => {
        modeService.fetchModes()
            .then(data => setModes(data))
            .catch(err => console.log(err));
    }, []);

    const onModeSelect = (mode) => {
        console.log(mode)
    }


    return (
      <Fragment>
          <ModeSelector modes={modes} onModeSelect={(mode) => onModeSelect(mode)}/>
      </Fragment>
    );
}

export default App;
