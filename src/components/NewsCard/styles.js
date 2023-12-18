import { makeStyles } from "@material-ui/core/styles";
export default makeStyles({
  media: {
    height: 150,
  },
  border: {
    border: "solid",
  },
  fullHeightCard: {
    height: "100%",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    borderBottom: "10px solid white",
  },
  activeCard: {
    borderBottom: "10px solid #22289a",
  },
  grid: {
    display: "flex",
  },
  details: {
    display: "flex",
    justifyContent: "space-between",
    margin: "10px",
  },
  title: {
    padding: "0 16px",
    lineHeight: 1.2,
  },
  cardActions: {
    padding: "0 16px 8px 16px",
    display: "flex",
    justifyContent: "space-between",
  },
});
