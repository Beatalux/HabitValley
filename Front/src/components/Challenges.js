import gotogym from "../images/gotogym.png";
import jogging from "../images/jogging.png";
import meditation from "../images/meditation.jpg";
import readaloud from "../images/readaloud.png";
import wordsaday from "../images/wordsaday.png";

export const languageChallenges = [
    {   category:"language",
        id: 0,
        title: "10 words a day",
        image: wordsaday,
        type: "community",
        frequency: "daily",
        member: "120",
        startDate: "Today",
        price: "Free",
        coach: true
    },
    {category:"language",
        id: 1,
        title: "Read Aloud",
        image: readaloud,
        type: "1:1",
        frequency: "twice a day",
        member: "52",
        startDate: "Monday",
        price: "Paid",
        coach: false
    },
    {category:"language",
        id: 2,
        title: "20 words a day",
        image: wordsaday,
        type: "community",
        frequency: "daily",
        member: "33",
        startDate: "Today",
        price: "Free",
        coach: false
    },
]

export const healthnWellnessChallenges = [
    {   id: 0,
        title: "Jogging",
        image: jogging,
        type: "community",
        frequency: "daily",
        member: "120",
        startDate: "Thursday",
        price: "Free",
        coach: false
    },
    {   id: 1,
        title: "Go to Gym",
        image: gotogym,
        type: "1:1",
        frequency: "twice a day",
        member: "52"
    },
    {
        id: 2,
        title: "Meditation",
        image: meditation,
        type: "community",
        frequency: "daily",
        member: "33"
    },
]

export const recommendedChallenges = [
    {
        title: "Jogging",
        image: jogging,
        type: "community",
        frequency: "daily",
        member: "120",
        startDate: "Thursday",
        price: "Free",
        coach: false
    },
    {
        title: "20 words a day",
        image: wordsaday,
        type: "community",
        frequency: "daily",
        member: "33",
        startDate: "Today",
        price: "Free",
        coach: true
    },
    {
        title: "Read Aloud",
        image: readaloud,
        type: "1:1",
        frequency: "twice a day",
        member: "52",
        startDate: "Monday",
        price: "Paid",
        coach: false
    },

]