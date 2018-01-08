

const meetings = require("./MeetingData");

it("meetings have the required number", () => {
   expect(meetings.length).toBe(27);
});