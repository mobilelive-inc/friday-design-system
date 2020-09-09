# Friday - The Design System - React

## Starting in development mode

In order to run React application in development mode, run following command:

```
nx serve rx-xis-app
```
This starts the development server on port 4200.

## Building the Project

In order to build the React project run following command:

```
npm run rx:bundle
```

This creates the build on NX directory level

## Starting storybook

In order to start storybook, run following command:

```
npm run storybook or yarn storybook
```

## Publishing to NPM

Following commands need to be followed in order to publish React project's build to NPM:

#### Step 1:
Create build of the React project using aforementioned command.

#### Step 2:
Update Package.json file in the React project by removing the scripts and updating dependencies. Right this is manual process due to NX quirks.

#### Step 3:
Run following command to publish the project:

```
yarn rx:publish
```

This will ask for updated version number for package and publish package to NPM. If there is no login present, developer will need to log into NPM using company provided credentials.




