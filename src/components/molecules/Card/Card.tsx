import styled from 'styled-components/native';
import * as React from 'react';
import Heading from '../../Atoms/Heading/Heading';
import Paragraph from '../../Atoms/Paragraph/Paragraph';
import Button from '../../Atoms/Buttons/Button';
import { Image } from 'react-native';
import {connect} from 'react-redux';
import {removeItem} from '../../../actions/index';

import { useNavigation } from '@react-navigation/native';

import Link from '../../../assets/icons/link.svg';
import colors from '../../../constans/Colors';

const WraperCard = styled.View`
    width: 100%;
    margin: 10px auto;
    
`

const TitleWrap = styled.TouchableOpacity`
    width:100%;
    background-color: ${({typeCard}) => (typeCard  ? colors[typeCard] : 'blue')};
    padding: 10px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    position: relative;
`

const ContentWrap = styled.View`
    background-color: #fff;
    padding: 10px;
`;

const StyledButton = styled(Button)`
    margin-top: 20px;
`
const StyledImage = styled(Image)`
    width: 30px;
    height: 30px;
    position: absolute;
    top: 50%;
    right: 10px;
    border-radius: 50px;
    transform: translateY(-3px);
`
const StyledLinkSvg = styled(Link)`
    width: 30px;
    height: 30px;
    position: absolute;
    top: 50%;
    right: 10px;
    border-radius: 50px;
    transform: translateY(-3px);
    background-color: #fff;
    padding: 14px;
`


const Card = props => {
    const { id, title, content, typeCard, navigation, removeItem, twitterName, link } = props;
    return (
            <WraperCard>
                <TitleWrap  typeCard={typeCard} activeOpacity={1} onPress={() => {
                    navigation.navigate('Post', {title: title, content: content, typeCard: typeCard, twitterName: twitterName, link: link})}}>
                    <Heading >{title}</Heading>
                    {(typeCard === 'Twitters' && <StyledImage source={{uri: `https://avatars.io/twitter/${twitterName}`}}/>)}
                    {(typeCard === 'Articles' && <StyledLinkSvg />)}
                </TitleWrap >
                <ContentWrap>
                    <Paragraph numberOfLines={8}>{content}</Paragraph>
                    <StyledButton secondary onPress={() => removeItem(typeCard, id)}>remove</StyledButton>
                </ContentWrap>
            </WraperCard>
        )
}

const mapDispatchToProps = (dispatch) => ({
    removeItem: (itemType, id) => dispatch(removeItem(itemType, id)),
})

export default connect(null, mapDispatchToProps)(function(props) {
    const navigation = useNavigation();
    return <Card {...props} navigation={navigation} />;
  })