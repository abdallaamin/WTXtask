import { ExpansionPanel, ExpansionPanelDetails, ExpansionPanelSummary, Typography } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';



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
            {faq.map((f) => (
                <ExpansionPanel key={f.id}>
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                    >
                        <Typography>{f.question}</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Typography>{f.answer}</Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            ))}
        </div>
    );
}

