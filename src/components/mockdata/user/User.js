/*
    id_: 1,
    name: "Rocky Xu",
    avatar: "https://scontent-dft4-2.xx.fbcdn.net/v/t1.0-1/p160x160/19146169_1082042818563010_4855825947142202271_n.jpg?oh=5f5f42d7d02bc166d43e6350e8743172&oe=5AFC017B",
    email: "rocky.mandalai@gmail.com",
    phone: "601-927-0416",

    new Date(2013, 2, 1, 1, 10) which both create a date for 2013-03-01T01:10:00.
 */


const Users = [

    {
        id_: 1,
        name: "Rocky Xu",
        avatar: "https://scontent-dft4-2.xx.fbcdn.net/v/t1.0-1/p160x160/19146169_1082042818563010_4855825947142202271_n.jpg?oh=5f5f42d7d02bc166d43e6350e8743172&oe=5AFC017B",
        email: "rocky.mandalai@gmail.com",
        phone: "601-927-0416",
        friends: [ 2,4,6,8,9,10],
        setting: {
            sourceMedium: [
                {source:"gmail", connected: true},
                {source:"imessage", connected: false},
                {source: "google-calendar", connected: true}
            ],

            reminderMethod: [
                {source:"email", connected: true },
                {source:"text", connected: true}
            ],

            remindingTime: [
                {type: "First Reminder", reminderTime: "1 hour before"},
                {type: "Second Reminder", reminderTime: "Click to set"}
            ],

            meetingTime: [
                {meetingType:"coffee", dateOfTheWeek:0, begTimeOfDay:1, endTimeOfDay:2 },
                {meetingType:"coffee", dateOfTheWeek:2, begTimeOfDay:4, endTimeOfDay:6 },
                {meetingType:"drink", dateOfTheWeek:2, begTimeOfDay:4, endTimeOfDay:6 },
                {meetingType: "lunch", dateOfTheWeek:1, begTimeOfDay:0, endTimeOfDay:2}
            ]

        },
        messages: [12]


    },

    {id_: 2,
        name: "Veer Singh",
        avatar: "https://scontent-dft4-2.xx.fbcdn.net/v/t1.0-1/p160x160/25507853_10156990106263642_250896389840279276_n.jpg?oh=40261e71fbb510187510da2d6bb0de9d&oe=5AF4BF2B",
        email: "veer.mandalai@gmail.com",
        phone: "601-951-9985",
        friends: [1,3,5,7,8,10],
        setting: {
            sourceMedium: [
                {source:"gmail", connected: true},
                {source:"imessage", connected: false},
                {source: "google-calendar", connected: true}
            ],

            reminderMethod: [
                {source:"email", connected: true },
                {source:"text", connected: true}
            ],

            remindingTime: [
                {type: "First Reminder", reminderTime: "2 hours before"},
                {type: "Second Reminder", reminderTime: "1 hour before"}
            ],

            meetingTime: [
                {meetingType:"coffee", dateOfTheWeek:1, begTimeOfDay:0, endTimeOfDay:1 },
                {meetingType:"coffee", dateOfTheWeek:3, begTimeOfDay:2, endTimeOfDay:4 },
                {meetingType:"drink", dateOfTheWeek:2, begTimeOfDay:4, endTimeOfDay:6 },
                {meetingType: "lunch", dateOfTheWeek:2, begTimeOfDay:0, endTimeOfDay:2}
            ]

        },
        messages: [1, 9, 13, 19]

    },

    {id_: 3,
        name: "Christopher Lomax",
        avatar: "https://scontent-dft4-2.xx.fbcdn.net/v/t1.0-1/c15.0.160.160/p160x160/61551_10151544829482074_1038096416_n.jpg?oh=e6db2c27de7f165832e86d1e29593a06&oe=5AEB976C",
        email: "christopher@pearlbend.com",
        phone: "601-942-1500",
        friends: [2,4,5,6,7,8,9],
        setting: {
            sourceMedium: [
                {source:"gmail", connected: true},
                {source:"imessage", connected: true},
                {source: "google-calendar", connected: true}
            ],

            reminderMethod: [
                {source:"email", connected: true },
                {source:"text", connected: true}
            ],

            remindingTime: [
                {type: "First Reminder", reminderTime: "1 hour before"},
                {type: "Second Reminder", reminderTime: "Click to set"}
            ],

            meetingTime: [
                {meetingType:"coffee", dateOfTheWeek:1, begTimeOfDay:0, endTimeOfDay:1 },
                {meetingType:"coffee", dateOfTheWeek:2, begTimeOfDay:0, endTimeOfDay:2 },
                {meetingType:"drink", dateOfTheWeek:1, begTimeOfDay:4, endTimeOfDay:6 },
                {meetingType: "lunch", dateOfTheWeek:2, begTimeOfDay:0, endTimeOfDay:2},
                {meetingType: "happy hour", dateOfTheWeek:3, begTimeOfDay: 6, endTimeOfDay: 7}
            ]

        },
        messages: [5, 18]
    },

    {id_: 4,
        name: "Elon Musk",
        avatar: "https://scontent-dft4-2.xx.fbcdn.net/v/t1.0-1/p200x200/18739692_292680974525518_2821840478517507651_n.jpg?oh=4f32fcfa24d2d53cedc50b080d7b04be&oe=5AFF2D0B",
        email: "elon@tesla.com",
        phone: "662-485-5555",
        friends: [1,3,5,6,7,8,10],
        setting: {
            sourceMedium: [
                {source:"gmail", connected: true},
                {source:"imessage", connected: false},
                {source: "google-calendar", connected: true}
            ],

            reminderMethod: [
                {source:"email", connected: true },
                {source:"text", connected: true}
            ],

            remindingTime: [
                {type: "First Reminder", reminderTime: "1 hour before"},
                {type: "Second Reminder", reminderTime: "30 mins before"}
            ],

            meetingTime: [
                {meetingType:"coffee", dateOfTheWeek:1, begTimeOfDay:0, endTimeOfDay:1 },
                {meetingType:"coffee", dateOfTheWeek:2, begTimeOfDay:0, endTimeOfDay:2 },
                {meetingType:"drink", dateOfTheWeek:1, begTimeOfDay:4, endTimeOfDay:6 },
                {meetingType: "lunch", dateOfTheWeek:2, begTimeOfDay:0, endTimeOfDay:2},
                {meetingType: "happy hour", dateOfTheWeek:3, begTimeOfDay: 6, endTimeOfDay: 7}
            ]

        },
        messages: [4,11,14]
    },

    {id_: 5,
        name: "Mark Zuckerberg",
        avatar: "https://scontent-dft4-2.xx.fbcdn.net/v/t34.0-1/p160x160/16176889_112685309244626_578204711_n.jpg?oh=a0e86338b6ea9e370a785936b141588c&oe=5A53DC63",
        email: "mark@facebook.com",
        phone: "624-154-7888",
        friends: [4,3,2,6,7,9],
        setting: {
            sourceMedium: [
                {source:"gmail", connected: true},
                {source:"imessage", connected: false},
                {source: "google-calendar", connected: true}
            ],

            reminderMethod: [
                {source:"email", connected: true },
                {source:"text", connected: true}
            ],

            remindingTime: [
                {type: "First Reminder", reminderTime: "1 hour before"},
                {type: "Second Reminder", reminderTime: "30 mins before"}
            ],

            meetingTime: [
                {meetingType:"coffee", dateOfTheWeek:1, begTimeOfDay:0, endTimeOfDay:1 },
                {meetingType:"coffee", dateOfTheWeek:2, begTimeOfDay:0, endTimeOfDay:2 },
                {meetingType:"drink", dateOfTheWeek:1, begTimeOfDay:4, endTimeOfDay:6 },
                {meetingType: "lunch", dateOfTheWeek:2, begTimeOfDay:0, endTimeOfDay:2},
                {meetingType: "happy hour", dateOfTheWeek:3, begTimeOfDay: 6, endTimeOfDay: 7}
            ]

        },
        messages: [3, 6, 17]
    },

    {id_: 6,
        name: "Daisy Ridley",
        avatar: "https://scontent-dft4-2.xx.fbcdn.net/v/t1.0-1/p200x200/25594177_2043909262512056_835003401622136997_n.jpg?oh=9efd33b2aa289c8d6ed5bb1d8311a796&oe=5AECB8FB",
        email: "daisy@starwars.com",
        phone: "601-456-7894",
        friends: [5,4,3,1,8,9,10],
        setting: {
            sourceMedium: [
                {source:"gmail", connected: true},
                {source:"imessage", connected: false},
                {source: "google-calendar", connected: true}
            ],

            reminderMethod: [
                {source:"email", connected: true },
                {source:"text", connected: true}
            ],

            remindingTime: [
                {type: "First Reminder", reminderTime: "1 hour before"},
                {type: "Second Reminder", reminderTime: "Click to set"}
            ],

            meetingTime: [
                {meetingType:"coffee", dateOfTheWeek:1, begTimeOfDay:0, endTimeOfDay:1 },
                {meetingType:"coffee", dateOfTheWeek:2, begTimeOfDay:0, endTimeOfDay:2 },
                {meetingType:"drink", dateOfTheWeek:1, begTimeOfDay:4, endTimeOfDay:6 },
                {meetingType: "lunch", dateOfTheWeek:2, begTimeOfDay:0, endTimeOfDay:2},
                {meetingType: "happy hour", dateOfTheWeek:3, begTimeOfDay: 6, endTimeOfDay: 7}
            ]

        },
        messages: [10]
    },

    {id_: 7,
        name: "Ray Dalio",
        avatar: "https://scontent-dft4-2.xx.fbcdn.net/v/t1.0-1/p200x200/17951745_304991173255898_4084426348208095847_n.jpg?oh=2354064176fca219cbe6401f9783ea3b&oe=5AB612B1",
        email: "ray@principles.com",
        phone: "662-457-8864",
        friends: [5,4,3,2,9,10],
        setting: {
            sourceMedium: [
                {source:"gmail", connected: true},
                {source:"imessage", connected: false},
                {source: "google-calendar", connected: true}
            ],

            reminderMethod: [
                {source:"email", connected: true },
                {source:"text", connected: true}
            ],

            remindingTime: [
                {type: "First Reminder", reminderTime: "1 hour before"},
                {type: "Second Reminder", reminderTime: "Click to set"}
            ],

            meetingTime: [
                {meetingType:"coffee", dateOfTheWeek:1, begTimeOfDay:0, endTimeOfDay:1 },
                {meetingType:"coffee", dateOfTheWeek:2, begTimeOfDay:0, endTimeOfDay:2 },
                {meetingType:"drink", dateOfTheWeek:1, begTimeOfDay:4, endTimeOfDay:6 },
                {meetingType: "lunch", dateOfTheWeek:2, begTimeOfDay:0, endTimeOfDay:2},
                {meetingType: "happy hour", dateOfTheWeek:3, begTimeOfDay: 6, endTimeOfDay: 7}
            ]

        },
        messages: [8, 20]
    },

    {id_: 8,
        name: "Jeff Bezos",
        avatar: "https://scontent-dft4-2.xx.fbcdn.net/v/t1.0-1/p160x160/22228426_113568522731347_6093788391154668924_n.jpg?oh=18d3ee09b9f41679cf5816188abb161d&oe=5AB0D624",
        email: "jeff@amazon.com",
        phone: "545-624-1875",
        friends: [1,2,3,4,6,10],
        setting: {
            sourceMedium: [
                {source:"gmail", connected: true},
                {source:"imessage", connected: false},
                {source: "google-calendar", connected: true}
            ],

            reminderMethod: [
                {source:"email", connected: true },
                {source:"text", connected: true}
            ],

            remindingTime: [
                {type: "First Reminder", reminderTime: "1 hour before"},
                {type: "Second Reminder", reminderTime: "Click to set"}
            ],

            meetingTime: [
                {meetingType:"coffee", dateOfTheWeek:0, begTimeOfDay:0, endTimeOfDay:1 },
                {meetingType:"coffee", dateOfTheWeek:2, begTimeOfDay:5, endTimeOfDay:7 },
                {meetingType:"drink", dateOfTheWeek:2, begTimeOfDay:4, endTimeOfDay:6 },
                {meetingType: "lunch", dateOfTheWeek:3, begTimeOfDay:0, endTimeOfDay:2},
                {meetingType: "happy hour", dateOfTheWeek:3, begTimeOfDay: 6, endTimeOfDay: 7}
            ]

        },
        messages: [2, 16]
    },

    {id_: 9,
        name: "Larry Page",
        avatar: "https://scontent-dft4-2.xx.fbcdn.net/v/t1.0-1/p160x160/15267524_1009172859227961_7158778595366514356_n.jpg?oh=c7022021e6bc8c278815f4fdf8642e51&oe=5AF280B0",
        email: "larry@gmail.com",
        phone: "512-645-7854",
        friends: [7,6,5,3,1],
        setting: {
            sourceMedium: [
                {source:"gmail", connected: true},
                {source:"imessage", connected: false},
                {source: "google-calendar", connected: true}
            ],

            reminderMethod: [
                {source:"email", connected: true },
                {source:"text", connected: true}
            ],

            remindingTime: [
                {type: "First Reminder", reminderTime: "1 hour before"},
                {type: "Second Reminder", reminderTime: "Click to set"}
            ],

            meetingTime: [
                {meetingType:"coffee", dateOfTheWeek:0, begTimeOfDay:0, endTimeOfDay:1 },
                {meetingType:"coffee", dateOfTheWeek:2, begTimeOfDay:5, endTimeOfDay:7 },
                {meetingType:"drink", dateOfTheWeek:2, begTimeOfDay:4, endTimeOfDay:6 },
                {meetingType: "lunch", dateOfTheWeek:3, begTimeOfDay:0, endTimeOfDay:2},
                {meetingType: "happy hour", dateOfTheWeek:3, begTimeOfDay: 6, endTimeOfDay: 7}
            ]

        },
        messages: [7, 15]
    },

    {id_: 10,
        name: "Bill Gates",
        avatar: "https://scontent-dft4-2.xx.fbcdn.net/v/t1.0-1/p200x200/23473074_10155031875776961_8482140412038626648_n.jpg?oh=1197cfa7a2cb318e5410ffd4859ef1b8&oe=5AEE8AF7",
        email: "bill@microsoft.com",
        phone: "401-678-9875",
        friends: [1,2,4,6,7,8],
        setting: {
            sourceMedium: [
                {source:"gmail", connected: true},
                {source:"imessage", connected: false},
                {source: "google-calendar", connected: true}
            ],

            reminderMethod: [
                {source:"email", connected: true },
                {source:"text", connected: true}
            ],

            remindingTime: [
                {type: "First Reminder", reminderTime: "1 hour before"},
                {type: "Second Reminder", reminderTime: "Click to set"}
            ],

            meetingTime: [
                {meetingType:"coffee", dateOfTheWeek:2, begTimeOfDay:2, endTimeOfDay:3 },
                {meetingType:"coffee", dateOfTheWeek:1, begTimeOfDay:2, endTimeOfDay:3 },
                {meetingType:"drink", dateOfTheWeek:2, begTimeOfDay:4, endTimeOfDay:6 },
                {meetingType: "lunch", dateOfTheWeek:3, begTimeOfDay:2, endTimeOfDay:3},
                {meetingType: "happy hour", dateOfTheWeek:3, begTimeOfDay: 6, endTimeOfDay: 7}
            ]

        },
        messages: []
    },

];

module.exports = Users;
