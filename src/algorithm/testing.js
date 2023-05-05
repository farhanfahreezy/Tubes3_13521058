import * as database from "./database.js";

/*
    FOR TESTING PURPOSES
*/

database.connect();

database.addHistory(1, 0, "OK");
database.addHistory(2, 0, "OK");
database.addHistory(3, 0, "OK");

database.disconnect();
