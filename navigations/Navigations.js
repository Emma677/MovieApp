import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import Profile from "../screens/Profile";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from "@react-navigation/native";
import Place from "../screens/Place";

const HomeStack = createNativeStackNavigator()
const ProfileStack = createNativeStackNavigator()


const HomeStackScreen = () => {
    return(
        <HomeStack.Navigator>
            <HomeStack.Screen name="Home" component={Home} options={{title:''}}/>
            <HomeStack.Screen name="Place" component={Place} />
        </HomeStack.Navigator>
    )
}

const ProfileStackScreen = () => {
    return(
        <ProfileStack.Navigator>
            <ProfileStack.Screen name="Profile" component={Profile}/>
        </ProfileStack.Navigator>
    )
}


const Tab = createBottomTabNavigator();

function BottNav (){
    return(
        <NavigationContainer>
             <Tab.Navigator>
            <Tab.Screen name="HomeScreen" component={HomeStackScreen}
             options={{
                    tabBarLabel:'Home',
                    tabBarLabelStyle: {color:'blue'},
                    headerShown: false,
                    tabBarIcon: ({ focused }) =>
                    focused ? (<Ionicons name="home" size={24} color="black" />) :
                     (
                        <Ionicons name="home-outline" size={24} color="black" />
                    )
            }}/>

            <Tab.Screen name="ProfileScreen" component={ProfileStackScreen}
             options={{
                    tabBarLabel:'Profile',
                    tabBarLabelStyle: {color:'blue'},
                    headerShown: false,
                    tabBarIcon: ({ focused }) =>
                    focused ? (<Ionicons name="person" size={24} color="black" />) :
                     (
                        <Ionicons name="person-outline" size={24} color="black" />
                    )
            }}/>
        </Tab.Navigator>
        </NavigationContainer>
       
    )
}

export default BottNav