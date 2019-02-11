# Angualr boilerplate

To set it up:

1. Make sure you have [NodeJS](http://nodejs.org), [Yarn](http://yarnpkg.com/) and [Angular CLI](https://angular.io/guide/quickstart#step-1-install-the-angular-cli) installed. Currently tested with NodeJS v8.15.0, Yarn v1.13.0, and Angular CLI v6.1.5.
2. Clone this repository onto your machine.
3. Copy the `dev` folder and paste it at where you want your development files to be.
4. Open up the command-line and `cd` into the freshly copied `dev` folder.
5. Run `yarn`. This should install all the required dependencies.
6. You are now ready to start building. Run `ng serve` to serve the site on `localhost:4200`.

## Why a boilerplate over `ng new`?

1. Indentation of 4 spaces instead of 2. (But this still doesn't solve the indentation issue for files generated through `ng generate`.)
2. Comes with the same set of starter SCSS files as the Metalsmith boilerplate.
3. Comes with some basic samples for routers and components.
4. Favours Yarn over NPM, which has **significantly faster** install times for Angular projects.