import React from 'react';
import styled from 'styled-components/native';
import {View} from 'react-native';
import { connect } from 'react-redux';
import { addItem as addItemAction} from '../../actions/index';
import { Formik } from 'formik';
import color from '../../constans/Colors';
import Button from '../../components/Atoms/Buttons/Button'; 

const StyledView = styled.ScrollView`
    margin: 0 auto;
    width: 100%;
    padding: 10px 10px 0 10px;
    height: 100%;
`;

const StyledButton = styled(Button)`
    background-color: ${({typeCard}) => typeCard ? color[typeCard] : color.Notes};
    margin: 0 auto;
`;
const StyledInput = styled.TextInput`
    padding: 10px 25px;
    border: 1px solid #000;
    margin: 10px 0;
    border-radius: 30px;
`
const AddPage = (props) => {
    const typeCard = props.route.params.typeCard;
    const lastId = props.route.params.lastId;
    const {addItem} = props;

    return (
            <StyledView>
                <Formik
                    initialValues={{ type: '', title: '', content: '', twitterName: '', link: '' }}
                    onSubmit={(value) => {
                        addItem(typeCard ,{
                            id: lastId +1,
                            typeCard: typeCard,
                            title: value.title,
                            content: value.content,
                            twitterName: value.twitterName,
                            link: value.link
                        }) 
                        alert('dodano')
                    }}
                >
                    {(props) => (
                        <View>
                            <StyledInput 
                                placeholder="Title"
                                onChangeText={props.handleChange('title')}
                                value={props.values.title}
                            />
                            <StyledInput
                                multiline
                                placeholder="Content"
                                onChangeText={props.handleChange('content')}
                                value={props.values.content}
                            />
                            {(typeCard === 'Twitters' ? <StyledInput
                                multiline
                                placeholder="Twitter name"
                                onChangeText={props.handleChange('twitterName')}
                                value={props.values.twitterName}
                            /> : null)}
                            {(typeCard === 'Articles' || typeCard === 'Twitters'? <StyledInput
                                multiline
                                placeholder="Link"
                                onChangeText={props.handleChange('link')}
                                value={props.values.link}
                            /> : null)}
                            <StyledButton typeCard={typeCard} title="dodaj" onPress={props.handleSubmit}>Dodaj</StyledButton>
                        </View>
                    )}
                </Formik>
            </StyledView>
    );
};

const mapDispatchToProps = dispatch => ({
    addItem: (itemType, itemContent) => dispatch(addItemAction(itemType, itemContent)),
})

export default connect(null, mapDispatchToProps)(AddPage);