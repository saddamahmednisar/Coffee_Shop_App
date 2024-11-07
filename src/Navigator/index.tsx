import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Delivery_Payment from '../Screens/Delivery_Payment';
import Detail from "../Screens/Detail";
import BottomTab from './BottomNavigator';
import DrawerNavigator from './DrawerNavigator';

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  return (
    <Stack.Navigator initialRouteName='Drawer'>
       <Stack.Screen name="Drawer" component={DrawerNavigator} options={{ headerShown: false }}/>  
      <Stack.Screen name="Detail" component={Detail} options={{ headerShown: false }}/>
      <Stack.Screen name="Delivery_Payment" component={Delivery_Payment} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}
export default MainNavigator
