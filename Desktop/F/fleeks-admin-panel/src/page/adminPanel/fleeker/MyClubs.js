import React, { useEffect, useState } from "react";
import Link from "@mui/material/Link";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Title from "../Title";
import { useSelector } from "react-redux";
import { api } from "../../../config/handler";
import CircleLoader from "../../../components/loading/CircleLoader";
import { Button, Paper } from "@mui/material";
import TokenCreate from "./dialogue/TokenCreate";
import ViewCode from "./dialogue/ViewCode";

export default function MyClubs() {
  const { data } = useSelector((state) => state.userReducer);
  const [clubsData, setClubsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getAllMyClubs = async () => {
      const profile_id = data?.profile?._id;
      const endpoint = `/clubs/my-clubs/${profile_id}`;
      const res = await api("get", {}, endpoint);
      if (res?.data?.status) {
        setClubsData(res.data?.clubs);
        setLoading(false);
      } else {
        setLoading(false);
      }
    };

    getAllMyClubs();
  }, []);

  if (loading) {
    return <CircleLoader />;
  }

  return (
    <Paper sx={{ padding: 2 }}>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell width={"50%"}>Name</TableCell>
            <TableCell width={"50%"} align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {clubsData?.map((item, index) => (
            <TableRow key={index}>
              <TableCell>{item.name}</TableCell>

              {item?.isForExclusiveMember ? (
                <TableCell style={{display:"flex",flexDirection:"row",width:"100%",justifyContent:"space-evenly"}}>
                  <TokenCreate item={item} />
                  <ViewCode item={item} />
                </TableCell>
              ):
              <TableCell></TableCell>
              }
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {clubsData?.length === 0 && <h1>You havn't create any club yet!</h1>}
    </Paper>
  );
}
