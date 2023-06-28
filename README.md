# Module Federation Example 

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.0.0.

## SetUp

(1) unzip the files into a folder, something like:

- C:\SOURCE\fm-dynamic

(2) Open a BASH shell in that folder and run:
- NPM i

(3) From VSCode, open two BASH shells in the Terminal window (one for the HOST, the other for REMOTE-01).

(4) In the BASH Terminal named SHELL run:
- ng build shell
- ng serve shell

(5) In the BASH Terminal named REMOTE-01 run:
- ng build remote-01
- ng serve remote-01

(6) Open a browser and navigate to :
- http://localhost:4200    This is the shell
- use the hamburger menus for routing

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
