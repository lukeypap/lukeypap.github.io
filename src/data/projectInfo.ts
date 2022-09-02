import dijkstraScreenshot from "../resources/Screenshot 2022-08-17 205624.png";
import ticketSystemScreenshot from "../resources/ticket-systemss.png";
import ticketSystemScreenshot1 from "../resources/ticket-systemss1.png";
import ticketSystemScreenshot2 from "../resources/ticket-systemss2.png";
import ticketSystemScreenshot3 from "../resources/ticket-systemss3.png";
import ttt1 from "../resources/ttt1.png";
import ttt2 from "../resources/ttt2.png";
import ttt3 from "../resources/ttt3.png";
import ttt4 from "../resources/ttt4.png";
import pathfinder1 from "../resources/pathfinder1.png";
import pathfinder2 from "../resources/pathfinder2.png";
import pathfinder3 from "../resources/pathfinder3.png";

export const projectList = [
    {
        name: "Ticket System",
        description:
            "A simple ticket system that is used to track bugs and issues. Has a user management system with authentication. Demo unavailable as this is still under development.",
        techUsed: ["React", "NestJS", "Postgresql", "ChakraUI", "NextJs"],
        screenshotLocation: [
            ticketSystemScreenshot,
            ticketSystemScreenshot1,
            ticketSystemScreenshot2,
            ticketSystemScreenshot3,
        ],
        githubLink: "https://github.com/lukeypap/ticket-system",
        demo: {
            demoLink: "",
            demoable: true,
        },
    },
    {
        name: "Tic-Tac-Toe with Minimax",
        description:
            "My first project, initially starting as a Java command line app, I loved building this one which really ignited my passion for coding so it only made sense to come back to this project and create a web version using React and Tailwind CSS for styling.",
        techUsed: ["Java", "React", "Tailwind CSS", "Vite"],
        screenshotLocation: [ttt1, ttt2, ttt3, ttt4],
        githubLink: "https://github.com/lukeypap/Tic-Tac-Toe-React",
        demo: {
            demoLink: "https://lukeypap.github.io/Tic-Tac-Toe-React/",
            demoable: true,
        },
    },
    {
        name: "Dijkstra visualization",
        description:
            "A node based visualization of Dijkstra's algorithm using a start node and end node with the ability to add walls.",
        techUsed: ["React", "Styled Components"],
        screenshotLocation: [pathfinder1, pathfinder2, pathfinder3, dijkstraScreenshot],
        githubLink: "https://github.com/lukeypap/path-finder",
        demo: {
            demoLink: "https://lukeypap.github.io/path-finder/",
            demoable: true,
        },
    },
];
