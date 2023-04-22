import HistoryList from "./HistoryList";
import RadioButton from "./RadioButton";

function HistoryBar() {
  let history = [
    "History 1",
    "History 2",
    "History 3",
    "History 4",
    "History 5",
  ];
  return (
    <>
      <div className="container-fluid bg-dark border-end">
        <div className="row">
          <div className="col-sm-3">
            <h1 className="text-light">History List</h1>
            <HistoryList title={history} />
            <RadioButton />
            <button className="btn btn-light">How To Use</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default HistoryBar;
