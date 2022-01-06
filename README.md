# crud-app-example

the appearance was manged using the React native Paper framework with react native vector Icons

# Instructions

if you decide to run this app as is you need to have JSON server running, you can later add your own API.

[link to json server documentation](https://www.npmjs.com/package/json-server#getting-started)

* first we need JSON server installed globally
```
npm install -g json-server
```
create a db.json file in your project (or use the one provided in the repo) and add some data
```
{
    "clients":[]
}
```
* then we launch the json server running 
```
json-server db.json
```