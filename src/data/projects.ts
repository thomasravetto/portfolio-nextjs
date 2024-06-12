export interface IProject {
    id: number,
    image_path: string
    date: string
    title: string,
    subtitle: string,
    slug: string
}

export const projects: IProject[] = [
    {
        id: 1,
        image_path: '/projects/youtify/Portfolio.jpeg',
        date:'Oct 2022',
        title: 'Youtify - Youtube to Spotify converter',
        subtitle: "This was the final project of the Harvard's CS50 Course that I have taken. \nIt allows users to convert youtube playlist into spotify playlists.",
        slug: "youtify"
    },
    {
        id: 2,
        image_path: '/projects/budget/Portfolio.jpeg',
        date:'Gen 2023',
        title: 'Budget-It - Budgeting application',
        subtitle: 'Allow users to create an account and keep track of all their expenses. \nUsers can put money into a savings account and create new targets.',
        slug: "budgeting_app"
    },
    {
        id: 3,
        image_path: '/projects/face/Portfolio.jpeg',
        date:'Nov 2023',
        title: 'Smart Brain - Zero To Mastery',
        subtitle: 'This was the final project of a course I completed called Zero To Mastery: Complete Web Developer. \nIt allows users to upload a photo and uses an API to recognize the faces in it.',
        slug: "smart_brain"
    },
    {
        id: 4,
        image_path: '/projects/nasa/Portfolio.jpeg',
        date:'Feb 2024',
        title: 'NASA Project - Zero To Mastery',
        subtitle: 'This was the final project of a course I completed called Zero To Mastery: Complete Node.js Developer. \nIt allows users to program future space launches to habitable exoplanets with rockets produced by Space X.',
        slug: "nasa_app"
    },
    {
        id: 5,
        image_path: '/projects/chat/Portfolio.jpeg',
        date:'Sep 2023',
        title: 'FlashChat - Real-Time Chat Application',
        subtitle: 'A chat application that allows you to create an account, send friend requests to other users and start a chat with them. \nThe messages are sent in real time thanks to a Socket connection.',
        slug: "chat_app"
    },
    {
        id: 6,
        image_path: '/projects/trading/Portfolio.jpeg',
        date:'Dec 2023',
        title: 'CandleTrade - Trading Simulator',
        subtitle: 'A trading simulator that allows you to buy and sell stocks. \n In the Dashboard users can analyse their portfolio and the assets added to the watchlist.',
        slug: "trading_sim"
    },
    {
        id: 7,
        image_path: '/projects/trading/Portfolio.jpeg',
        date:'Now...',
        title: 'Want to embark on this journey with me?',
        subtitle: 'Contact Me',
        slug: "#contacts"
    },
]