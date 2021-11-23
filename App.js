import React from 'react';
import {createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import IndexScreen from './src/screens';
import { BlogProvider } from './src/context/BlogContext';

const navigator = createStackNavigator({
  Index: IndexScreen,
  
 },
  {
    initailRouteName: 'Index',
    defaultNatigationOptions: {
      title: 'Indec screen'
    }
 });
  
 const App = createAppContainer(navigator);

 export default () => {
  return(
    <BlogProvider>
       <App />
     </BlogProvider>
    ) 
    
 }