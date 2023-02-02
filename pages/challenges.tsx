import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const faq = [
    {
        id: 1,
        question: "what is your name?",
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
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>Accordion 1</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography>Accordion 2</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}
// {
//     faq.map((f) => (
//         <ExpansionPanel key={f.id}>
//             <ExpansionPanelSummary
//             >
//                 <Typography>{f.question}</Typography>
//             </ExpansionPanelSummary>
//             <ExpansionPanelDetails>
//                 <Typography>{f.answer}</Typography>
//             </ExpansionPanelDetails>
//         </ExpansionPanel>
//     ))
// }
