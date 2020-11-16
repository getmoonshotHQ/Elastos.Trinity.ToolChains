"use strict";
const path = require("path");
const assert = require("yeoman-assert");
const helpers = require("yeoman-test");

describe("generator-elastos integrated initializer [react]", function () {
  this.enableTimeouts(false);

  let testingDir;
  let runEnv;

  before(async () => {
    testingDir = path.join(__dirname, "../.integrated-app-gen-test-react");
    await new Promise((resolve, reject) => {
      helpers.testDirectory(testingDir, (err) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    });
  });

  it("create app generator", async () => {
    const modularGen = require("../lib/index");
    const result = modularGen.createAppGen({
      args: ["--react"],
      options: { skipInstall: true },
    });
    runEnv = result.run;
  });

  it("generate a project", async () => {
    await runEnv();
  });

  it("creates files", function () {
    assert.file(["package.json"]);
  });

  after(async () => {
    // Clean temp output dir.
    await new Promise((resolve, reject) => {
      helpers.testDirectory(testingDir, (err) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    });
  });
});

describe("generator-elastos integrated initializer [vue]", function () {
  this.enableTimeouts(false);

  let testingDir;
  let runEnv;

  before(async () => {
    testingDir = path.join(__dirname, "../.integrated-app-gen-test-vue");
    await new Promise((resolve, reject) => {
      helpers.testDirectory(testingDir, (err) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    });
  });

  it("create app generator", async () => {
    const modularGen = require("../lib/index");
    const result = modularGen.createAppGen({
      args: ["--vue"],
      options: { skipInstall: true },
    });
    runEnv = result.run;
  });

  it("generate a project", async () => {
    await runEnv();
  });

  it("creates files", function () {
    assert.file(["package.json"]);
  });

  after(async () => {
    // Clean temp output dir.
    await new Promise((resolve, reject) => {
      helpers.testDirectory(testingDir, (err) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    });
  });
});

describe("generator-elastos:react", function () {
  this.enableTimeouts(false);

  let generator = undefined;

  before(async () => {
    const testingDir = path.join(__dirname, "../.react-gen-test");
    await new Promise((resolve, reject) => {
      helpers.testDirectory(testingDir, (err) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    });
  });

  it("generate a project", async () => {
    const appPath = path.join(__dirname, "../react");
    generator = helpers.createGenerator(appPath, [], [], {
      skipInstall: false,
    });
    helpers.mockPrompt(generator, { someAnswer: true });
    // Run yo-generator to output project.
    await Promise.resolve(generator.run());
  });

  it("creates files", function () {
    assert.file(["package.json"]);
  });
});

describe("generator-elastos:vue", function () {
  this.enableTimeouts(false);

  let generator = undefined;

  before(async () => {
    const testingDir = path.join(__dirname, "../.vue-gen-test");
    await new Promise((resolve, reject) => {
      helpers.testDirectory(testingDir, (err) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    });
  });

  it("generate a project", async () => {
    const appPath = path.join(__dirname, "../vue");
    generator = helpers.createGenerator(appPath, [], [], {
      skipInstall: false,
    });
    helpers.mockPrompt(generator, { someAnswer: true });
    // Run yo-generator to output project.
    await Promise.resolve(generator.run());
  });

  it("creates files", function () {
    assert.file(["package.json"]);
  });
});
