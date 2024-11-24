# Location Search App

This mobile application built using [React Native with Expo Framework](https://docs.expo.dev/get-started/create-a-project/)

#### Requirements

- node.js v22.11.0+
- npm v10.9.0+
- Android Studio / Xcode (if using emulator)

#### Environment Setup

Follow this [guide](https://docs.expo.dev/get-started/set-up-your-environment/) to setup the environment in order to run the project.

#### Getting started

1. Clone the repository in your local machine.
2. Make sure you are in the project's root directory.
3. Run `npm install`.
4. After installation complete, run `npm start` to start a development server.
5. (iOS) Press `i` key to start the app in iOS simulator.
6. (Android) Start the Android emulator from Android Studio, the press `a` key to start the app.

## Best practices

#### IDE

- Recommended to use [VS Code](https://code.visualstudio.com/) to advocate developer standardization.
- Use [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) to guarantee consistent styling. Follow this [guide](https://www.digitalocean.com/community/tutorials/how-to-format-code-with-prettier-in-visual-studio-code) for configuration.
- Please make sure your editor has **Format on save** functionality, and that you use it.

#### Coding style

- Look at existing components / code structure and try to keep it similar.
- Code consistency is very important, so please abide by existing naming conventions.

## Important Remarks

- The location search results data is a mock data due to [Google Place Autocomplete API](https://developers.google.com/maps/documentation/places/web-service/autocomplete) is required to enable payment method to get the API key.
- The provided [Ant Design](https://ant.design/components/overview) reference is for React application, so another similar alternative called [Ant Design Mobile RN of React](https://rn.mobile.ant.design/docs/react/introduce) has been used for the UI components.
- Don't be panic if the Map Marker is not rendering in Android emulator randomly, this issue is related to latest expo framwork. For more info: https://github.com/react-native-maps/react-native-maps/issues/5161
- Reminder for simulator with iOS 16 or above, you might face app reload issue when pressing `r` key, this issue is also related to latest expo framwork. For more info: https://www.reddit.com/r/reactnative/comments/yzj9rr/expo_app_reloads_whenever_r_key_pressed_in/?rdt=41685
