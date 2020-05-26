import React, { useCallback } from 'react';
import { Linking, Alert, Image } from 'react-native';
import styled from 'styled-components/native';

import color from '../../constans/Colors';

import Heading from '../../components/Atoms/Heading/Heading';
import Paragraph from '../../components/Atoms/Paragraph/Paragraph';

import Button from '../../components/Atoms/Buttons/Button';


const StyledView = styled.ScrollView`
    margin: 0 auto;
    width: 100%;
    padding:50px 10px 0px 10px;
    
`;

const StyledButton = styled(Button)`
    background-color: ${({typeCard}) => (typeCard ? color[typeCard] : 'blue')};
    margin: 30px auto 80px auto;
`
const StyledImage = styled(Image)`
    width: 200px;
    height: 200px;
    margin: 0 auto;
    border-radius: 200px;
    margin-bottom: 50px;
`

const Post = props => {
    const {route} = props;
    const OpenURLButton = ({ url, children }) => {
        const handlePress = useCallback(async () => {
          const supported = await Linking.canOpenURL(url);
          if (supported) {
            await Linking.openURL(url);
          } else {
            Alert.alert(`Don't know how to open this URL: ${url}`);
          }
        }, [url]);
        return <StyledButton title={children} onPress={handlePress} typeCard={route.params.typeCard}>{(route.params.typeCard === 'Twitters' ? 'Open Twitter' : 'Open Link')}</StyledButton>;
    };
    return (
        <StyledView>
            {(route.params.typeCard === 'Twitters' ? <StyledImage source={{uri: `https://avatars.io/twitter/${route.params.twitterName}`}}/> : null)}
            <Heading>{route.params.title}</Heading>
            <Paragraph>{route.params.content}</Paragraph>
            {(route.params.link ? <OpenURLButton url={route.params.link}></OpenURLButton> : null)}
        </StyledView>
    );
};

export default Post;