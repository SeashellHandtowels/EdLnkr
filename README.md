# EdLnkr

[ ![Codeship Status for HumpbackSeahorses/EdLnkr](https://codeship.com/projects/8d64f920-8e25-0132-baa0-6a5ca7220068/status?branch=master)](https://codeship.com/projects/60894)

EdLnkr is the most efficient way to build learning plans using only links from the internet. 

## Team

  - __Product Owner__: Domen Vajevec
  - __Scrum Master__: Omar Alvarez
  - __Development Team Members__: Albert Lee, James Kolonusz

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)
    1. [Installing Dependencies](#installing-dependencies)
    1. [Tasks](#tasks)
1. [Team](#team)
1. [Contributing](#contributing)

## Requirements

- Node 0.10.x
- MongoDB
- Sass (Ruby or node)
- Yeoman + angular fullstack generator

### Installing Dependencies

From within the root directory:

```sh
gem install sass
npm install -g grunt grunt-cli bower yeoman 
npm install -g generator-angular-fullstack
npm install
bower install
```

## Usage

From the root directory run: 

- `grunt` : Runs jshint, tests and builds the project.
- `grunt build` : Builds the project. All production ready files are stored in the `dist` directory.
- `grunt serve` : Builds the project and runs a server locally for a preview of the site. 

## Development

All development is done in folders outside of root. Running `grunt` will build your project into the `dist` folder. Use the `dist` folder for pushing to a production server. You can find instructions for how to do so on the yeoman generator [site](https://github.com/DaftMonk/generator-angular-fullstack#heroku).

An example client component in `client/app`

    main
    ├── main.js                 - Routes
    ├── main.controller.js      - Controller for our main route
    ├── main.controller.spec.js - Test
    ├── main.html               - View
    └── main.less               - Styles

An example server component in `server/api`

    thing
    ├── index.js                - Routes
    ├── thing.controller.js     - Controller for our `thing` endpoint
    ├── thing.model.js          - Database model
    ├── thing.socket.js         - Register socket events
    └── thing.spec.js           - Test

### Roadmap

View the project roadmap [here](https://github.com/SeashellHandtowels/EdLnkr/issues)


## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines.
