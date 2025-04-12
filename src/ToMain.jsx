import './index.css'
import styled from 'styled-components'
import {Link} from "react-router";

const StyledDiv = styled.div`
    margin-top: 10px;
    margin-left: 10px;
    margin-bottom: 10px;
`

export default function ToMain() {
    return (
        <StyledDiv>
            <Link to="/"><button>В меню</button></Link>
        </StyledDiv>
    )
}