import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import classes from "./SearchBar.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const SearchBar = () => {
  return (
    <div className={`card mb-2 ${classes["search-container"]}`}>
      <div className={`${classes["search-content"]} input-group input-group-sm`}>
        <input
          type="text"
          className={`${classes["form-control"]} rounded bg-transparent`}
          aria-describedby="basic-addon2"
        />
        <div
          className={classes["search-icon-container"]}
        >
          <FontAwesomeIcon icon={faSearch} className={classes["search-icon"]} />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
