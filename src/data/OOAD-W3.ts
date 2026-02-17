// CPE362 OOAD Mock Exam - Week 3: Use Case Modeling
export const questionData = [
    {
        question: "What is the primary purpose of Use Cases in requirements modeling?",
        options: ["To design the database schema and foreign keys.", "To turn requirements into concrete scenarios and actor goals.", "To write the final source code for the system.", "To define the visual design and button colors of the UI."],
        answer: "To turn requirements into concrete scenarios and actor goals."
    },
    {
        question: "According to the document, what is the best description of an 'Actor'?",
        options: ["A specific person identified by their real name (e.g., John Smith).", "Anything inside the system boundary that performs a calculation.", "Anything outside the system boundary that interacts with the system.", "A specific programming class or object in the source code."],
        answer: "Anything outside the system boundary that interacts with the system."
    },
    {
        question: "Which of the following can be an actor in a Use Case model?",
        options: ["Human roles (e.g., Student, Staff).", "External systems (e.g., Payment Gateway, Google Login).", "Time/Scheduler (e.g., a nightly report trigger).", "All of the above."],
        answer: "All of the above."
    },
    {
        question: "What does the 'System Boundary' represent in a Use Case diagram?",
        options: ["The limit of the server's CPU and RAM.", "The separation between what is inside our system versus everything else outside.", "The geographical location where the software is used.", "The firewall settings of the university network."],
        answer: "The separation between what is inside our system versus everything else outside."
    },
    {
        question: "Which of the following is an example of a 'Good' Use Case name (goal-oriented)?",
        options: ["Manage Booking.", "Design Booking Page UI.", "Submit Booking Request.", "Create database schema for booking."],
        answer: "Submit Booking Request."
    },
    {
        question: "Why is a label like 'Manage Booking' considered a poor example of a Use Case?",
        options: ["It is too specific.", "It is a vague feature label rather than a specific user goal.", "It includes technical implementation details.", "It describes an external system."],
        answer: "It is a vague feature label rather than a specific user goal."
    },
    {
        question: "In a Use Case diagram (UML), what do 'Associations' represent?",
        options: ["The flow of data between database tables.", "Lines connecting actors to the use cases they participate in.", "The inheritance between different programming objects.", "The physical connection between the client and the server."],
        answer: "Lines connecting actors to the use cases they participate in."
    },
    {
        question: "Which Use Case level focuses on 'one actor goal end-to-end'?",
        options: ["Summary level.", "User-goal level.", "Sub-function level.", "Implementation level."],
        answer: "User-goal level."
    },
    {
        question: "What is a 'Sub-function level' use case used for?",
        options: ["To describe a big process overview.", "To represent a reusable step used by multiple use cases.", "To define the business value of the entire organization.", "To describe actions that happen outside the system."],
        answer: "To represent a reusable step used by multiple use cases."
    },
    {
        question: "A 'Fully Dressed' Use Case narrative should include which of the following?",
        options: ["Main success scenario and alternative/exception flows.", "SQL 'SELECT' statements for data retrieval.", "The specific programming language version (e.g., Java 21).", "A list of all CSS classes used for the buttons."],
        answer: "Main success scenario and alternative/exception flows."
    },
    {
        question: "What are 'Preconditions' in a Use Case narrative?",
        options: ["The steps taken after the goal is achieved.", "What must be true before the use case can start.", "The list of errors that might occur during execution.", "The price the user must pay to use the feature."],
        answer: "What must be true before the use case can start."
    },
    {
        question: "What is a common mistake when writing Use Case steps?",
        options: ["Using consistent terms from a glossary.", "Including UI details like 'Click the green button on the top right.'", "Writing steps as observable actions and responses.", "Identifying validation errors in alternative flows."],
        answer: "Including UI details like 'Click the green button on the top right.'"
    },
    {
        question: "How should 'Alternative / Exception flows' be used in a narrative?",
        options: ["To describe the 'Happy Path' where everything goes perfectly.", "To handle validation errors, conflicts, or system failures.", "To list the hardware requirements of the system.", "They are optional and should only be written if there is extra time."],
        answer: "To handle validation errors, conflicts, or system failures."
    },
    {
        question: "According to the 'Rule of Thumb,' an entity is an actor if:",
        options: ["It is a table in the database.", "It sends input to or receives output from our system.", "It is a piece of code written by the programmer.", "It is the project leader of the development team."],
        answer: "It sends input to or receives output from our system."
    },
    {
        question: "In Use Case modeling, 'Postconditions' describe:",
        options: ["The state of the system before the actor starts.", "The success or failure outcomes after the use case is finished.", "The instructions for installing the software.", "The background color of the final screen."],
        answer: "The success or failure outcomes after the use case is finished."
    },
    {
        question: "Which of the following is a rule for writing 'Good Use Case Steps'?",
        options: ["Include as many API endpoint names as possible.", "Keep each step clear and atomic (one intent per step).", "Describe the internal database triggers.", "Mix the user's manual actions with the code logic."],
        answer: "Keep each step clear and atomic (one intent per step)."
    },
    {
        question: "Why should Use Cases include 'Alternative Flows'?",
        options: ["Because they make the document look longer.", "Because that is where most bugs and edge cases hide.", "To show the customer how many buttons they can click.", "To define the marketing strategy for the product."],
        answer: "Because that is where most bugs and edge cases hide."
    },
    {
        question: "What should you do if a Use Case includes actions outside the system (e.g., user walking to a room)?",
        options: ["Keep them in the main flow to show the full story.", "Move them to an external actor or treat them as an assumption.", "Write code to automate the physical action.", "Ignore the system boundary rules."],
        answer: "Move them to an external actor or treat them as an assumption."
    },
    {
        question: "How can GenAI help in Use Case modeling according to the slides?",
        options: ["By making final decisions for the team without review.", "By suggesting missing alternative flows and edge cases.", "By writing the entire project brief in one click.", "By replacing the need for a system boundary."],
        answer: "By suggesting missing alternative flows and edge cases."
    },
    {
        question: "After creating Use Cases (Week 3), what is the next step in the OOAD process (Week 4)?",
        options: ["Coding the UI in React or Flutter.", "Creating the Domain Model and Glossary from the use cases.", "Performing final User Acceptance Testing (UAT).", "Setting up the production cloud environment."],
        answer: "Creating the Domain Model and Glossary from the use cases."
    }
];
