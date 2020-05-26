import React from 'react';
import styled from 'styled-components/native';
import { connect } from 'react-redux';

import color from '../../constans/Colors';
import Card from '../../components/molecules/Card/Card'
import Button from '../../components/Atoms/Buttons/Button';

import { useNavigation } from '@react-navigation/native';

const StyledView = styled.ScrollView`
    margin: 0 auto;
    width: 100%;
    padding:10px 10px 0 10px;
`;

const StyledButton = styled(Button)`
    margin: 10px auto 30px auto;
    background-color: ${({typeCard}) => typeCard ? color[typeCard] : color.Notes};
`

const Notes = (props) => {
    
    const NotesCards = props.Notes.map(note => <Card key={note.id} id={note.id} typeCard={note.typeCard} title={note.title} content={note.content}/> )
    return (
        <StyledView>           
            {NotesCards}
            <StyledButton typeCard={props.route.name} onPress={() => {
                    props.navigation.navigate('AddPage', {typeCard: props.route.name, lastId: NotesCards.length})}}>Dodaj nową notatkę</StyledButton>
        </StyledView>
    );
};

const mapStateToProps = (state) => {
    return {Notes: state.example.Notes}
}

export default connect(mapStateToProps)(function(props) {
    const navigation = useNavigation();
    return <Notes {...props} navigation={navigation} />;
  });
