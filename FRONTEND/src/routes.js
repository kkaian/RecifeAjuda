import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {Home} from './pages/home'
import {Profile} from './pages/profile'
import {Recicoins} from './pages/recicoins'
import {TelaLogin} from './pages/login';
import {Projects} from './pages/Projects'
import {Info} from './pages/info'

const Tab = createBottomTabNavigator();
var Route = false;

export function Routes() {

  
  if(Route){
    Route = false;
    return (

    <Tab.Navigator initialRouteName="Home">
        
        <Tab.Screen name="Info" component={Info} />
        <Tab.Screen name="Projects" component={Projects} />
      <Tab.Screen name="Home"
       component={Home}
        options={{
            
            headerShown:false,
        }}
      />
      <Tab.Screen name="Recicoins" component={Recicoins} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
    
  );}else{
    Route = true;
    return(<TelaLogin/>);}
}