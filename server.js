client.on("ready", () => {
  console.log(
    Online In Servers : ${client.guilds.size} | Users : ${client.users.size}
  );
  let statuses = ["THOMAS📿", "STAFF{Y}THOMAS", "HOME{Y}PRO"];

  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    client.user.setActivity(STREAMING, {
      type: "STREAMING",
      url: "https://www.twitch.tv/faith"
    });
  }, 2000);
});
client.login("NzA5MjA2OTcxOTE5NjMwNDU3.X8bAZA.7HsV9VNsk0mB46inSojlFMQMtms")
