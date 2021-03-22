import React from "react";
import "./SquaredTable.css"
import {Col} from 'reactstrap';


const SquaresTable = (props) => {

    const onTdHover = (id) => {
        const hoveredTd = document.getElementById(id);
        if (!hoveredTd.classList.contains("blue-bcg-color")) {
            hoveredTd.classList.add("blue-bcg-color")
        } else {
            hoveredTd.classList.remove("blue-bcg-color")
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