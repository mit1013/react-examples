import { FC } from "react";

type Props = {
  gotoNextPage?: () => void;
  gotoPrevPage?: () => void;
};

const Pagination: FC<Props> = ({ gotoNextPage, gotoPrevPage }) => {
  return (
    <div>
      {gotoPrevPage && <button onClick={gotoPrevPage}>Previous</button>}
      {gotoNextPage && <button onClick={gotoNextPage}>Next</button>}
    </div>
  );
};

export default Pagination;
