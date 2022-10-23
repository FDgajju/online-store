// TODO: add comments
/**
 * 
 * @param {*} server 
 */
const handleShutdown = (server) => {
  process.on("uncaughtException", (err) => {
    console.log("Uncaught Exception! Shutting down...");
    console.log(err.name, err.message);
    process.exit(1);
  });

  process.on("unhandledRejection", (err) => {
    console.log("Unhandled Rejection! Shutting down...");
    console.log(err);
    server.close(() => {
      process.exit(1);
    });
  });

  const shutDown = () => {
    console.log("Shutting Down!");
    process.exit(0);
  };

  process.on("SIGTERM", shutDown);
  process.on("SIGINT", shutDown);
  process.on("SIGUSR1", shutDown);
};
module.exports = handleShutdown;
