import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import "./experience.css"

const Experience = () => {
    return (
        <section className="experience">
            <h1 className="experience-title">Mon parcours</h1>
            <VerticalTimeline lineColor="#057575">
                <VerticalTimelineElement className='vertical-timeline-element--education'
                    date='2022-2023'
                    iconStyle={{ background: "#057575", color: "#fff" }}
                    icon={<SchoolIcon />}
                >
                    <h3 className='vertical-timeline-element-title'> OpenClassrooms</h3>
                    <p>Formation Développeur Web</p>
                </VerticalTimelineElement>

                <VerticalTimelineElement className='vertical-timeline-element--work'
                    date='2020-2022'
                    iconStyle={{ background: "#9e6fe3", color: "#fff" }}
                    icon={<WorkIcon />}
                >
                    <h3 className='vertical-timeline-element-title'> Education Nationale</h3>
                    <p>Professeur des écoles</p>
                </VerticalTimelineElement>

                <VerticalTimelineElement className='vertical-timeline-element--work'
                    date='2019-2020'
                    iconStyle={{ background: "#9e6fe3", color: "#fff" }}
                    icon={<WorkIcon />}
                >
                    <h3 className='vertical-timeline-element-title'> Sénat</h3>
                    <p>Assistant Sénatorial</p>
                </VerticalTimelineElement>

                <VerticalTimelineElement className='vertical-timeline-element--education'
                    date='2017-2019'
                    iconStyle={{ background: "#057575", color: "#fff" }}
                    icon={<SchoolIcon />}
                >
                    <h3 className='vertical-timeline-element-title'> Université Paris X - Nanterre</h3>
                    <p>Master d'Histoire spé Relation Internationales</p>
                </VerticalTimelineElement>

                <VerticalTimelineElement className='vertical-timeline-element--education'
                    date='2014 - 2017'
                    iconStyle={{ background: "#057575", color: "#fff" }}
                    icon={<SchoolIcon />}
                >
                    <h3 className='vertical-timeline-element-title'> Université Paris X - Nanterre</h3>
                    <p>Licence d'Histoire</p>
                </VerticalTimelineElement>

            </VerticalTimeline>
        </section>
    )
}

export default Experience