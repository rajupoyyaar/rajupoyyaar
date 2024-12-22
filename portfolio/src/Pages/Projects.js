import React from "react";
import way4arts from "../Images/way4arts.png";
import notesapp from "../Images/notesapp.png";
import "./projects.css";
import { Card, CardContent, CardMedia, Typography, Grid, Button } from "@mui/material";

function Projects() {
    const projects = [
        {
            title: "Notes App",
            image: notesapp,
            hostedLink: "https://notes-app-f730b.web.app/",
            githubLink: "https://github.com/rajupoyyaar/Notes",
            description: "A simple and efficient notes application built with React, Node.js, Express, and MongoDB."
        },
        {
            title: "Way4Arts",
            image: way4arts,
            hostedLink: "https://way4-arts.web.app/",
            githubLink: "https://github.com/rajupoyyaar/Way4Arts",
            description: "A platform for artists and enthusiasts to connect, share, and purchase art."
        }
    ];

    return (
        <div className="projects-container" style={{ padding: "20px" }}>
            <Typography variant="h4" align="center" gutterBottom>
                Projects
            </Typography>
            <Grid container spacing={4}>
                {projects.map((project, index) => (
                    <Grid item xs={12} sm={6} md={6} key={index}>
                        <Card>
                            <CardMedia
                                component="img"
                                height="300"
                                image={project.image}
                                alt={project.title}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {project.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {project.description}
                                </Typography>
                                <div style={{ marginTop: "10px" }}>
                                    <Button
                                        size="small"
                                        color="primary"
                                        href={project.hostedLink}
                                        target="_blank"
                                    >
                                        View Project
                                    </Button>
                                    <Button
                                        size="small"
                                        color="secondary"
                                        href={project.githubLink}
                                        target="_blank"
                                    >
                                        GitHub Repo
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}

export default Projects;
