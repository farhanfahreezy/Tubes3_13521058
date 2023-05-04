import * as database from './database.js';

/*
    FOR TESTING PURPOSES
*/

function showData(){
    database.connect();
    console.log("as");
    database.getDialogs(0,(dialogs) => {
        console.log(dialogs)
    });

    database.disconnect();
}

showData()