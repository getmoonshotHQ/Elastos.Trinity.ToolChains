# elastOS App Generator [![CircleCI][circleci-image]][circleci-url] [![NPM version][npm-image]][npm-url] [![Slack][slack-image]][slack-url]

## Installation

1. If not already installed, install [Node.js](https://nodejs.org/) v10 or higher _(minimum required version is Node.js v8)_.

2. Create a new directory and `cd` into it:

   ```bash
   mkdir hello-elastos
   cd hello-elastos
   ```

3. Generate a elastOS app, you can specify the framework.

   | Framework | Use this command to install     |
   | --------- | ------------------------------- |
   | React     | `npx generator-elastos --react` |
   | Vue       | `npx generator-elastos --vue`   |

   For additional options run `npx generator-elastos --help`.

   > Alternatively, global package installation can be used. Try this if running into problems:
   >
   > ```
   > npm install -g yo generator-elastos
   > yo elastos
   > ```

4. Start the development server:

   ```bash
   npm run start
   ```

## Testing the generated app

The single tests works for all generators:

```bash
npm run test
```

## Testing the generator project

Within the repo directory, run `npm run test`. This command will generate the variants of elastOS apps
in folders called `.app-gen-test`, `.react-gen-test`, and `.vue-gen-test`. The test asserts
that all expected files were actually created. It also runs the `npm run test` command within each app. For the
React and Vue generators, `npm run test` currently builds the app, but that command can be
changed. (For a React app, the typical test command is `react-scripts test`.)
