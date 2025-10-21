export const questionData = [
      {
        question: "What is the advantage of distributed storages in the big data system ?",
        options: [
            "The system can read a large data file faster .",
            "The system can compute complex algorithms faster .",
            "The system can update the data interactively .",
            "All of the above ."
        ],
        answer: "The system can read a large data file faster ."
      },
      {
        question: "Which of the following is the benefit to the business intelligence unit in the adoption of big data ?",
        options: [
            "Interactive data exploration",
            "Cheap data storage",
            "Efficient data workflow",
            "Large scale machine learning"
        ],
        answer: "Interactive data exploration"
      },
      {
        question: "In the statement below, which of the following statement is NOT the requirements in regarding of 4Vs of big data ?",
        options: [
            "Large enterprise wants to determine insights from data of all customers .",
            "Business requires real - time dashboard that combines data from different systems in the organization together .",
            "Management wants the analytic reports to be created in a monthly fashion .",
            "IT departments requires the reliable data storage that can support data service operation ."
        ],
        answer: "Management wants the analytic reports to be created in a monthly fashion ."
      },
      {
        question: "What is the purpose of data ingestion in big data systems ?",
        options: [
            "Preprocess the data into proper format .",
            "Distribute the data for faster read / write speed .",
            "Import the data from sources .",
            "Provide interface for other process to retrieve data ."
        ],
        answer: "Import the data from sources ."
      },
      {
        question: "Which of the following is NOT true ?",
        options: [
            "Big data cluster is always the best option for storing data .",
            "Big data supports computation of data science workflow .",
            "Everything being equals , for a high - performance computing ( HPC ) task , big data system is cheaper than HPC computer .",
            "Big data system accelerates the read / write performance by distributing data to store in multiple computers ."
        ],
        answer: "Big data cluster is always the best option for storing data ."
      },
      {
        question: "Which of the following big data component is responsible for distributed data",
        options: [
            "HDFS",
            "YARN",
            "SPARK",
            "HIVE"
        ],
        answer: "HDFS"
      },
      {
        question: "What is the role of name nodes ?",
        options: [
            "Store the data chunk on disk",
            "Store the data chunk on memory",
            "Run the task tracker",
            "Store the file system table"
        ],
        answer: "Store the file system table"
      },
      {
        question: "Which of the following components / equipment are NOT MANDATORY in the Hadoop big data cluster",
        options: [
            "Name node",
            "Data node",
            "Network switch",
            "Rack"
        ],
        answer: "Rack"
      },
      {
        question: "In the standalone mode , what is the minimum number of computers required for the installation and setting of Apache Hadoop ?",
        options: [
            "0",
            "1",
            "3",
            "6"
        ],
        answer: "1"
      },
      {
        question: "What is the role of an edge node or a client ?",
        options: [
            "Store a backup version of the file system table",
            "Store one of the data replica",
            "Submit the work to the cluster",
            "All of the above"
        ],
        answer: "Submit the work to the cluster"
      },
      {
        question: "How can big data systems address the variety issue in 4Vs ?",
        options: [
            "Store a large size dataset by acting as file systems",
            "Allow both structured and unstructured data",
            "Distribute the computational workload",
            "All of the above"
        ],
        answer: "Allow both structured and unstructured data"
      },
      {
        question: "Which of the following is NOT the main features of big data systems ?",
        options: [
            "Reliable storage",
            " Distributed processing",
            "Manageable data workflow",
            "Scalability"
        ],
        answer: "Manageable data workflow"
      },
      {
        question: "Which of the following action would improve the chance of cluster failure the most? ",
        options: [
            "Have a secondary name node",
            "Use RAID instead of JBOD",
            "Use one 10GB instead of 1GB network switch",
            "All of the above"
        ],
        answer: "Use RAID instead of JBOD"
      },
      {
        question: "Which of the following big data components working similar to Linux kernel ?",
        options: [
            "HDFS",
            "YARN",
            "SPARK",
            "MapReduce"
        ],
        answer: "YARN"
      },
      {
        question: " Which of the following big data components distributing the workload of its execution ?",
        options: [
            "Hive",
            "Spark",
            "Both a and b",
            "Neither a nor b"
        ],
        answer: "Both a and b"
      },
      {
        question: "In this process , which step occurs first ?",
        options: [
            "a",
            "b",
            "c",
            "d"
        ],
        answer: "b",
        image: "/images/q16&17-BigData-M1_jj.png",
      },
      {
        question: "Which step corresponds to the first transmission of data chunk from the client",
        options: [
            "a",
            "b",
            "c",
            "d"
        ],
        answer: "a",
        image: "/images/q16&17-BigData-M1_jj.png",
      },
      {
        question: "Which situation below give the best data write performance in regarding of data",
        options: [
            "Store all replica on one node",
            "Put all replicas on different racks",
            "Put one on another node in the rack and another one on different rack .",
            "Put all replica on different data centers"
        ],
        answer: "Put one on another node in the rack and another one on different rack ."
      },
      {
        question: "To process the large data file , which of the following situations that consume the network bandwidth the most ?",
        options: [
            "Process data on the same node",
            "Process data on different nodes on the same rack",
            "Process data on different nodes in the same data center",
            "Process data on different nodes in different data centers"
        ],
        answer: "Process data on different nodes in different data centers",
        image: "/images/q19&20-BigData-M1_jj.png",
      },
      {
        question: "Which of the following node pairs has the highest network distance ? Use the same network topology policy as in the class D = Data Center , R = Rack , N = Node",
        options: [
            "D1 / R1 / N1 , D2 / R3 / N5",
            "D1 / R2 / N3 , D1 / R2 / N4",
            "D2 / R3 / N5 , D2 / R3 / N6",
            "D2 / R4 / N7 , D2 / R3 / N6"
        ],
        answer: "D1 / R1 / N1 , D2 / R3 / N5",
        image: "/images/q19&20-BigData-M1_jj.png",
      },
      {
        question: "Which process is responsible for the initialization of MapReduce tasks ?",
        options: [
            "Spark context",
            "Spark executor",
            "Job Tracker",
            "Task Tracker"
        ],
        answer: "Job Tracker"
      },
      {
        question: "In MapReduce , once the map process is finished , where are the intermediate results stored ?",
        options: [
            "Local map nodes",
            "Local reduce nodes",
            "Master nodes",
            "Name nodes"
        ],
        answer: "Local map nodes"
      },
      {
        question: "In case of master failure on MapReduce task , what will happen ?",
        options: [
            "Map tasks completed or in - progress at worker are reset to idle",
            "Reduce workers are notified when task is rescheduled on another worker",
            "Only in -progress tasks are reset to idle",
            "The task is aborted , and the client is notified"
        ],
        answer: "The task is aborted , and the client is notified"
      },
      {
        question: "For a large text file with the size of 2GB stored on the Hadoop cluster with 10 nodes and chunk size setting of 128MB , what is the minimum number of map tasks that gives the best performance in MapReduce ?",
        options: [
            "4",
            "16",
            "64",
            "128"
        ],
        answer: "16"
      },
      {
        question: "What is the purpose of emit function ?",
        options: [
            "Read the text input",
            "Count the number of words in the document",
            "Export the intermediate results",
            "All of the above"
        ],
        answer: "Export the intermediate results",
        image: "/images/q25-BigData-M1_jj.png",
      },
];

export default questionData;