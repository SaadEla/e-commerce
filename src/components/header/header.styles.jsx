import styled, {css} from 'styled-components';
import { Link } from 'react-router-dom';


const OneOptionContainerStyle = css`
    color: black;
    text-decoration: none;
    padding: 10px 15px;
    cursor: pointer;
    &:hover{
        color: black;
        text-decoration: none;   
    }
`;

export const OptionLink = styled(Link)`
${OneOptionContainerStyle}
`;

export const OptionDiv = styled.div`
${OneOptionContainerStyle}
`;

export const HeaderContainer = styled.div `
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
    align-items: center;
`;

export const LogoContainer = styled(Link)`
    height: 100%;
    width: 70px;
    padding: 25px;  
`;
export const OptionsContainer = styled.div `
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

