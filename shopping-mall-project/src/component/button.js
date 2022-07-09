import styled from 'styled-components';

let Btn = styled.button`
    width: 15%;
    height: 38px;
    border: 0px solid white;
    color: ${ props => props.bg == '#dc3545' ? 'white' : 'black'};
    border-radius: 6px;
    background-color: ${ props => props.bg };
`;

export default Btn;