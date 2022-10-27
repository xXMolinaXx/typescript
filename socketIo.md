# SOCKET IO

### cliente code to send and receive data
codigo de react
```
socket.emit('hi',{value1:'id de usuario',value2:socket.id});
useEffect(() => {
        socket.on('message', (mess)=>{
            console.log(mess)
        })
        return ()=>{
            socket.off('message', (mess)=>{
                console.log(mess)
            })  
        }
      }, [])
```
### Handling middleware error
- If the next method is called with an Error object, the connection will be refused and the client will receive an connect_error event.
```
    // server-side 
    io.use((socket, next) => {
    const err = new Error("not authorized");
    err.data = { content: "Please retry later" }; // additional details
    next(err);
    });

    // client-side 
    socket.on("connect_error", (err) => {
    console.log(err instanceof Error); // true
    console.log(err.message); // not authorized
    console.log(err.data); // { content: "Please retry later" }
    });
```