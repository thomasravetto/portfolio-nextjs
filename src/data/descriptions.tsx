export interface IDescriptions {
    title: string,
    images: IImage[],
    description: string,
    key_features: string;
    tech: string[],
}

interface IImage {
    src: string,
    label: string
}

export const descriptions: Record<string, IDescriptions> = {
    "trading_sim" : {
        "title": 'CandleTrade - Trading Simulator',
        "images": [{"src": "/projects/trading/presentation/1.mp4", "label": ""},{"src": "/projects/trading/presentation/2.jpeg", "label": "Login Page"}, {"src": "/projects/trading/presentation/3.jpeg", "label": "Stock Chart"}, {"src": "/projects/trading/presentation/4.jpeg", "label": "Buying new shares"}, {"src": "/projects/trading/presentation/5.jpeg", "label": "Dashboard"}, {"src": "/projects/trading/presentation/6.jpeg", "label": "Transactions"}],
        "description": `CandleTrade is a Trading Simulator that allows you to trade and analyse Stocks.
                        You can create an account and save assets in the DashBoard watchlist to keep track of their price or analyse stock prices in the market graph. It works by communicating with Alpha Vantage API and by formatting the data into a graph.
                        The transactions are stored in a secure PostgreSQL database and allow the user to trade stocks and see the balance price changing (hopefully increasing in value).`,
        "key_features": `User Authentication: Thanks to a PostgreSQL, users can easily register and login on this app, keeping track of transactions, watchlist and portofolio.
                         OAuth 2.0: If you prefer, you can access this application by using your Google or GitHub account.
                         Market: The prices of the assets can be seen in real-time in the Market section, data is taken from an API and formatted into graphs, you can easily buy or sell stocks based on the real-time data.
                         Watchlist: By storing the users favorite assets in the Database, the prices can be easily monitored from the watchlist.
                         Portfolio: All the assets owned by the user are stored in the portfolio, as well as every transaction that took place.`,
        "tech": ["node", "react", "postgres"]
    },
    "chat_app" : {
        "title": 'FlashChat - Real-Time Chat Application',
        "images": [{"src": "/projects/chat/presentation/1.mp4", "label": ""}, {"src": "/projects/chat/presentation/2.jpeg", "label": "Login Page"}, {"src": "/projects/chat/presentation/3.jpeg", "label": "Chat Feed"}],
        "description": `FlashChat is a web application that allows you to chat in real-time with your friends all over the world.
                        All you need to do is create an account, send a friend request and (if it gets accepted) create a new chat.`,
        "key_features": `User Authentication: Thanks to a PostgreSQL, users can easily register and login on this app, keeping track of their conversations!
                        OAuth 2.0: If you prefer, you can access this application by using your Google account.
                        Friend Requests: If you want to chat with a friend, all you have to do is to search for its name and send a friend request. Your friend will now have the power to choose to accept it or to refuse it.
                        Chatting: New chats can be created with your new friends.
                        Real-Time Messaging: By using a Socket, the messages are sent and received in real-time.`,
        "tech": ["node", "react", "postgres"]
    },
    "nasa_app" : {
        "title": 'NASA Project - Zero To Mastery',
        "images": [{"src": "/projects/nasa/presentation/1.jpeg", "label": "Dashboard"}],
        "description": `Smart Brain is the final Project of a course I have completed called Zero To Mastery: Complete Web Developer.
                        It allows to detect a face in the photo you paste the link of. It works by sending the photo to the Clarifai Face Recognition API and by using the data returned to 'draw' a rectangle of the person's face.`,
        "key_features": `User Authentication: With the use of a database, users can login or register and keep track of how many faces they found!
                        API Communication: The app uses Third-Party API to recognize the faces in the photo.`,
        "tech": ["node", "react", "postgres"]
    },
    "budgeting_app" : {
        "title": 'Budget-It - Budgeting application',
        "images": [{"src": "/projects/budget/presentation/1.jpeg", "label": "Login Page"}, {"src": "/projects/budget/presentation/2.jpeg", "label": "Dashboard"}],
        "description": `Budget-It is a web application created to help you keep track of your finances.
                        With Budget-It you can analyse your financial situation by tracking expenses and creating a savings vault.`,
        "key_features": `User Authentication: With the use of a database, this application allows user to create an account to keep track of their records overtime.
                        Balance: You can add funds to your account and see your overall financial situation, keeping track of your income and expenditure.
                        Savings: In Saving, you can add funds to the savings valut, you can even create some 'targets' to help you stay motivate in your savings journey.
                        Transactions: You can add all the transactions that you want to keep track of, allowing you to see the price and the category.`,
        "tech": ["node", "react", "postgres"]
    },
    "youtify" : {
        "title": 'Youtify - Youtube to Spotify converter',
        "images": [{"src": "/projects/youtify/presentation/1.jpeg", "label": "Login Page"}, {"src": "/projects/youtify/presentation/2.jpeg", "label": "Transfer Page"}, {"src": "/projects/youtify/presentation/3.jpeg", "label": "Success Page"}],
        "description": `Youtify is the final project built for the first course I have completed, called CS50.
                        If you want to transfer all the songs in your Youtube playlist to Spotify but don't have time, this app may be built for you. By communicating with the Youtube and Spotify API, it formats all the songs contained in the former playlist and transfers them to the latter.`,
        "key_features": `User Authentication: Thanks to a PostgreSQL, users can easily register and login on this app.
                        Playlist tranfer: Once the playlist URL has been pasted in the form, the app will communicate with the APIs and transfer the songs.`,
        "tech": ["node", "react", "postgres"]
    },
}

export function getDescriptionsPaths () {
    const paths = Object.keys(descriptions);

    return paths.map((path) => {
        return {
            params: {
                project_name: path,
            },
        };
    });
}

export function getDescriptionsData (project_name: string) {
    if (project_name in descriptions) {
        const projectData = descriptions[project_name];

       return projectData;
    }

    return null;
}