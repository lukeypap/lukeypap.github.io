import dijkstraScreenshot from "../resources/Screenshot 2022-08-17 205624.png";
import ticketSystemScreenshot from "../resources/ticket-systemss.png";
import ticketSystemScreenshot1 from "../resources/ticket-systemss1.png";
import ticketSystemScreenshot2 from "../resources/ticket-systemss2.png";
import ticketSystemScreenshot3 from "../resources/ticket-systemss3.png";

export const projectList = [
    {
        name: "Ticket System",
        description:
            "A simple ticket system that is used to track bugs and issues. Has a user management system with authentication.",
        techUsed: ["React", "NestJS", "Postgresql", "ChakraUI"],
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
        name: "Dijkstra visualization",
        description:
            "A node based visualization of Dijkstra's algorithm using a start node and end node with the ability to add walls.",
        techUsed: ["React", "Styled Components"],
        screenshotLocation: [dijkstraScreenshot],
        githubLink: "https://github.com/lukeypap/path-finder",
        demo: {
            demoLink: "/path-finder",
            demoable: true,
        },
    },
    {
        name: "Tic-Tac-Toe with Minimax",
        description: "A classic game with the Minimax searching algorith implemented.",
        techUsed: ["Java"],
        screenshotLocation: [dijkstraScreenshot],
        githubLink: "https://github.com/lukeypap/Tic-Tac-Toe-with-Minimax",
        demo: {
            demoLink: "",
            demoable: false,
        },
    },
];
