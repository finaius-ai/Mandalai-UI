

const Users = require("./User.js");
const meetings = require("../meeting/MeetingData");

it("Users array not empty", () => {
    expect(Users).toBeTruthy();
});

it("First user has the right property", () => {
    expect(Users[1].name).toBe("Veer Singh");
});

it("Setting has the right source", () => {
    expect(Users[1].setting.sourceMedium[0].source).toBe("gmail");
});

it("Users are 10", () => {
   expect(Users.length).toBe(10)
});


it("Friendship match", ()=> {
    const idx = Math.floor(Math.random() * 9 );
    const aUser = Users[idx];
    const aFriendId = parseInt(aUser.friends[1]);
    const aFriend = Users.filter((user)=> user._id=== aFriendId)[0];
    const aFriendsFriends = aFriend.friends.map((item)=> parseInt(item));
    console.log(aUser._id);
    console.log(aFriendId);
    if(aUser._id != aFriendId) {
        expect(aFriendsFriends).toContain(aUser._id);
    }

});

it("Convert the array to Map", ()=> {
    const userMap = new Map(Users.map((user, index) => ([user._id, user])));
    const aUserId = meetings[2].initiator;
    expect(userMap.get(aUserId).avatar).toBeTruthy();
    //console.log(userMap)
});
