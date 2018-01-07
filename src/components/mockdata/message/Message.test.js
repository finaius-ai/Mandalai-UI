

const Messages = require("./Message.js");
const Users = require("../user/User.js");

test("Messages are 20", () => {
    expect(Messages.length).toBe(20)
});

test("Message id matches with sender", () => {
    const mid = Users[1].messages;
   expect(mid).toContain(Messages[0].id_)
});