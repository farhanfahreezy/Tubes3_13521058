import * as database from "./database.js";

export const onClickButton = () => {
  get();
};

export function get() {
  database.connect();
  database.getDialogs(0, (res) => console.log(res));
  database.disconnect();
}
