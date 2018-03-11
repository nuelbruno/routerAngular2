
# Deep Linking
loadong lazychild inside lazychild

## Development server

This is particularly important when redirecting empty-path routes.

content_copy
[{
  path: '',
  pathMatch: 'prefix', //default
  redirectTo: 'main'
}, {
  path: 'main',
  component: Main
}]
Since an empty path is a prefix of any url, even when navigating to '/main', the router will still apply the redirect.

If pathMatch: full is provided, the router will apply the redirect if and only if navigating to '/'.


## test Lazy load

Disable cahse in chorme developer tool at network tab. a chuck.js will be loaded when lazyload module is clicked

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
