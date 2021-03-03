// In App.js in a new project

import * as React from 'react';
import { View, Text, TouchableOpacity,Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { createDrawerNavigator, DrawerItemList } from '@react-navigation/drawer';
import Icon from "react-native-vector-icons/FontAwesome"
import s from './style'


function HomeScreen(props) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 20 }}>Home Screen</Text>
      <TouchableOpacity style={{
        marginTop: 20, width: 200,
        height: 50, backgroundColor: '#ff5204', padding: 10,
        alignItems: 'center', borderRadius: 5
      }}
        onPress={() => props.navigation.navigate('Perfil')} >
        <Text style={{ color: '#fff', fontSize: 20 }}>Ir a perfil</Text>
      </TouchableOpacity>
    </View>
  );
}
function PerfilScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 20 }}>Perfil Screen</Text>
    </View>
  );
}
function ListScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 20 }}>My Listings</Text>
    </View>
  );
}
function ForumsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 20 }}>Forums</Text>
    </View>
  );
}
function SettingsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 20 }}>Settings</Text>
    </View>
  );
}
function HelpScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 20 }}>Help</Text>
    </View>
  );
}
function LoScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 20 }}>Logout</Text>
    </View>
  );
}
function DrawerMenu(props){
  return(
    <TouchableOpacity onPress={props.navigation}>
      <View style={s.menuContainer}>
        <View style={s.iconoContainer}>
            <Icon size={17} name={props.iconName}/>
        </View>
        <View style={s.tituloContainer}>
            <Text style={s.tituloTxt}>{props.titleName}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

function Menu(props){
  return(
    <View style={s.container}>
      <View style={s.bgContainer}>
        <TouchableOpacity>
          <View style={s.userContainer}>
            <Image style={s.userImagen} source={require('./1.png')}/> 
            <View>
                <Image style={s.camaraIcon} source={require('./photo-camera.png')}/>
            </View>
          </View>
          <View style={s.userNombre}>
              <Text style={s.userTitulo}>USER </Text>
              <Text style={s.userSubTitulo}> Ver Perfil</Text>
          </View>
        </TouchableOpacity>

      </View>
     <DrawerMenu iconName='home'
      titleName='Home'navigation={()=>props.navigation.navigate('Home')}/>
     <DrawerMenu iconName='user' titleName='Perfil'
     navigation={()=>props.navigation.navigate('Perfil')}/>
     <DrawerMenu iconName='list-ul' titleName='My Listings'
     navigation={()=>props.navigation.navigate('My Listings')}/>
     <DrawerMenu iconName='comments' titleName='Forums'
     navigation={()=>props.navigation.navigate('Forums')}/>
     <DrawerMenu iconName='cogs' titleName='Settings'
     navigation={()=>props.navigation.navigate('Settings')}/>

     <DrawerMenu iconName='question' titleName='Help'
     navigation={()=>props.navigation.navigate('Help')}/>
     <DrawerMenu iconName='arrow-right' titleName='Logout'
     navigation={()=>props.navigation.navigate('Logout')}/>

    </View>
  )
}

// const Stack = createStackNavigator();

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={(props)=> <Menu{...props}/>}>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Perfil" component={PerfilScreen} />
        <Drawer.Screen name="My Listings" component={ListScreen} />
        <Drawer.Screen name="Forums" component={ForumsScreen} />
        <Drawer.Screen name="Settings" component={SettingsScreen} />
        <Drawer.Screen name="Help" component={HelpScreen} />
        <Drawer.Screen name="Logout" component={LoScreen} />
      </Drawer.Navigator>
    </NavigationContainer>

  );
}

export default MyDrawer