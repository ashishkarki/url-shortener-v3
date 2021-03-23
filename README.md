### Full stack app to facilitate the shortening of long urls.

## <u>Introduction: What is this app about?</u>

Well, the age old problem of working with and/or sharing those long. long urls found all over the internet. This app intends to solve that problem by providing the users with a shorter version of your long url - easier to copy, share and store.

## <u>Tech Stack: What voodoo technology made this happen?</u>

Here are the technological aspects of this full stack app in terms of front-end and back-end:

a). <u>Front-end:</u>: React based with details below:

1. `ReactJs` with `React Hooks` (like useState, useEffect, useCallback, useContext and useReducer) and `Context Api`
2. Reusable UI Components are built with the `Material-UI` framework. It provides for most reused components like Button, Form, Input and so on.
3. `Axios` library/client is used to send and receive http request and response correspondingly.
4. `react-toastify` is a npm package that helps implement and display information toasts for react library.
5. `valid-url` is another npm package that helps validate input url so we know users enter valid urls.

b). <u>Back-end:</u> Node and Express based with details below:

1. `Express` web framework based on Node.js.
2. `Mongoose` is a Object Document Modeling (ODM) tool for Node.js based applications. I provides a traditional SQL like interface to MongoDB API within Node environment.
3. `nanoid`: is the npm package which is the magic recipe behind the core working on this app. It is a url-friendly unique string-based ID generator for JS based app. For more details, visit: https://www.npmjs.com/package/nanoid.
4. `config`: is another npm package that provides environment configuration for Node.js applications. Configuration files (by convention) are stored within a directory name config directly underneath root directory. Create a default.json file to provide defaults and other json files based on environments etc.
5. `colors`: npm package is used to display node log messages in various colors as well as font-styles. This is an optional package.

c). <u>Database:</u> we have utilized `MongoDB Atlas` which a (cloud-based) Database-as-a-Service which hosts and manages a client's databases on their behalf. Registration is free and there is a free tier which should be enough to run this application. Visit the website here: https://www.mongodb.com/cloud/atlas.

## <u>Running the App: I am curious, how do I play with the app?</u>

Keep in mind, we have two apps within the whole app: a react frontend and a express backend. Fear not!! The process of running the app has been made butter-smooth. Let's get started:

1. The easiest way to get started is executing the command `npm run dev` from the project's root. This will run both the frontend/client and the backend/server concurrently. You can then access the application webpage/frontend at the web address `http://localhost:3000`.
2. Go on, give it shot.
3. Things got weird, didn't it? If you look at the node/server/express/whatever console/command-line-tool, you see any error similar to this -

```
    Error while connecting to DB. Reason:
    Invalid connection string
    ......<more stuff>.....
```

4. Basically, as you might see, the connection to DB went haywire. In this particular case, our Mongoose ODM/tool tried connect to a DB, any DB but we have so far not provided it any any connection-string/db-uri/db-address/whatever.
5. Listen up!!. This is the most important and slightly tedious part of getting the app running. If you properly read the Database sub-section of the Tech Stack section above, you know that we are using MongoDB Atlas for our DB needs. That is we have not used any local installation of DB (this is entirely possible especially if the local DB is MongoDB). Please follow the steps directly below to get Atlas configured.

   i. If required, register for Atlas here: https://www.mongodb.com/cloud/atlas.

   ii. Login and you will be take to your dashboard page at https://cloud.mongodb.com/.

   iii. If required, create a new `cluster` say cluster-1. Again from the dashboard, click on the `collections` button to create a new database and eventually a new collection within the DB.

   iv. Once that is done, also important is setting up DB and Network access from the left-hand side panel. Add a new DB user in the `Database Access` page and similarly add a new IP address (that can access the newly created DB within Atlas) in the `Network Access` page.

   v. Finally, go to the dashboard by clicking on the `Clusters` link from the left-hand side panel. CLick on the `connect` button to open the connection method Dialog box. Here, select the `Connect your application` option.

   vi. In the resulting page that open, copy the connection string. Fill in the the DB user name and password plus the DB name you created or using from above. The string will look something like:

   > mongodb+srv://<username>:<password>@my-clustername.mongodb.net/<myFirstDatabase>?retryWrites=true&w=majority

6. Now you have the connection-string, you need to plop it into one of your `config` package based configuration files with a unique key and the string as the value. Again few things are involved:

   i. Create a directory named `config` directly under the root directory. All configuration files with be kept in this directory. The config package expects a `default.json` file to provide details. A sample file looks like this

   ```
       {
           "baseUrl": "http://localhost:5000",
           "mongoUri": ""
       }
   ```

   ii. The keys (as with json files) can be named anything.

   iii. The `baseUrl` key is set to localhost:5000 as that is the port where we want to run our express server locally. Feel free to change the port but beware there might be changes need elsewhere.

   iv. A key, in this case named `mongoUri`, stores the connection string to our Atlas based DB.

## <u></u>

## <u></u>
