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
        answer:"amin",
    },
    {
        id: 2,
        question: "Have you found any red- flags?",
        answer: "bina",
    },
    {
        id: 3,
        question: "If you were pairing with a junior dev, what would be your initial steps to start fixing this?",
        answer: "bina",
    },
    {
        id: 4,
        question: "What do you see as the major issues on this code?",
        answer: "bina",
    },
    {
        id:5,
        question: "Do you identify any bugs by looking at the code (and seeing it working)?",
        answer: "bina",
    },
    {
        id: 6,
        question: "What would you do to debug these problems with flashes while searching?",
        answer: "bina",
    }
]

const possiblefaq = [
    {
        id: 1,
        question: `If the filters selected are "brand=mercedes" and "model = actros" we want to send to the backend the query parameter "promotion = true". How would you proceed?`,
        answer: "amin",
    },
    {
        id: 2,
        question: "How would you fix the login bug currently happening?",
        answer: "bina",
    },
    {
        id: 3,
        question: "Assuming that the authentication bug is fixed (and that we get a token on the `/api/auth` request), how would you handle the authentication state to guarantee that the my-account page works?",
        answer: "bina",
    },
    {
        id: 4,
        question: "Have you checked the loading state? What would be your approach to improve it? ",
        answer: "bina",
    },
    {
        id: 5,
        question: "If you had to make this page faster, what would you do?",
        answer: "bina",
    },
    {
        id: 6,
        question: "Imagine you had a loader implemented on the search page, but now you want to use it in multiple other pages, what would you do?",
        answer: "bina",
    },
    {
        id: 7,
        question: "Any tools/approaches you would use to make this code better?",
        answer: "bina",
    },
    {
        id: 86,
        question: "What do you think in missing in order to make this code reach production?",
        answer: "bina",
    }

]

interface FaqProps {
}

export default function Faq() {
    return (
        <div>
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
                faq.map((f, index) => (
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
        </div>
    );
}
