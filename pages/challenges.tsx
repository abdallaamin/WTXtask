import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const faq = [
    {
        id: 1,
        question: "what is your name b2aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa?",
        answer:"amin",
    },
    {
        id: 2,
        question: "what is your name?",
        answer: "bina",
    }
]

interface FaqProps {
}

export default function Faq() {
    return (
        <div>
            {
                faq.map((f) => (
            <div>
            <Accordion key={f.id}>
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
