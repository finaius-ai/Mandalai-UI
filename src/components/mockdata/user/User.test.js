

const Users = require("./User.js");


test("Users array not empty", () => {
    expect(Users).toBeTruthy();
});

test("First user has the right property", () => {
    expect(Users[1].name).toBe("Veer Singh");
});

test("Setting has the right source", () => {
    expect(Users[1].setting.sourceMedium[0].source).toBe("gmail");
});

test("Users are 10", () => {
   expect(Users.length).toBe(10)
});


test("Friendship match", ()=> {
    const idx = Math.floor(Math.random() * 9 );
    const aUser = Users[idx];
    const aFriendId = parseInt(aUser.friends[1]);
    const aFriend = Users.filter((user)=> user.id_=== aFriendId)[0];
    const aFriendsFriends = aFriend.friends.map((item)=> parseInt(item));
    console.log(aUser.id_);
    console.log(aFriendId);
    if(aUser.id_ != aFriendId) {
        expect(aFriendsFriends).toContain(aUser.id_);
    }

});