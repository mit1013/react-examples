import { FC, useState, useEffect } from "react";

type Props = {
  getItems: () => number[];
};

const List: FC<Props> = ({ getItems }) => {
  const [items, setItems] = useState<number[]>([]);

  useEffect(() => {
    setItems(getItems());
    console.log("updating items");
  }, [getItems]);

  return (
    <div>
      {items.map((item) => (
        <div key={item}>{item}</div>
      ))}
    </div>
  );
};

export default List;
