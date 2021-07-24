import React from "react";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import { useHistory } from "react-router-dom";

const BreadCrumbs = ({ data }) => {
  let history = useHistory();
  const handleClick = (path) => {
    history.push(path);
  };
  return (
    <Breadcrumbs separator='›' aria-label='breadcrumb'>
      {data.map((el, index) => {
        const { linkName, linkType, linkPath } = el;
        return linkType ? (
          <Link style={{ cursor: "pointer" }} onClick={() => handleClick(linkPath)}>
            {linkName}
          </Link>
        ) : (
          <Typography color='textPrimary'>{linkName}</Typography>
        );
      })}
    </Breadcrumbs>
  );
};

export default BreadCrumbs;
