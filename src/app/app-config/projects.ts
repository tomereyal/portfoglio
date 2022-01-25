import { IProject } from "../../typings/project";

const TOP_TRIPS: IProject = {
  title: "Top Trips",
  thumbnail: "https://i.ibb.co/fvMZk7Y/image.png",
  stacks: [
    "React",
    "RTK Query",
    "Typescript",
    "MySQL",
    "Socket.io",
    "Node-Express",
    "ANT Design",
  ],
  path: "/top-trips",
  link: "https://hardcore-lamport-5db0cf.netlify.app/",
  githubLinkClient: "https://github.com/tomereyal/topTripsClient",
  githubLinkServer: "https://github.com/tomereyal/topTripsServer",
  description: "An app for surveying the top trips chosen by its users.",
  features: [
    {
      img: "https://i.ibb.co/bJNDVbq/image.png",
      title: "User-Only Autherization & Refresh Token Based Security",
      bulletins: [
        "Implements an extra layer of security, using JWT expiring access tokens & JWT refresh tokens regulated by the database and stored as session cookies so long user doesn't log out.",
        "Offers admin-only feature for autherized users, enabling basic CRUD operations on vacations and a stat chart with top vacations.",
      ],
    },
    {
      img: "https://i.ibb.co/cxBR4pK/image.png",
      title: "Admin only features",
      bulletins: [
        "Offers admin-only feature for autherized users, enabling basic CRUD operations on vacations and a stat chart with top vacations.",
      ],
    },
    {
      img: "https://i.ibb.co/2K9GjCy/toptrips-Img.png",
      title: "Subscription For Live Changes In Trips",
      bulletins: [
        "Incorporates web sockets (socket.io) to subcribe clients to live changes in vacations they follow using room joins on server and Redux Toolkit Queries streaming methods on client.",
      ],
    },
    {
      img: "https://i.ibb.co/RbXvpMm/image.png",
      title: "Mobile-First Approach & ANT Design",
      bulletins: [
        "Designed with a 'mobile-first' approach for screen scalability and device compatibility.",
      ],
    },
  ],
};

const SUPERMARKET: IProject = {
  title: "Supermarket",
  thumbnail:
    "https://res.cloudinary.com/dgt2lqdp3/image/upload/v1642791240/supermarketSapshot2_gqlfuu.png",
  path: "/supermarket",
  link: "https://stupefied-joliot-a6dbe1.netlify.app",
  githubLinkClient: "https://github.com/tomereyal/supermarket-angular-ngrx",
  githubLinkServer: "https://github.com/tomereyal/supermarket-server",
  description:
    "An online website for easily selecting and ordering your groceries.",
  stacks: [
    "Angular",
    "NGRX",
    "MongoDB",
    "Mongoose",
    "Node-Express",
    "Typescript",
    "StripeJs",
  ],
  features: [
    {
      title: "Supermarket REST-API with MVC-Structure",
      bulletins: [
        "Implements NodeJS Express Server & Typscript for routing and controls.",
        "Implements MongoDB as database with a connection to mongoDB Atlas, and Mongoose for Model queries and Schema control.",
        "JWT-based authentication middleware for each API call allowing for admin-only API actions.",
      ],
      img: "",
    },
    {
      title: "Cloudinary Usage As Image Storage Service",
      bulletins: [
        "Admin only feature for creating and updating product images is enabled through incorporation of cloudinary on the server.",
      ],
      img: "",
    },
    {
      title: "Backend-Server Deployed On Heroku",
      bulletins: [
        "Server built and deployed on a free hosting server using Heroku & Git.",
      ],
      img: "",
    },
    {
      title: "Data Structures & Efficiency",
      bulletins: [
        "NGRX for global state management.",
        "Usage of RXJS's Observeables & Pipes.",
        "Separation of component groups into modules for lazily loading only on call.",
        "Hash Map Data structures for cart items instead array, decreased time complexity for various actions",
      ],
    },
    {
      title: "Material-UI Based Design & Angular Decorators and Directives",
      bulletins: [
        "Implementation of Angular's Reactive Forms Module with async and sync error validation and loading state depiction.",
        "Incorporation of Material UI components and design.",
        "Designed with a 'mobile-first' approach for screen scalability and device compatibility.",
      ],
    },
    {
      title: "Angular's Service Injection For Back-end Communication",
      bulletins: [
        "Implementation of Angular's HTTP Module and RXJS princples for building services connected to app component's data requests, global state action dispatching and API of backend-server.",
      ],
    },
    {
      title: "File Handling",
      bulletins: [
        "Optional retrieval of customer's order receipt as a PDF file following a successful payment.",
      ],
    },
    {
      title: "Security & Access Control",
      bulletins: [
        "Access control using JWT tokens permitting entrance only to logged in customers or admins.",
        "Incorporation of Stripe API for credit card validation and payment confirmation for securing customer-credentials.",
      ],
    },
  ],
};

export const projects: Array<IProject> = [
  {
    title: "Note Buddy",
    thumbnail:
      "https://i1.wp.com/s1.wp.com/wp-content/themes/h4/landing/marketing/pages/hp-jan-2020-v2/media/desktop/desktop-website-v2.jpg?ssl=1",
    stacks: ["React", "MongoDB", "Mongoose", "Slate.Js"],
    description: "Not currently available",
    path: "/note-buddy",
  },

  TOP_TRIPS,
  SUPERMARKET,
];
