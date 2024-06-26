import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ThemeProvider } from 'styled-components/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

// Importing Screens
import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen';
import MyCardScreen from './screens/MyCardScreen';
import StatisticsScreen from './screens/StatisticsScreen';
import { lightTheme, darkTheme } from './themes';

const Tab = createBottomTabNavigator();

const App = () => {
  const [theme, setTheme] = useState(lightTheme);

  useEffect(() => {
    const loadTheme = async () => {
      const savedTheme = await AsyncStorage.getItem('theme');
      if (savedTheme) {
        setTheme(savedTheme === 'light' ? lightTheme : darkTheme);
      }
    };
    loadTheme();
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === lightTheme ? darkTheme : lightTheme;
    setTheme(newTheme);
    AsyncStorage.setItem('theme', newTheme === lightTheme ? 'light' : 'dark');
  };

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer
        theme={{
          dark: theme === darkTheme,
          colors: {
            background: theme.background,
            card: theme.tabBarBackground,
            text: theme.text,
            border: theme.tabBarBackground,
            primary: theme.tabBarActiveTintColor,
          },
        }}
      >
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
              let iconName;

              if (route.name === 'Home') {
                iconName = 'home';
              } else if (route.name === 'Settings') {
                iconName = 'settings';
              } else if (route.name === 'My Card') {
                iconName = 'credit-card';
              } else if (route.name === 'Statistics') {
                iconName = 'bar-chart';
              }

              return <Icon name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: theme.tabBarActiveTintColor,
            tabBarInactiveTintColor: theme.tabBarInactiveTintColor,
            tabBarStyle: {
              backgroundColor: theme.tabBarBackground,
            },
          })}
        >
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="My Card" component={MyCardScreen} />
          <Tab.Screen name="Statistics" component={StatisticsScreen} />
          <Tab.Screen name="Settings">
            {(props) => <SettingsScreen {...props} toggleTheme={toggleTheme} />}
          </Tab.Screen>
        </Tab.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;