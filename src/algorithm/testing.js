import * as database from "./database.js";

/*
    FOR TESTING PURPOSES
*/

database.connect();

database.getDialogs(0, (dialogs) => {
  console.log(dialogs);
});

database.disconnect();
