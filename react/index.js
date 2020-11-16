"use strict";
var Generator = require("yeoman-generator");
var chalk = require("chalk");
var yosay = require("yosay");

class ElastOSReactGenerator extends Generator {
  constructor(args, opts) {
    // Calling the super constructor is important so our generator is correctly set up
    super(args, opts);
  }

  prompting() {}

  writing() {
    // configs
    this.fs.copy(
      this.templatePath("_package.json"),
      this.destinationPath("package.json")
    );
  }

  install() {
    this.installDependencies({
      bower: false,
    });
  }
}

module.exports = ElastOSReactGenerator;
