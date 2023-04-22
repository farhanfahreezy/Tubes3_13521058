import { MouseEvent, useState } from "react";

interface HistoryTitle {
  title: string[];
}

function HistoryList({ title }: HistoryTitle) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  // Event Handle
  // const EventHandler = () => setSelectedIndex(index);
  return (
    <>
      <div className="list-group list-group-flush">
        {title.map((items, index) => (
          <button
            className={
              selectedIndex === index
                ? "list-group-item list-group-item-action active text-light bg-dark border-0"
                : "list-group-item list-group-item-action text-light bg-dark border-0"
            }
            key={items}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {items}
          </button>
        ))}
        {title.length === 0 && <p>No History Here</p>}
      </div>
    </>
  );
}

export default HistoryList;
