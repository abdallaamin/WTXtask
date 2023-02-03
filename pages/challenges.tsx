import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const faq = [
    {
        id: 1,
        question: "What steps would you take to make this code better?",
        answer:"so first i started by cleaning all the redundunt and repeated code , and then i tried to but layout component that contains the main layout for the website and wrapped my app with it , and then i tried fixing and organizing more the way data fetched , by implementing SSR( server side rendering) and thinking of caching library , i tried not to use alotr of 3rd party library so not to increase the load time ",
    },
    {
        id: 2,
        question: "Have you found any red- flags?",
        answer: "alot of useEffect without dependency , same for useCall back no depencies at all , the way that fetching data and updating the states accordingly ",
    },
    {
        id: 3,
        question: "If you were pairing with a junior dev, what would be your initial steps to start fixing this?",
        answer: "first of as i am always having an agile mind set , for whatever project i am working on , i started by going through the code , and then identifing the possible challnges or pain points , and then i had my very one kinda of small back log , with all UI implementation , and then functuinality , and by having a view of possible tickets , i started to work on them one by one , if i am pairing with a junior , i would discuss few of the tickets and then propably assign few of the simple ui and functionality task , like working on modal component or one of the needed fullfilling components , and also i did setup a github repo with a deployment enviroment and deploytment pipeline , and tried to commit each time i finsh something and then , so if i am pairing with a junior he can setup the repo and keep pushing as well once he commits . CI/CD always  ",
    },
    {
        id: 4,
        question: "What do you see as the major issues on this code?",
        answer: "to much redundant code , also so much useEffect with no dependencies or the wrong one , use call back with no dependencies as well , over all the way the fetching data . the way it perform the search without using query params or forward binding for updating the queries param the way it loads the images , we can use lazy loading for that ",
    },
    {
        id:5,
        question: "Do you identify any bugs by looking at the code (and seeing it working)?",
        answer: "there is so much of redundant code , and repeated code , all the repeated useEffect , and so many useEffect without the right dependency , also the naming and api routes design can be enhanced ",
    },
    {
        id: 6,
        question: "What would you do to debug these problems with flashes while searching?",
        answer: "to debug the problem , i got to use the dev tools to analyze from network tab , what is the request that is done , by doing that and From what i have seen on index.js i think it happnes as we fetch the data  inside the useEffect  and updating status which is not ideal ,also as there is so much use effect each for doing the same kinda of stuff . so my first thought  was to clean all the useEffect that is not wanted and then we can use built features on Next js like Serverside rendring ( SSR) to fetch the data on the server side and then if we want to optimize more , we can use cashing library to cash the data and only load when needed , like React Query or SWR --> for me i decided to use SWR as its type script supported , light weight and fits the use case",
    }
]

const possiblefaq = [
    {
        id: 11,
        question: `If the filters selected are "brand=mercedes" and "model = actros" we want to send to the backend the query parameter "promotion = true". How would you proceed?`,
        answer: "first we will have to extract the query parames and check if they are equal top the desired brand and model , then we will push a new query param with promotion and as well will do a post request to our api route to add this paramter when the conditions are met",
    },
    {
        id: 12,
        question: "How would you fix the login bug currently happening?",
        answer: "So i had a look on current login page , and noticed he is saving the input as user name and password , and then it ges send to the api created in auth.ts api route toi validate if its the right user name and password , tbh i checked the input is recorded and gets delivered to the endpoint and the validation is always wrong , i kinda didnt have enough time to fix complelety , i would need more time to debug it even more ",
    },
    {
        id: 13,
        question: "Assuming that the authentication bug is fixed (and that we get a token on the `/api/auth` request), how would you handle the authentication state to guarantee that the my-account page works?",
        answer: "i would useContext so i can make sure the authenticated page is when user loged in and keeping the status as logged in , maybe save the login status on local storage for astart and then useContext for more organized way ",
    },
    {
        id: 14,
        question: "Have you checked the loading state? What would be your approach to improve it? ",
        answer: "first on top of my head we can use a styled sekelton componet for a start to load instead of the app is loading",
    },
    {
        id: 15,
        question: "If you had to make this page faster, what would you do?",
        answer: "",
    },
    {
        id: 16,
        question: "Imagine you had a loader implemented on the search page, but now you want to use it in multiple other pages, what would you do?",
        answer: "",
    },
    {
        id: 17,
        question: "Any tools/approaches you would use to make this code better?",
        answer: "",
    },
    {
        id: 86,
        question: "What do you think in missing in order to make this code reach production?",
        answer: "i tried to deployed on production ",
    }

]

interface FaqProps {
}

export default function Faq() {
    return (
        <div>
            <h3>The challenge</h3>
            {
                faq.map((f , index) => (
                <div key={index}>
            <Accordion >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>{f.question}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        {f.answer}
                    </Typography>
                </AccordionDetails>
            </Accordion>
            </div>
                ))
            }

            <h3>Possible challenges</h3>
            {
                possiblefaq.map((f, index) => (
                    <div key={index}>
                        <Accordion >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography>{f.question}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <code>
                                    {f.answer}
                                </code>
                            </AccordionDetails>
                        </Accordion>
                    </div>
                ))
            }
        </div>
    );
}
