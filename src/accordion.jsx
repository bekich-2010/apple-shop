import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


export default function AccordionUsage() {

    let arr = [
        {
            id: 1,
            title: "Hello",
            text: [
                {
                    model: "Iphone12"
                },
                {
                    model: "Iphone 13"
                }
            ]
        },
        {
            id: 2,
            title: "Hello",
            text: "Hi everybody here id Markiplayer"
        },
        {
            id: 3,
            title: "Hello",
            text: "Hi everybody here id Markiplayer"
        },
        {
            id: 4,
            title: "Hello",
            text: "Hi everybody here id Markiplayer"
        }
    ]

    return (
        <div>
            {
                arr.map((item) => (
                    <Accordion key={item.id}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                        >
                            {item.title}
                        </AccordionSummary>
                        <AccordionDetails>
                            {item.text.model}
                        </AccordionDetails>
                    </Accordion>
                ))

            }
        </div>
    );
}