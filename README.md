# Data Mapping from Data

## Intro
This is simple data mapping from data. This project build with Restful API and used [ExpressJs](https://expressjs.com) as engine. ExpressJs is Fast, unopinionated, minimalist web framework for Node.js.

Detail for [assignment](assignment.docx)
```
There is 4 points that must solve

1. Filter data as Gender
2. Filter data as Worker and Gender
3. Descending sort data by City
4. Show Name from data that have education more than Senior High School
```


## Prerequisites
We must to install some component to run this project
1. [NodeJs](https://nodejs.org/en/)
2. [Yarn](https://yarnpkg.com)

## How to
Step by step implementation
1. Install *Nodejs*, follow official document [here](https://nodejs.org/en/download/)
2. Install *Yarn*, follow official document [here](https://yarnpkg.com/getting-started/install)
3. Install dependency for this project, run `yarn install` or if you don't want to install yarn, simply just run `npm i` from *project root dir*
4. Then run the project `yarn start` or `npm run start`


## Test Project
After run the project, we must to check project is running well or not. 

*We gonna check with hit endpoint test*

#### Test endpoint
Assume our endpoint in `localhost:3000`
- Url `localhost:3000/`
- Method `GET`
- Url Params `null`
- Body `null`
- Header `not need credentials`
```
- Code: 200
- Body: 
{
    "message": "test endpoint"
}
```

## Credentials
No Need any credential, before this project is standalone.

##App
```
- Host: localhost
- Port: 3000
```

## Endpoint
There 4 endpoints
1. `/gender` : Filter data as Gender
2. `/worker`: Filter data as Worker and Gender
3. `/city`: Descending sort data by City
4. `/education`: Show Name from data that have education more than Senior High School



