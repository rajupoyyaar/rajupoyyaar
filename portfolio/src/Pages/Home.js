import React,{useEffect,useState} from "react"
import "./home.css"
import profile from "../Images/profile.jpg"
import { Card, CardContent, CardMedia, Typography, Grid } from "@mui/material";
import Projects from "./Projects";
import Contact from "./Contact";

function Home(){
    const [technologies, setTechnologies] = useState([]);
    console.log(technologies)
    useEffect(()=>{
        const fetchData = async()=>{
            try{
                const response = await fetch("https://rajupoyyaar.onrender.com/api/technologies")
                const data = await response.json();
                setTechnologies(data)
            }
            catch(err){
                console.log(err)
            }        
        }
        fetchData()
    }, [])
    return(
        <>
         <div className="hero">
            <div className="profile">
                <img src={profile} alt="proflie-pic" width="300px"/>
            </div>
            <div className="about-profile">
                <p style={{textIndent: "60px"}}>Hi, I’m <b>Raju Poyyaar</b>, a passionate web developer based in Chennai with 1.2 years of experience in building interactive and scalable web applications. My expertise lies in <b>React.js</b>, <b>Firebase</b>, and <b>JavaScript,</b> along with a solid understanding of backend technologies like <b>Node.js</b>, <b>Express</b>, and <b>MongoDB</b>. </p>
                <p>I thrive on crafting intuitive user interfaces, optimizing application performance, and delivering seamless user experiences. Whether it's front-end development or backend integration, I am driven by the challenge of solving complex problems with elegant solutions.</p>
            </div>
         </div>

         <div className="technologies">
            <h3>I created endpoint to fetch my familiar Technologies</h3>
            <p>https://rajupoyyaar.onrender.com/api/technologies</p>   
            <div className="technology-grid">
                <h2>My Familiar Technologies are</h2>
                <Grid container spacing={2}>
                {technologies.map((tech) => (
                <Grid item xs={12} sm={6} md={4} key={tech._id}>
                    <Card>
                        <CardMedia
                        component="img"
                        width={10}
                        image={tech.image}
                        alt={tech.title}
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {tech.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {tech.description}
                        </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                ))}
                </Grid> 
            </div>        
         </div>
         <Projects />
         <Contact />
        </> 
    )
}

export default Home