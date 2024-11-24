import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import HomeScreen from '@screens/HomeScreen'
import SearchedHistoryScreen from '@screens/SearchedHistoryScreen'

const Stack = createNativeStackNavigator()

const screens = [
  {
    name: 'Home',
    component: HomeScreen,
    options: {
      title: 'Home',
      headerShown: false,
    },
  },
  {
    name: 'SearchedHistory',
    component: SearchedHistoryScreen,
    options: {
      title: 'Searched History',
      backButton: {
        visible: true,
      },
    },
  },
]

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {screens.map((screen, index) => (
          <Stack.Screen
            key={`screen-${index}`}
            name={screen.name}
            component={screen.component}
            options={screen.options}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator
