# vue-test-code

## Problem
  - Cannot get data api
  - Cannot get data from Vuex state
  - Mutations problem

## Solving flow
- First cacthing api data
    ### How to get data from API using axios
    - at first me initiative to change the location of axios to vuex(store)
    - then i use actions for cacthing data api with axios
    - then before cacthing the data, im make some state that return data with empety value 
    - after that im made some change at mutations that before using [SET_DATA] to setData
    - at last we made some commit to mutations and make that data state is fulfill with data that me got from api
    #### How to run the actions before the web render
    - first import mapActions from vuex in another file that me want
    - then call the actions from vuex inside mapActions
    - after that call back the actions in mapActions then rewrite that inside vue lifecycle mounted
- Second get data state
    How to get data from Vuex state
    - first in vuex store me make some getters to return the state that i want
    - then in another file that me want to throw the data state from vuex, im import some mapGetters from vuex that will be used for get getters command from store/vuex
  
This app is made for resolving some error at the code before, and this app is made for for fulfill task from refactory.id that needed for joining their company, the task is found some issues then analytics, after analytics have done solve the issues.

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

Expected Output :
![expected](./src/assets/Expected.png)