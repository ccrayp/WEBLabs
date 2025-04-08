import './index.css'
import styled from 'styled-components'

const StyledDiv = styled.div`
    /*position: absolute;*/
    margin-top: 10px;
    margin-left: 10px;
`

export default function ToMain() {
    return (
        <StyledDiv>
            <a href="../../index.html"><button>В меню</button></a>
        </StyledDiv>
    )
}