import { Photon } from "./@generated/photon";
import express from "express";

const app = express();
const port = 8000;
const photon = new Photon();

app.get("/", async (_: any, res: any) => {
  const result = await photon.colors.findMany({});
  res.send(JSON.stringify(result, null, 2));
});

app.listen(port, () => console.log(`App listening on port ${port}!`));
