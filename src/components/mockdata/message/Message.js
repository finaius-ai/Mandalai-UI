/*
1) Veer and Rocky

When do you want to meet? from Veer

2) Elon and Jeff Bezos

Hey Elon, lets catch up and talk about rockets! from jeff

3) Mark and Bill

Hey Bill, when's a good time to get coffee? from mark

4) Elon and Daisy

Hey Daisy, I loved you in the new star wars movie. Want to get coffee this afternoon? from Elon

5) Rocky and Chris

Hey Rocky, public feedback to the app has been great! Lets get lunch at Babalu's this week. from Chris

6) Mark and Veer

Hey Veer, I love your app, Mandalai. In fact, I want to buy your company for $1 billion. Lets get lunch
to talk about it. from Mark

7) Larry and Rocky

Rocky, I think your app would be a great fit as an Alphabet company. When do you want to meet? from Larry

8) Ray Dalio and Rocky

If you’re not failing, you’re not pushing your limits, and if you’re not pushing your limits, you’re
not maximizing your potential. from Ray

9) Veer and Jeff

Hey Jeff, I found this great new restaurtant in town. Are you free for lunch tomorrow? from Veer

10) Veer and Daisy

Hey Veer, I would love to meet and talk about some film projects. When's good time to meet? from Daisy

11) Elon and Bill

I want to donate to your foundation, but i have some quesitons. Are you free this week? from Elon

12) Rocky and Veer

Hey, something came up. I have to reschedule our meeting. What time are you free tomorrow? from Rocky

13) Veer and Chris

Hey Chris, I have some app updates I need to talk to you about. When are you free? from Veer

14)  Elon and Jeff

Jeff, can you believe this app!? I can't believe how easy it has made my workday! I definitely reccomend
it since you're starting another company. from Elon

15) Larry and Jeff

Hey Jeff, I have concerns about the cloud computing. We need to meet.from Larry

16) Daisy and Jeff

Hey Daisy, I want you hire you for our amazon advert. Let's get dinner if you're interested. form Jeff

17) Mark and Chris

Hey Chris, I talked to Veer about the buyout. I want to talk to you about it as well. Are you free
tomorrow? from Mark

18) Chris and Rocky

I have to reschedule our meeting. Do you have time Friday? from Chris

19) Ray Dalio and Veer

Hey Ray, I want to ask you some questions about your all weather portfolio. Can you meet next week?

20) Ray Dalio and Bill

Bill, let's talk about Microsoft! from Ray
*/

const Messages = [

    {
        _id: 1,
        text: "When do you want to meet?",
        createdAt: new Date(2017, 2, 1, 1, 10),
        userID: 1

    },

    {
        _id: 2,
        text: "Hey Elon, lets catch up and talk about rockets!",
        createdAt: new Date(2017, 6, 7, 4, 30),
        userID: 4
    },

    {
        _id: 3,
        text: "Hey Bill, when's a good time to get coffee?",
        createdAt: new Date(2017, 3, 5, 2, 23),
        userID: 10
    },

    {
        _id: 4,
        text: "Hey Daisy, I loved you in the new star wars movie. Want to get coffee this afternoon?",
        createdAt: new Date(2017, 7, 16, 4, 30),
        userID: 6
    },

    {
        _id: 5,
        text: "Hey Rocky, public feedback to the app has been great! Lets get lunch at Babalu's this week.",
        createdAt: new Date(2017, 1, 9, 6, 33),
        userID: 1
    },

    {   _id: 6,
        text: "Hey Veer, I love your app, Mandalai. In fact, I want to buy your company for $1 billion. Lets get lunch to talk about it.",
        createdAt: new Date(2018, 1, 1, 7, 15),
        userID: 2
    },

    {   _id: 7,
        text: "Rocky, I think your app would be a great fit as an Alphabet company. When do you want to meet?",
        createdAt: new Date(2018, 1, 2, 11, 45),
        userID: 1
    },

    {   _id: 8,
        text: "If you’re not failing, you’re not pushing your limits, and if you’re not pushing your limits, you’re not maximizing your potential.",
        createdAt: new Date(2018, 1, 5, 9, 42),
        userID: 1
    },

    {   _id: 9,
        text: "Hey Jeff, I found this great new restaurtant in town. Are you free for lunch tomorrow?",
        createdAt: new Date(2017, 5, 5, 8, 14),
        userID: 8
    },

    {   _id: 10,
        text: "Hey Veer, I would love to meet and talk about some film projects. When's good time to meet?",
        createdAt: new Date(2017, 4, 8, 10, 42),
        userID: 2
    },

    {   _id: 11,
        text: "I want to donate to your foundation, but i have some quesitons. Are you free this week?",
        createdAt: new Date(2017, 8, 1, 5, 42),
        userID: 10
    },

    {   _id: 12,
        text: "Hey, something came up. I have to reschedule our meeting. What time are you free tomorrow?",
        createdAt: new Date(2018, 1, 6, 8, 46),
        userID: 2
    },

    {   _id: 13,
        text: "Hey Chris, I have some app updates I need to talk to you about. When are you free?",
        createdAt: new Date(2017, 11, 4, 7, 30),
        userID: 3
    },

    {   _id: 14,
        text: "Jeff, can you believe this app!? I can't believe how easy it has made my workday! I definitely reccomend it since you're starting another company",
        createdAt: new Date(2018, 1, 4, 11, 15),
        userID: 8
    },

    {   _id: 15,
        text: "Hey Jeff, I have concerns about the cloud computing. We need to meet.",
        createdAt: new Date(2017, 6, 13, 4, 25),
        userID: 8
    },

    {   _id: 16,
        text: "Hey Daisy, I want you hire you for our amazon advert. Let's get dinner if you're interested.",
        createdAt: new Date(2018, 1, 6, 1, 45),
        userID: 6
    },

    {   _id: 17,
        text: "Hey Chris, I talked to Veer about the buyout. I want to talk to you about it as well. Are you free tomorrow? ",
        createdAt: new Date(2017, 9, 16, 6, 14),
        userID: 3
    },

    {   _id: 18,
        text: "I have to reschedule our meeting. Do you have time Friday?",
        createdAt: new Date(2017, 7, 4, 3, 18),
        userID: 1
    },

    {   _id: 19,
        text: "Hey Ray, I want to ask you some questions about your all weather portfolio. Can you meet next week?",
        createdAt: new Date(2018, 1, 3, 7, 55),
        userID: 7
    },

    {   _id: 20,
        text: "Bill, let's talk about Microsoft!",
        createdAt: new Date(2018, 7, 5, 5, 12),
        userID: 10
    },
];

module.exports = Messages;
