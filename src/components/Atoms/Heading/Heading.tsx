import styled from 'styled-components/native';

const Heading = styled.Text`
    font-weight: 700;
    font-size: ${({ theme, big }) => (big ? "40px" : '18px')};
    margin: 7px 0;
`

export default Heading;