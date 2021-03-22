import React, {useEffect, useState} from "react";

const HoverResults = (props) => {

    const [hoverHistory, setHoverHistory] = useState([]);

    useEffect(() => {
        if (props.hoverHistory) {
            setHoverHistory(props.hoverHistory);
        }

    }, [props.hoverHistory])

    return (
        <div>
            <h5>Hover squares</h5>
            {
                (hoverHistory && hoverHistory.length > 0) &&
                hoverHistory.map((item, index) => {
                    return <p className="warning"
                              key={index}
                    >
                        {`row ${item.row} col ${item.col}`}
                    </p>
                })
            }
        </div>
    )
}

export default HoverResults;