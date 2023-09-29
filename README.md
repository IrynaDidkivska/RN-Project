# React Native Social Media App

Welcome to this React Native Social Media App! Dive into a world where sharing, commenting, and liking photos is seamless. Crafted with React Native, our app brings you closer to your connections on the go.

## Table of Contents

1. [Features](#features)
2. [Technologies Used](#technologies-used)
3. [Installation](#installation)

## Features

This social media app offers the following notable features:

1. **Registration and Login**:

   - New users can sign up.
   - Existing users can effortlessly log in to access their personalized content.

   ![Registration Screenshot](/images/reg.jpg)

2. **Photo Upload**:

   - Share your moments by uploading photos from your device.

   ![Upload Screenshot](/images/addpost.jpg)

3. **Commenting**:

   - Engage with posts by leaving your thoughts and reading others'.

   ![Comment Screenshot](/images/comment.jpg)

4. **Liking**:

   - Show appreciation for shared content with a simple tap.

## Technologies Used

The foundation of our project rests on these technologies and libraries:

- [**Expo**](https://expo.dev/): A framework that facilitates React Native development.
- [**React Native**](https://reactnative.dev/): The core library to build the mobile app interface.
- [**Firebase**](https://firebase.google.com/): Powers our backend for robust user management, storage, and real-time data.
- [**react-hook-form**](https://react-hook-form.com/): Assists in efficient form management.
- [**react-native-maps**](https://github.com/react-native-maps/react-native-maps): Provides map functionality for location-based features.
- [**redux-persist**](https://github.com/rt2zz/redux-persist): Ensures consistent state persistence across app restarts.
- [**react-redux**](https://react-redux.js.org/): Bridges the gap between Redux and React Native.
- [**expo-image-picker**](https://docs.expo.dev/versions/latest/sdk/imagepicker/): Facilitates image picking capabilities within the app.
- [**expo-location**](https://docs.expo.dev/versions/latest/sdk/location/): Used for fetching device location information.

During the course of the project, Android Studio and Xcode were used extensively to ensure the app's performance and compatibility across both Android and iOS platforms.

## Installation

### Emulator (virtual device)

If you're new to Android Emulators, start by reviewing the [Android Studio emulator guide](https://developer.android.com/studio/run/emulator).

#### Automatic Installation:

- Once your build finishes, the CLI will automatically offer to download and install the build onto the Android Emulator. When you're prompted, press `Y` to accept the auto-installation.

#### Manual Installation with Specific Build:

- For those with multiple builds who wish to install a specific one, use the following command:
  ```bash
  eas build:run -p android
  ```
  This will present a list of all available builds for your project. Details provided include the build ID, time elapsed since creation, build number, version number, and relevant git commit info. If there are any invalid builds, they'll also be displayed.

For visualization, consider the example:
Running eas build:run command showcases a list of available builds for a project.

Upon the completion of the build's installation, its icon will appear on the emulator's home screen. If you're working with a development build, make sure to initiate the development server. This can be done by running:

```npx expo start

```

For SDK versions 48 and below, utilize the --dev-client flag.
Installing the Latest Build:
To directly install the most recent build on the Android Emulator, use:

```eas build:run -p android --latest

```
