import React, {useEffect, useState} from "react";
import ModeService from "../../services/modeService";
import MainContainer from "../TableContainer";

const modeService = new ModeService();

const App = () => {

    const [modes, setModes] = useState(null);

    useEffect(() => {
        modeService.fetchModes()
            .then(data => setModes(data))
            .catch(err => console.log(err));
    }, []);


    if(!modes) {
        return <h5>Loading...</h5>
    }

    return <MainContainer modes={modes}/>


}

export default App;
