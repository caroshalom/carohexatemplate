# Viewing the Test Solution

## To View in the Browser:

To visualize the solution of the test in the browser, follow these steps:

1. Navigate to the `hexadash` folder.
2. Execute the following command to install dependencies: `npm install`
3. Run the following command to start the development server: `npm run dev`
4. Open your web browser and go to the following URL: (http://localhost:5173/pages/data-test/)

## Viewing the Solution in the Code:
To inspect the solution in the code, follow these steps:

1. Open the 'db.js' file located at: `hexadash/src/lib/server/db.js`
In this file, you will find the code implemented to establish the connection and query the database.

2. Open the 'data-test' folder located at: `hexadash/src/routes/(common-layout)/pages/data-test`
Here, you will find the files `+page.server.js` and `+page.svelte` where the code is implemented to load the data from the database query and then display it on the web page.
