import React from "react";
import "./SquaredTable.css"
import {Col} from 'reactstrap';

const BLUE_TD_CLASS = "blue-bcg-color";

const SquaresTable = (props) => {

    const onTdHover = (id) => {
        const hoveredTd = document.getElementById(id);
        if (!hoveredTd.classList.contains(BLUE_TD_CLASS)) {
            hoveredTd.classList.add(BLUE_TD_CLASS)
        } else {
            hoveredTd.classList.remove(BLUE_TD_CLASS)
        }
        props.onHover(id);
    }

    return (
        <Col>
            {
                props.fieldSize &&
                <table>
                    <tbody>
                    {
                        props.fieldSize.map((tr, index) => {
                            return <tr key={index}>
                                {
                                    props.fieldSize.map((td, index) => {
                                        return <td id={`r${tr}c${td}`}
                                                   key={index}
                                                   className="table-cell"
                                                   onMouseOver={() => onTdHover(`r${tr}c${td}`)}

                                        />
                                    })
                                }
                            </tr>
                        })
                    }
                    </tbody>
                </table>
            }
        </Col>
    )
}

export default SquaresTable;