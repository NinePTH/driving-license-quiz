// CPE362 OOAD Mock Exam - Week 1
export const questionData = [
    {
        question: "What does OOAD bridge between?",
        options: ["Database and User Interface", "Requirements and Implementation", "Testing and Deployment", "Frontend and Backend"],
        answer: "Requirements and Implementation"
    },
    {
        question: "What is OOP (Object-Oriented Programming)?",
        options: ["How you think and plan before coding", "How you write code using classes/objects in a programming language", "A software testing process", "A database design method"],
        answer: "How you write code using classes/objects in a programming language"
    },
    {
        question: "What are the components of an Object?",
        options: ["Identity, State, Behavior", "Name, Type, Value", "Input, Process, Output", "Create, Read, Update, Delete"],
        answer: "Identity, State, Behavior"
    },
    {
        question: "What is the difference between a Class and an Object?",
        options: ["Class is a runtime entity, Object is a blueprint", "Class is a blueprint, Object is an instance created from that Class", "There is no difference", "Class is for design, Object is for testing"],
        answer: "Class is a blueprint, Object is an instance created from that Class"
    },
    {
        question: "What is a disadvantage of Procedural Programming?",
        options: ["Works too slowly", "Code grows into long functions with shared state", "Uses too much memory", "Cannot work with databases"],
        answer: "Code grows into long functions with shared state"
    },
    {
        question: "What does 'Over-engineered' mean?",
        options: ["No design at all, start coding immediately", "Too many layers, patterns, abstractions beyond current needs", "Some structure exists but responsibilities are unclear", "Design that fits the requirements perfectly"],
        answer: "Too many layers, patterns, abstractions beyond current needs"
    },
    {
        question: "Which is NOT one of the Four Pillars of OO Design?",
        options: ["Encapsulation", "Abstraction", "Documentation", "Polymorphism"],
        answer: "Documentation"
    },
    {
        question: "What is Encapsulation?",
        options: ["Keep internal state hidden and expose behavior through a clear interface", "Create new classes from existing classes", "Use the same interface with different types", "Focus only on essential characteristics"],
        answer: "Keep internal state hidden and expose behavior through a clear interface"
    },
    {
        question: "Which example demonstrates Abstraction correctly?",
        options: ["Payment interface: pay(amount) - hide provider API calls, encryption", "BankAccount.balance as a public variable", "Show all implementation details in the class", "Write comments on every line of code"],
        answer: "Payment interface: pay(amount) - hide provider API calls, encryption"
    },
    {
        question: "What relationship does Inheritance represent?",
        options: ["has-a", "is-a", "uses-a", "depends-on"],
        answer: "is-a"
    },
    {
        question: "How does Polymorphism benefit a system?",
        options: ["Makes code run faster", "Reduces if/else complexity and makes systems extensible", "Reduces memory usage", "Prevents security vulnerabilities"],
        answer: "Reduces if/else complexity and makes systems extensible"
    },
    {
        question: "What is High Coupling?",
        options: ["Class/module has tightly related responsibilities", "Class/module strongly depends on many other classes/modules", "Class has one clear purpose", "System has high performance"],
        answer: "Class/module strongly depends on many other classes/modules"
    },
    {
        question: "What does High Cohesion mean?",
        options: ["Few dependencies between modules", "Responsibilities inside a class/module belong well together", "Many layers in the system", "Using multiple design patterns"],
        answer: "Responsibilities inside a class/module belong well together"
    },
    {
        question: "Which demonstrates Low Cohesion?",
        options: ["AuthService handles authentication only", "BookingService handles booking rules only", "SystemManager handles login, booking, payment, reporting all together", "PaymentService handles payment rules only"],
        answer: "SystemManager handles login, booking, payment, reporting all together"
    },
    {
        question: "How many steps are in the OOAD + Agile Cycle?",
        options: ["4 steps", "5 steps", "6 steps", "8 steps"],
        answer: "6 steps"
    },
    {
        question: "Which artifact should be produced in the Design step?",
        options: ["Prioritized backlog + iteration goal", "Domain model + sequence diagram + design decisions", "Code increment + API contract", "Retrospective note + updated backlog"],
        answer: "Domain model + sequence diagram + design decisions"
    },
    {
        question: "In the Room Booking practice, what is an example of a 'verb' (responsibility)?",
        options: ["Room", "Student", "Approve", "Booking"],
        answer: "Approve"
    }
];
