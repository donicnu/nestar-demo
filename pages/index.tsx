import withLayoutMain from "@/libs/components/layout/LayoutHome";
import { Stack } from "@mui/material";
import { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <Stack>
      <Stack flexDirection={"column"}>
        <Stack>
          <Stack className="container">Popular Properties</Stack>
          <Stack className="container">Top AGents</Stack>
          <Stack className="container">Top AGents</Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default withLayoutMain(Home);
