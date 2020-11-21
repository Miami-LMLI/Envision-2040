[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/LMLI-Cohort-9/Envision-2040)

![Website](https://img.shields.io/website?url=http%3A%2F%2Fenvision2040.digital%2F)
![GitHub last commit](https://img.shields.io/github/last-commit/LMLI-Cohort-9/Envision-2040)
[![GitHub issues](https://img.shields.io/github/issues/LMLI-Cohort-9/Envision-2040)](https://github.com/LMLI-Cohort-9/Envision-2040/issues)
![GitHub repo size](https://img.shields.io/github/repo-size/LMLI-Cohort-9/Envision-2040)

# Envision 2040

- [Envision 2040](#envision-2040)
  - [Overview](#overview)
  - [Core Tech Stack](#core-tech-stack)
  - [Prerequisites](#prerequisites)
  - [Setup](#setup)
  - [Useful Commands](#useful)
  - [License](#license)

<a name="overview"/></a>
## Overview
This repository is for the development of Lockheed Martin Leadership Institute's Cohort 9 Envision 2040 website. 

<a name="tech"/></a>
## Core Tech Stack
- [ ] NodeJS (version >=10.13.0)
- [ ] [React](https://reactjs.org/)
- [ ] [Gatsby](https://www.gatsbyjs.com/)
- [ ] [Contentful](https://www.contentful.com/)
- [ ] [GraphQL](https://graphql.org/)

<a name="prereq"/></a>
## Prerequisites
- [ ] NodeJS (version >=10.13.0)
- [ ] NPM
- [ ] Contentful API Access
- [ ] An IDE of your choice ([Visual Studio Code](https://code.visualstudio.com/) recommended)

<a name="setup"/></a>
## Setup
1. Clone the repository.
```
git clone git@github.com:LMLI-Cohort-9/Envision-2040.git
```

2. Check into the cloned repository.
```
cd Envision-2040/
```

3. Install dependencies.
```
npm install
```

4. Setup Contentful API keys.
```
npm run setup
```

4. (alternative) Create a `.env.development` and `.env.production` files following the format of `.env.example` in the root directory.
Fill in the API keys here.
```
CONTENTFUL_SPACE_ID=''
CONTENTFUL_ACCESS_TOKEN=''
```

5. Run in development mode.
```
npm run dev
```

<a name="useful"/></a>
## Useful Commands
```
npm run build
```
Builds the app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.

<a name="license"/></a>
## License
There is no license yet.
