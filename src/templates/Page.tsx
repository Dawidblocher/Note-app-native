import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Notes from  '../screens/Notes/Notes';
import Twitters from  '../screens/Twitters/Twitters';
import Post from  '../screens/Post/Post';
import Articles from '../screens/Articles/Articles';
import AddPage from '../screens/AddPage/AddPage';

import color from '../constans/Colors';
import AboutMe from '../screens/AboutMe/AboutMe';

const Stack = createStackNavigator();
const views = {
    Notes: Notes,
    Twitters: Twitters,
    Articles: Articles,
    About: AboutMe,
}
const Page = (props) => {
    return (
            <Stack.Navigator>
                <Stack.Screen name={props.route.name} component={views[props.route.name]} options={({ route }) => ({headerStyle: {
                    backgroundColor: color[props.route.name]
                }})}/>
                <Stack.Screen name="Post" component={Post}  options={({ route }) => ({ title: props.route.name,
                headerStyle: {
                    backgroundColor: color[route.params.typeCard],
                  }, })} />   
                  <Stack.Screen name="AddPage" component={AddPage}  options={(route) => ({ 
                headerStyle: {
                    backgroundColor: color[props.route.name]
                  }, })} />  
            </Stack.Navigator>
        
    );
};

export default Page;