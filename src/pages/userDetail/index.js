import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BreadCrumbs from "./../../components/breadcrumbs";
import Communication from "./../../utils/communication";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import ContactBox from "./../userDetail/contactBox";
import AddressBox from "./../userDetail/addressBox";
import CompanyBox from "./../userDetail/companyBox";
import PostBox from "./../userDetail/postBox";

const UserDetail = () => {
  const { id } = useParams();
  const [user, setUser] = useState({});
  const [bc, setBc] = useState([
    {
      linkName: "Users",
      linkType: true,
      linkPath: "/",
    },
  ]);

  useEffect(() => {
    let getUserDetail = Communication("http://jsonplaceholder.typicode.com/users/" + id);
    let userPosts = Communication("http://jsonplaceholder.typicode.com/posts?userId=" + id);

    Promise.all([getUserDetail, userPosts]).then((data) => {
      setUser({
        userDetail: data[0],
        userPost: data[1],
      });
    });
  }, []);
  useEffect(() => {
    if (user.userDetail) {
      const { name } = user.userDetail;
      setBc([
        ...bc,
        {
          linkName: name,
          linkType: false,
          linkPath: "",
        },
      ]);
    }
  }, [user]);

  return (
    <>
      <BreadCrumbs data={bc} />
      <Box width={1} mt={4}>
        <Grid container direction='row' spacing={5}>
          <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
            <ContactBox {...user.userDetail} />
          </Grid>
          <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
            <AddressBox {...user.userDetail?.address} />
          </Grid>
          <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
            <CompanyBox {...user.userDetail?.company} />
          </Grid>
        </Grid>
      </Box>
      <Box width={1} mt={4}>
        <h2>Posts by {user.userDetail?.name}</h2>
        <Grid container direction='row' spacing={5}>
          {user?.userPost?.map((el) => {
            return (
              <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
                <PostBox key={el.id} {...el} />
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </>
  );
};

export default UserDetail;
