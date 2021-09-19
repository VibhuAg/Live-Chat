import socketIOClient from "socket.io-client";

const serverEndpoint =
  "postgres://user01:vibhu1231000@free-tier.gcp-us-central1.cockroachlabs.cloud:26257/<database>?<parameters>";

export const socket = socketIOClient(serverEndpoint, {
  transports: ["websocket"],
});
