import meetings from "../components/mockdata/meeting/MeetingData"
import users from "../components/mockdata/user/User"

const userMap = new Map(users.map((user, index) => ([user._id, user])));
const meetingRequests = meetings.filter((mtg)=> !mtg.approved);

const initialState = { users: userMap, meetings: meetingRequests};


const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
};

export default reducer