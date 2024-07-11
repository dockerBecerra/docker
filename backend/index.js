import server from "./src/server.js";

const main = async() => {
    try {
        await server.listen(server.get("port"), () => {
            console.log(`http://localhost:${server.get("port")}`);
        });   
    } catch (error) {
        const err = "Error al conectarse al puerto"
        console.log(err, error);
    }
}
main();