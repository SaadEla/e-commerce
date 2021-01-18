import styled, {css} from 'styled-components';

const getButtonStyles = props => {
    if(props.addstyle === "inverted"){
        return inverted
    }
    return props.addstyle === "googlesignin" ? googlesignin : defaultstyle
};

const defaultstyle = css`
    background-color: black;
    color: white;
    border: none;
    &:hover {
        background-color: white;
        color: black;
        border: 1px solid black;
    }
`;

const inverted = css`
    background-color: white;
    color: black;
    border: 1px solid black;
    &:hover{
    background-color: black;
    color: white;
    border: none;
    }
`;

const googlesignin = css`
    background-color: #4285f4;
    color: white;
    border: 1px solid #4285f4;
      }
    &:hover{
    background-color: #357ae8;
    border: 1px solid #357ae8;
    }
`;

export const CustomButtonContainer = styled.button`
    min-width: 165px;
    width: auto;
    height: 50px;
    letter-spacing: 0.5px;
    line-height: 50px;
    padding: 0 35px 0 35px;
    font-size: 15px;
    text-transform: uppercase;
    font-family: 'Open Sans Condensed';
    font-weight: bolder;
    cursor: pointer;
    display: flex;
    justify-content: center;
    ${getButtonStyles}

`;
