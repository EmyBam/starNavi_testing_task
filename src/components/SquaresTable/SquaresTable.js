import React, {useState, useEffect} from "react";
import "./SquaredTable.css"
import {Col} from 'reactstrap';


const SquaresTable = (props) => {

    const [filedSize, setFieldSize] = useState([]);

    useEffect(() => {
        if (props.field && typeof props.field == 'number') {
            const fieldSizeArr = [];
            for (let i = 1; i <= props.field; i++) {
                fieldSizeArr.push(i)
            }
            setFieldSize(fieldSizeArr);
        }

    }, [props.field]);

    const onTdHover = (id) => {
        const hoveredTd = document.getElementById(id);
        if(!hoveredTd.classList.contains("blue-bcg-color")) {
            hoveredTd.classList.add("blue-bcg-color")
        } else {
            hoveredTd.classList.remove("blue-bcg-color")
        }
        props.onHover(id);
    }

    return (
        <Col>
            {
                filedSize &&
                <table>
                    <tbody>
                    {
                        filedSize.map(tr => {
                            return <tr key={tr}>
                                {
                                    filedSize.map(td => {
                                        return <td id={`r${tr}c${td}`}
                                                   key={td}
                                                   className="table-cell"
                                                   onMouseOver={() => onTdHover(`r${tr}c${td}`)}

                                        ></td>
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