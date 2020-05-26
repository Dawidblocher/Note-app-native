import React from 'react';
import styled from 'styled-components/native';
import color from '../../constans/Colors';
import Button from '../../components/Atoms/Buttons/Button';
import Heading from '../../components/Atoms/Heading/Heading';
import Paragraph from '../../components/Atoms/Paragraph/Paragraph';
import { Image, View } from 'react-native';
// import Note from '../../assets/note.png';

const StyledView = styled.ScrollView`
    margin: 0 auto;
    width: 100%;
    padding: 10px 10px 0 10px;
    height: 100%;
`;
const StyledImageRight = styled(Image)`
    width: 200px;
    height: 200px;
    margin-bottom: 50px;
`
const StyledImageMid = styled(Image)`
    width: 200px;
    height: 200px;
    margin: 0 auto;
    margin-bottom: 50px;
`
const StyledImageLeft = styled(Image)`
    width: 200px;
    height: 200px;
    align-self: flex-end;
    margin-bottom: 50px;
`
const StyledButton = styled(Button)`
    margin: 10px auto 30px auto;
    background-color: ${({typeCard}) => typeCard ? color[typeCard] : color.Notes};
`

const AboutMe = (props) => {
    return (
            <StyledView>
                <View>
                    <Heading>Realizacja:</Heading>
                    <Paragraph>Dawid Blocher</Paragraph>
                    <Paragraph>numer albumu: 11528</Paragraph>
                    <Heading>Projekt:</Heading>
                    <Paragraph>Aplikacja do przechowywania notatek, twitterów oraz artykułów</Paragraph>
                </View>
                <View>
                    <StyledImageRight source={require('C:/Users/Dawid Blocher/Desktop/wsei_mobilki/react-native-note-app/src/assets/note.png')}/>
                    <StyledImageMid source={require('C:/Users/Dawid Blocher/Desktop/wsei_mobilki/react-native-note-app/src/assets/twitter.png')}/>
                    <StyledImageLeft source={require('C:/Users/Dawid Blocher/Desktop/wsei_mobilki/react-native-note-app/src/assets/article.png')}/>
                </View>
                
            </StyledView>
    );
};


export default AboutMe;