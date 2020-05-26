import styled, { css } from 'styled-components/native';

const Button = styled.Text`
    padding: 10px;
    background-color: ${({secondary}) => secondary ? '#e6e6e6' : '#ffd829' };
    margin: 0;
    padding: 10px 15px;
    width: 200px;
    font-size: 16px;
    border: none;
    border-radius: 30px;
    font-weight: 600;
    color: #000;
    text-align: center;
    ${({secondary}) => secondary && css`
        background-color: #e6e6e6;
    `}
`;

export default Button;