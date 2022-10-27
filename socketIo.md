# SOCKET IO

## Handling middleware error
- If the next method is called with an Error object, the connection will be refused and the client will receive an connect_error event.

<p>
// server-side <br>
io.use((socket, next) => {
  const err = new Error("not authorized");
  err.data = { content: "Please retry later" }; // additional details
  next(err);
});
<br>
// client-side <br>
socket.on("connect_error", (err) => {
  console.log(err instanceof Error); // true
  console.log(err.message); // not authorized
  console.log(err.data); // { content: "Please retry later" }
});
<br>
<p>