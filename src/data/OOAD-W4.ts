// CPE362 OOAD Mock Exam - Week 4: Domain Model, Glossary, and Responsibility
export const questionData = [
    {
        question: "What is the primary purpose of a Domain Model?",
        options: ["To design software components and database tables.", "To create a conceptual map of key things in the problem domain and their relationships.", "To define the user interface layout and navigation.", "To specify the programming language and frameworks to be used."],
        answer: "To create a conceptual map of key things in the problem domain and their relationships."
    },
    {
        question: "Which of the following should NOT be included in a Domain Model?",
        options: ["Real-world concepts.", "Key attributes of domain objects.", "Software components like Controllers or Database Keys.", "Associations and multiplicities between concepts."],
        answer: "Software components like Controllers or Database Keys."
    },
    {
        question: "How does a Domain Model help a development team?",
        options: ["It provides a shared vocabulary and helps discover missing concepts early.", "It automatically generates the database schema.", "It defines the physical storage and performance tuning.", "It replaces the need for writing use cases."],
        answer: "It provides a shared vocabulary and helps discover missing concepts early."
    },
    {
        question: "In the context of a Domain Model, what does a 'Conceptual Class' represent?",
        options: ["A specific function in the code.", "A database table with primary keys.", "A real-world concept or business object.", "A UI screen or a button."],
        answer: "A real-world concept or business object."
    },
    {
        question: "Which is the correct order of modeling layers according to the document?",
        options: ["Physical -> Logical -> Conceptual", "Logical -> Physical -> Conceptual", "Conceptual -> Logical -> Physical", "Conceptual -> Physical -> Logical"],
        answer: "Conceptual -> Logical -> Physical"
    },
    {
        question: "When extracting a Domain Model from use cases, what do 'nouns or noun phrases' usually represent?",
        options: ["Associations", "Candidate concepts (Classes)", "Multiplicities", "Methods"],
        answer: "Candidate concepts (Classes)"
    },
    {
        question: "'User submits a Booking Request.' In this scenario, what does the verb 'submits' represent in a class diagram?",
        options: ["An attribute", "A class", "An association (Relationship)", "A multiplicity"],
        answer: "An association (Relationship)"
    },
    {
        question: "Which category of domain classes includes physical things like 'Room' or 'Device'?",
        options: ["Tangible objects", "Specifications", "Transactions", "Roles"],
        answer: "Tangible objects"
    },
    {
        question: "'Booking Request,' 'Payment,' and 'Approval' are examples of which domain class category?",
        options: ["Organizations", "Containers", "Transactions / Events", "Places"],
        answer: "Transactions / Events"
    },
    {
        question: "What does the multiplicity '0..*' mean?",
        options: ["Exactly one.", "One or more.", "Optional (zero or one).", "Many (including none)."],
        answer: "Many (including none)."
    },
    {
        question: "What is a guideline for using Generalization (Inheritance) in a Domain Model?",
        options: ["Use it for every relationship to save space.", "Use it only when there is a clear 'is-a' relationship and it simplifies meaning.", "Use it to represent 'has-a' relationships.", "Avoid it entirely in the conceptual phase."],
        answer: "Use it only when there is a clear 'is-a' relationship and it simplifies meaning."
    },
    {
        question: "Which attributes should be avoided in the Domain Model v1?",
        options: ["Attributes that describe the concept in a business sense.", "Attributes that support business rules.", "Implementation details like database keys or technical IDs.", "Meaningful properties like 'status' or 'createdAt.'"],
        answer: "Implementation details like database keys or technical IDs."
    },
    {
        question: "How should Business Rules (e.g., 'Only Staff can approve requests') be captured in a Domain Model?",
        options: ["As private methods in a class.", "As notes on the diagram or a short rule list.", "As database constraints only.", "They should not be captured until the coding phase."],
        answer: "As notes on the diagram or a short rule list."
    },
    {
        question: "What is a 'God' concept in a Domain Model quality check?",
        options: ["A class that represents a central business entity.", "A class like 'System' or 'Manager' that does too much and should be split.", "A class that has no attributes.", "A class that is used as a parent for inheritance."],
        answer: "A class like 'System' or 'Manager' that does too much and should be split."
    },
    {
        question: "What is the primary reason for maintaining a Glossary?",
        options: ["To list all the software libraries used.", "To prevent inconsistent naming and ensure the same word has the same meaning across the team.", "To document the installation steps for the database.", "To provide a user manual for the final product."],
        answer: "To prevent inconsistent naming and ensure the same word has the same meaning across the team."
    },
    {
        question: "Which of the following is NOT a typical component of a Glossary entry?",
        options: ["Term and Definition.", "Synonyms and Notes.", "Possible status values.", "The source code implementation of the term."],
        answer: "The source code implementation of the term."
    },
    {
        question: "'What an object knows (state)' refers to which type of responsibility?",
        options: ["Behavior responsibility", "Collaboration responsibility", "Data responsibility", "GRASP responsibility"],
        answer: "Data responsibility"
    },
    {
        question: "According to the GRASP 'Information Expert' principle, where should a responsibility be assigned?",
        options: ["To the class that has the information required to fulfill it.", "To the class that was created first.", "To a centralized Controller class.", "To the User Interface layer."],
        answer: "To the class that has the information required to fulfill it."
    },
    {
        question: "Which GRASP principle focuses on assigning creation duties to a class that aggregates or closely uses the created object?",
        options: ["Controller", "Creator", "High Cohesion", "Low Coupling"],
        answer: "Creator"
    },
    {
        question: "What is the goal of 'Low Coupling' in responsibility assignment?",
        options: ["To ensure every class knows about every other class.", "To keep each class focused on a single purpose.", "To reduce unnecessary dependencies between classes.", "To make sure all logic is kept within a single class."],
        answer: "To reduce unnecessary dependencies between classes."
    }
];
