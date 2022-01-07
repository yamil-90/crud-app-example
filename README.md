# crud-app-example

the appearance was manged using the React native Paper framework with react native vector Icons

# Screenshots

![screenshot1](https://github.com/yamil-90/crud-app-example/blob/main/assets/screenshots/Screenshot_1641530846.png?raw=true)
![screenshot2](https://github.com/yamil-90/crud-app-example/blob/main/assets/screenshots/Screenshot_1641530884.png?raw=true)
![screenshot3](https://github.com/yamil-90/crud-app-example/blob/main/assets/screenshots/Screenshot_1641530914.png?raw=true)
# Technologies 

|Technology|version|
|----|----|
|@react-navigation/native|^6.0.6|
   |@react-navigation/native-stack|^6.2.5|
   |axios|^0.24.0|
   |react|17.0.2|
   |react-native|0.66.4|
   |react-native-paper|^4.11.1|
   |react-native-safe-area-context|^3.3.2|
   |react-native-screens|^3.10.1|
   |react-native-vector-icons|^9.0.0|

# Instructions

if you decide to run this app as is you need to have JSON server running, you can later add your own API.

[link to json server documentation](https://www.npmjs.com/package/json-server#getting-started)

* first we need JSON server installed globally
```
npm install -g json-server
```
* create a db.json file in your project (or use the one provided in the repo) and add some data
```
{
    "clients":[]
}
```
* then we launch the json server running 
```
json-server db.json
```