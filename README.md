# React Native authentication example

Authentication learning app using React Native 0.54.1 and Firebase 4. Includes a login form and shared UI components.

## Layout

- `src/`: application components and state.
- `android/` and `ios/`: native platform projects.
- `package.json`: dependency versions and npm scripts.

## Development

This is a legacy React Native project. Use a Node, Android, and Xcode toolchain compatible with the versions in `package.json`; current React Native instructions may not apply.

The existing scripts provide:

```bash
npm install
npm start
npm test
```

`npm start` starts the development packager. Launching a device or simulator also requires the matching native platform toolchain.

Configure your own Firebase project before using the login flow. Review the existing Firebase initialization in `src/`.

Dependency installation and native builds have not been verified during this documentation update.
