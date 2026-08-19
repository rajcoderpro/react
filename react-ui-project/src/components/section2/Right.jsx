import React from 'react'
import Card from './sec2components/Card'
const data = [
  {
    image_url: "https://images.unsplash.com/photo-1560250097-0b93528c311a",
    heading: "Software Engineer",
    para: "Builds scalable applications using modern technologies while focusing on performance, clean architecture, testing, and reliability.",
    tag: "Code",
  },
  {
    image_url: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2",
    heading: "UI/UX Designer",
    para: "Creates intuitive interfaces through research, visual design, prototyping, and thoughtful user-centered experiences.",
    tag: "Design",
  },
  {
    image_url: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    heading: "Data Scientist",
    para: "Analyzes datasets and builds predictive models to discover insights and support better business decisions.",
    tag: "Data",
  },
  {
    image_url: "https://images.unsplash.com/photo-1580489944761-15a19d654956",
    heading: "Frontend Developer",
    para: "Creates responsive interfaces using modern frameworks while ensuring accessibility, speed, and consistent experiences.",
    tag: "Web",
  },
  {
    image_url: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7",
    heading: "Backend Developer",
    para: "Develops secure APIs, databases, and server systems focused on scalability, performance, and reliability.",
    tag: "Server",
  },
  {
    image_url: "https://images.unsplash.com/photo-1573496799515-eebbb63814f2",
    heading: "Cloud Engineer",
    para: "Manages cloud infrastructure and deployment systems while improving scalability, security, reliability, and performance.",
    tag: "Cloud",
  },
  {
    image_url: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce",
    heading: "Cybersecurity Analyst",
    para: "Protects systems by monitoring threats, identifying vulnerabilities, investigating incidents, and implementing security controls.",
    tag: "Cyber",
  },
  
];
const Right = () => {
  return (
    <div className="right w-[70%] px-2 py-5 flex gap-3  overflow-auto  ">
            {data.map((elem,idx) =>  (
              <Card 
              key = {idx}
              image_url={elem.image_url } 
              index = {idx+1}
              heading = {elem.heading}
              para = {elem.para}
              tag = {elem.tag} />
            ))}
        </div>
  )
}

export default Right
