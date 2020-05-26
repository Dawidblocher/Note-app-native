import React from 'react';
import styled from 'styled-components/native';
import { connect } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import color from '../../constans/Colors';

import Button from '../../components/Atoms/Buttons/Button';
import Card from '../../components/molecules/Card/Card'

const StyledView = styled.ScrollView`
    margin: 0 auto;
    width: 100%;
    padding:10px 10px 0 10px;
    height: 100%;
`;

const StyledButton = styled(Button)`
    margin: 10px auto 30px auto;
    background-color: ${({typeCard}) => typeCard ? color[typeCard] : color.Notes};
`

const Twitters = props => {
    const TwittersCards = props.Twitters.map(twitters => <Card key={twitters.id} link={twitters.link} twitterName={twitters.twitterName} id={twitters.id} typeCard={twitters.typeCard} title={twitters.title} content={twitters.content}/> )
    return (
        <StyledView>
            {TwittersCards}
            <StyledButton typeCard={props.route.name} onPress={() => {
                    props.navigation.navigate('AddPage', {typeCard: props.route.name, lastId: TwittersCards.length})}}>Dodaj nową notatkę</StyledButton>
        </StyledView>
    );
};

const mapStateToProps = (state) => {
    return {Twitters: state.example.Twitters}
}

export default connect(mapStateToProps)(function(props) {
    const navigation = useNavigation();
    return <Twitters {...props} navigation={navigation} />;
  });
