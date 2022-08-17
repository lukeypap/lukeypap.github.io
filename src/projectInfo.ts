import dijkstraScreenshot from "./resources/Screenshot 2022-08-17 205624.png";
import ticketSystemScreenshot from "./resources/ticket-systemss.png";

export const projectList = [
    {
        name: "Ticket System",
        description:
            "A simple ticket system that is used to track bugs and issues. Has a user management system with authentication.",
        techUsed: ["React", "NestJS", "Postgresql", "ChakraUI"],
        screenshotLocation: ticketSystemScreenshot,
    },
    {
        name: "Dijkstra visualization",
        description:
            "A node based visualization of Dijkstra's algorithm using a start node and end node with the ability to add walls.",
        techUsed: ["React", "Styled Components"],
        screenshotLocation: dijkstraScreenshot,
    },
    {
        name: "Tic-Tac-Toe with Minimax",
        description: "A classic game with the Minimax searching algorith implemented.",
        techUsed: ["Java"],
        screenshotLocation: dijkstraScreenshot,
    },
];
