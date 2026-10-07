import { resolveSrv } from "dns";

resolveSrv("_mongodb._tcp.cluster0.4ytfmmx.mongodb.net", (err, addresses) => {
  if (err) {
    console.error("ERROR:", err);
    return;
  }

  console.log(addresses);
});
