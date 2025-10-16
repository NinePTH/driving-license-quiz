export const questionData = [
      {
        question: "What is an operating system?",
        options: [
            "collection of programs that manages hardware resources",
            "system service provider to the application programs",
            "interface between the hardware and application programs",
            "all of the mentioned"
        ],
        answer: "all of the mentioned"
      },
      {
        question: "To access the services of the operating system, the interface is provided by the",
        options: [
            "System calls",
            "API",
            "Library",
            "Assembly instructions"
        ],
        answer: "System calls"
      },
      {
        question: "Which one of the following is not true?",
        options: [
            "kernel is the program that constitutes the central core of the operating system",
            "kernel is the first part of the operating system to load into memory during booting",
            "kernel is made of various modules which can be loaded in running operating system",
            "kernel remains in the memory during the entire computer session"
        ],
        answer: "kernel is made of various modules which can be loaded in running operating system"
      },
      {
        question: "Which one of the following errors will be handled by the operating system?",
        options: [
            "power failure",
            "lack of paper in printer",
            "connection failure in the network",
            "all of the mentioned"
        ],
        answer: "all of the mentioned"
      },
      {
        question: "What is the main function of the command interpreter?",
        options: [
            "get and execute the next user-specified command",
            "to provide the interface between the API and application program",
            "to handle the files in the operating system",
            "none of the mentioned"
        ],
        answer: "get and execute the next user-specified command"
      },
      {
        question: "In Operating Systems, which of the following is/are CPU scheduling algorithms?",
        options: [
            "Round Robin",
            "Shortest Job First",
            "Priority",
            "All of the mentioned"
        ],
        answer: "All of the mentioned"
      },
      {
        question: "If a process fails, most operating systems write the error information to a",
        options: [
            "log file",
            "another running process",
            "new file",
            "none of the mentioned"
        ],
        answer: "log file"
      },
      {
        question: "The systems which allow only one process execution at a time, are called",
        options: [
            "uniprogramming systems",
            "uniprocessing systems",
            "unitasking systems",
            "none of the mentioned"
        ],
        answer: "uniprocessing systems"
      },
      {
        question: "In an operating system, each process has its own",
        options: [
            "address space and global variables",
            "open files",
            "pending alarms, signals, and signal handlers",
            "all of the mentioned"
        ],
        answer: "all of the mentioned"
      },
      {
        question: "In Unix, which system call creates the new process?",
        options: [
            "fork",
            "create",
            "new",
            "none of the mentioned"
        ],
        answer: "fork"
      },
      {
        question: "A process can be terminated due to",
        options: [
            "normal exit",
            "fatal error",
            "killed by another process",
            "all of the mentioned"
        ],
        answer: "all of the mentioned"
      },
      {
        question: "What is the ready state of a process?",
        options: [
            "when process is scheduled to run after some execution",
            "when process is unable to run until some tasks has been completed",
            "when process is using the CPU",
            "none of the mentioned"
        ],
        answer: "when process is scheduled to run after some execution"
      },
      {
        question: "What is interprocess communication?",
        options: [
            "communication within the process",
            "communication between two processes",
            "communication between two threads of the same process",
            "none of the mentioned"
        ],
        answer: "communication between two processes"
      },
      {
        question: "A process stack does not contain",
        options: [
            "function parameters",
            "local variables",
            "return addresses",
            "PID of child process"
        ],
        answer: "PID of child process"
      },
      {
        question: "Which system call can be used by a parent process to determine the termination of a child process?",
        options: [
            "wait",
            "exit",
            "fork",
            "get"
        ],
        answer: "wait"
      },
      {
        question: "The address of the next instruction to be executed by the current process is provided by the",
        options: [
            "CPU registers",
            "program counter",
            "process stack",
            "pipe"
        ],
        answer: "program counter"
      },
      {
        question: "A Process Control Block (PCB) does not contain which of the following?",
        options: [
            "Code",
            "Stack",
            "Bootstrap program",
            "Data"
        ],
        answer: "Bootstrap program"
      },
      {
        question: "The number of processes completed per unit time is known as",
        options: [
            "Output",
            "Throughput",
            "Efficiency",
            "Capacity"
        ],
        answer: "Throughput"
      },
      {
        question: "What is a Process Control Block?",
        options: [
            "Process type variable",
            "Data structure",
            "A secondary storage section",
            "A block in memory"
        ],
        answer: "Data structure"
      },
      {
        question: "The entry of all the PCBs of the current processes is in",
        options: [
            "Process Register",
            "Program Counter",
            "Process Table",
            "Process Unit"
        ],
        answer: "Process Table"
      },
      {
        question: "What is the degree of multiprogramming?",
        options: [
            "the number of processes executed per unit time",
            "the number of processes in the ready queue",
            "the number of processes in the I/O queue",
            "the number of processes in memory"
        ],
        answer: "the number of processes in memory"
      },
      {
        question: "A single thread of control allows the process to perform",
        options: [
            "only one task at a time",
            "multiple tasks at a time",
            "only two tasks at a time",
            "all of the mentioned"
        ],
        answer: "only one task at a time"
      },
      {
        question: "What is the objective of multiprogramming?",
        options: [
            "Have a process running at all times",
            "Have multiple programs waiting in a queue ready to run",
            "To increase CPU utilization",
            "None of the mentioned"
        ],
        answer: "To increase CPU utilization"
      },
      {
        question: "Restricting the child process to a subset of the parent's resources prevents any process from",
        options: [
            "overloading the system by using a lot of secondary storage",
            "under-loading the system by very less CPU utilization",
            "overloading the system by creating a lot of sub-processes",
            "crashing the system by utilizing multiple resources"
        ],
        answer: "overloading the system by creating a lot of sub-processes"
      },
      {
        question: "A parent process calling ________ system call will be suspended until children processes terminate.",
        options: [
            "wait",
            "fork",
            "exit",
            "exec"
        ],
        answer: "wait"
      },
      {
        question: "With ________ only one process can execute at a time; meanwhile, all other processes are waiting for the processor. With ________ more than one process can be running simultaneously each on a different processor.",
        options: [
            "Multiprocessing, Multiprogramming",
            "Multiprogramming, Uniprocessing",
            "Multiprogramming, Multiprocessing",
            "Uniprogramming, Multiprocessing"
        ],
        answer: "Multiprogramming, Multiprocessing"
      },
      {
        question: "In UNIX, the return value for the fork system call is ________ for the child process and ________ for the parent process.",
        options: [
            "A Negative integer, Zero",
            "Zero, A Negative integer",
            "Zero, A nonzero integer",
            "A nonzero integer, Zero"
        ],
        answer: "Zero, A nonzero integer"
      },
      {
        question: "The child process can",
        options: [
            "be a duplicate of the parent process",
            "never be a duplicate of the parent process",
            "cannot have another program loaded into it",
            "never have another program loaded into it"
        ],
        answer: "be a duplicate of the parent process"
      },
      {
        question: "Which module gives control of the CPU to the process selected by the short-term scheduler?",
        options: [
            "dispatcher",
            "interrupt",
            "scheduler",
            "none of the mentioned"
        ],
        answer: "dispatcher"
      },
      {
        question: "The processes that are residing in main memory and are ready and waiting to execute are kept on a list called",
        options: [
            "job queue",
            "ready queue",
            "execution queue",
            "process queue"
        ],
        answer: "ready queue"
      },
      {
        question: "Which scheduling algorithm allocates the CPU first to the process that requests the CPU first?",
        options: [
            "first-come, first-served scheduling",
            "shortest job scheduling",
            "priority scheduling",
            "none of the mentioned"
        ],
        answer: "first-come, first-served scheduling"
      },
      {
        question: "In priority scheduling algorithm, when a process arrives at the ready queue, its priority is compared with the priority of",
        options: [
            "all process",
            "currently running process",
            "parent process",
            "init process"
        ],
        answer: "currently running process"
      },
      {
        question: "In multilevel feedback scheduling algorithm",
        options: [
            "a process can move to a different classified ready queue",
            "classification of ready queue is permanent",
            "processes are not classified into groups",
            "none of the mentioned"
        ],
        answer: "a process can move to a different classified ready queue"
      },
      {
        question: "Which one of the following cannot be scheduled by the kernel?",
        options: [
            "kernel level thread",
            "user level thread",
            "process",
            "none of the mentioned"
        ],
        answer: "user level thread"
      },
      {
        question: "CPU scheduling is the basis of",
        options: [
            "multiprocessor systems",
            "multiprogramming operating systems",
            "larger memory sized systems",
            "none of the mentioned"
        ],
        answer: "multiprogramming operating systems"
      },
      {
        question: "With multiprogramming, ________ is used productively.",
        options: [
            "time",
            "space",
            "money",
            "all of the mentioned"
        ],
        answer: "time"
      },
      {
        question: "What are the two steps of a process execution?",
        options: [
            "I/O & OS Burst",
            "CPU & I/O Burst",
            "Memory & I/O Burst",
            "OS & Memory Burst"
        ],
        answer: "CPU & I/O Burst"
      },
      {
        question: "A process is selected from the ________ queue by the ________ scheduler, to be executed.",
        options: [
            "blocked, short term",
            "wait, long term",
            "ready, short term",
            "ready, long term"
        ],
        answer: "ready, short term"
      },
      {
        question: "In the following cases non-preemptive scheduling occurs?",
        options: [
            "When a process switches from the running state to the ready state",
            "When a process goes from the running state to the waiting state",
            "When a process switches from the waiting state to the ready state",
            "All of the mentioned"
        ],
        answer: "When a process goes from the running state to the waiting state"
      },
      {
        question: "The switching of the CPU from one process or thread to another is called",
        options: [
            "process switch",
            "task switch",
            "context switch",
            "all of the mentioned"
        ],
        answer: "context switch"
      },
      {
        question: "Scheduling is done so as to",
        options: [
            "increase the turnaround time",
            "decrease the turnaround time",
            "keep the turnaround time the same",
            "there is no relation between scheduling and turnaround time"
        ],
        answer: "decrease the turnaround time"
      },
      {
        question: "What is Waiting time?",
        options: [
            "the total time in the blocked and waiting queues",
            "the total time spent in the ready queue",
            "the total time spent in the running queue",
            "the total time from the completion till the submission of a process"
        ],
        answer: "the total time spent in the ready queue"
      },
      {
        question: "Round robin scheduling falls under the category of",
        options: [
            "Non-preemptive scheduling",
            "Preemptive scheduling",
            "All of the mentioned",
            "None of the mentioned"
        ],
        answer: "Preemptive scheduling"
      },
      {
        question: "With round robin scheduling algorithm in a time-shared system",
        options: [
            "using very large time slices converts it into First come First served scheduling algorithm",
            "using very small time slices converts it into First come First served scheduling algorithm",
            "using extremely small time slices increases performance",
            "using very small time slices converts it into Shortest Job First algorithm"
        ],
        answer: "using very large time slices converts it into First come First served scheduling algorithm"
      },
      {
        question: "The portion of the process scheduler in an operating system that dispatches processes is concerned with",
        options: [
            "assigning ready processes to CPU",
            "assigning ready processes to the waiting queue",
            "assigning running processes to blocked queue",
            "all of the mentioned"
        ],
        answer: "assigning ready processes to CPU"
      },
      {
        question: "Complex scheduling algorithms",
        options: [
            "are very appropriate for very large computers",
            "use minimal resources",
            "use many resources",
            "all of the mentioned"
        ],
        answer: "use many resources"
      },
      {
        question: "What is FIFO algorithm?",
        options: [
            "first executes the job that came in last in the queue",
            "first executes the job that came in first in the queue",
            "first executes the job that needs minimal processor",
            "first executes the job that has maximum processor needs"
        ],
        answer: "first executes the job that came in first in the queue"
      },
      {
        question: "The strategy of making processes that are logically runnable to be temporarily suspended is called",
        options: [
            "Non-preemptive scheduling",
            "Preemptive scheduling",
            "Shortest job first",
            "First come First served"
        ],
        answer: "Preemptive scheduling"
      },
      {
        question: "What is Scheduling?",
        options: [
            "allowing a job to use the processor",
            "making proper use of processor",
            "all of the mentioned",
            "none of the mentioned"
        ],
        answer: "making proper use of processor"
      },
      {
        question: "Orders are processed in the sequence they arrive if ________ rule sequences the jobs.",
        options: [
            "earliest due date",
            "slack time remaining",
            "first come, first served",
            "critical ratio"
        ],
        answer: "first come, first served"
      },
      {
        question: "Which of the following algorithms tends to minimize the process flow time?",
        options: [
            "First come First served",
            "Shortest Job First",
            "Earliest Deadline First",
            "Longest Job First"
        ],
        answer: "Shortest Job First"
      },
      {
        question: "Under multiprogramming, turnaround time for short jobs is usually ________ and that for long jobs is ________",
        options: [
            "Lengthened; Shortened",
            "Shortened; Lengthened",
            "Shortened; Shortened",
            "Shortened; Unchanged"
        ],
        answer: "Shortened; Lengthened"
      },
      {
        question: "Which of the following statements are true? (GATE 2010)\nI. Shortest remaining time first scheduling may cause starvation\nII. Preemptive scheduling may cause starvation\nIII. Round robin is better than FCFS in terms of response time",
        options: [
            "I only",
            "I and III only",
            "II and III only",
            "I, II and III"
        ],
        answer: "I, II and III"
      },
      {
        question: "Which is the most optimal scheduling algorithm?",
        options: [
            "FCFS-First come First served",
            "SJF-Shortest Job First",
            "RR-Round Robin",
            "None of the mentioned"
        ],
        answer: "SJF-Shortest Job First"
      },
      {
        question: "The real difficulty with SJF in short term scheduling is",
        options: [
            "it is too good an algorithm",
            "knowing the length of the next CPU request",
            "it is too complex to understand",
            "none of the mentioned"
        ],
        answer: "knowing the length of the next CPU request"
      },
      {
        question: "The FCFS algorithm is particularly troublesome for",
        options: [
            "time sharing systems",
            "multiprogramming systems",
            "multiprocessor systems",
            "operating systems"
        ],
        answer: "time sharing systems"
      },
      {
        question: "Consider the following set of processes, the length of the CPU burst time given in milliseconds:\nProcess: P1, P2, P3, P4\nBurst Time: 6, 8, 7, 3\nAssuming the above process being scheduled with the SJF scheduling algorithm:",
        options: [
            "The waiting time for process P1 is 3ms",
            "The waiting time for process P1 is Oms",
            "The waiting time for process P1 is 16ms",
            "The waiting time for process P1 is 9ms"
        ],
        answer: "The waiting time for process P1 is 3ms" // Based on calculation: Processes ordered by burst time: P4 (3), P1 (6), P3 (7), P2 (8). P1 starts after P4 (3ms). Waiting time for P1 is 3ms.
      },
      {
        question: "Preemptive Shortest Job First scheduling is sometimes called",
        options: [
            "Fast SJF scheduling",
            "EDF scheduling - Earliest Deadline First",
            "HRRN scheduling - Highest Response Ratio Next",
            "SRTN scheduling - Shortest Remaining Time Next"
        ],
        answer: "SRTN scheduling - Shortest Remaining Time Next"
      },
      {
        question: "An SJF algorithm is simply a priority algorithm where the priority is",
        options: [
            "the predicted next CPU burst",
            "the inverse of the predicted next CPU burst",
            "the current CPU burst",
            "anything the user wants"
        ],
        answer: "the inverse of the predicted next CPU burst"
      },
      {
        question: "Choose one of the disadvantages of the priority scheduling algorithm?",
        options: [
            "it schedules in a very complex manner",
            "its scheduling takes up a lot of time",
            "it can lead to some low priority process waiting indefinitely for the CPU",
            "none of the mentioned"
        ],
        answer: "it can lead to some low priority process waiting indefinitely for the CPU"
      },
      {
        question: "Which of the following statements are true? (GATE 2010)\ni. Shortest remaining time first scheduling may cause starvation\nii. Preemptive scheduling may cause starvation\niii. Round robin is better than FCFS in terms of response time",
        options: [
            "i only",
            "i and iii only",
            "ii and iii only",
            "i, ii and iii"
        ],
        answer: "i, ii and iii"
      },
      {
        question: "Which of the following scheduling algorithms gives minimum average waiting time?",
        options: [
            "FCFS",
            "SJF",
            "Round-robin",
            "Priority"
        ],
        answer: "SJF"
      },
      {
        question: "What is Address Binding?",
        options: [
            "going to an address in memory",
            "locating an address with the help of another address",
            "binding two addresses together to form a new address in a different memory space",
            "a mapping from one address space to another"
        ],
        answer: "a mapping from one address space to another"
      },
      {
        question: "Binding of instructions and data to memory addresses can be done at",
        options: [
            "Compile time",
            "Load time",
            "Execution time",
            "All of the mentioned"
        ],
        answer: "All of the mentioned"
      },
      {
        question: "If the process can be moved during its execution from one memory segment to another, then binding must be",
        options: [
            "delayed until run time",
            "preponed to compile time",
            "preponed to load time",
            "none of the mentioned"
        ],
        answer: "delayed until run time"
      },
      {
        question: "What is Dynamic loading?",
        options: [
            "loading multiple routines dynamically",
            "loading a routine only when it is called",
            "loading multiple routines randomly",
            "none of the mentioned"
        ],
        answer: "loading a routine only when it is called"
      },
      {
        question: "What is the advantage of dynamic loading?",
        options: [
            "A used routine is used multiple times",
            "An unused routine is never loaded",
            "CPU utilization increases",
            "All of the mentioned"
        ],
        answer: "An unused routine is never loaded"
      },
      {
        question: "The idea of overlays is to",
        options: [
            "data that are needed at any given time",
            "enable a process to be larger than the amount of memory allocated to it",
            "keep in memory only those instructions",
            "all of the mentioned"
        ],
        answer: "enable a process to be larger than the amount of memory allocated to it"
      },
      {
        question: "If binding is done at assembly or load time, then the process ____ be moved to different locations after being swapped out and in again.",
        options: [
            "can",
            "must",
            "can never",
            "may"
        ],
        answer: "can never"
      },
      {
        question: "The address generated by the CPU is referred to as __________",
        options: [
            "Physical address",
            "Logical address",
            "Neither physical nor logical",
            "None of the mentioned"
        ],
        answer: "Logical address"
      },
      {
        question: "The address loaded into the memory address register of the memory is referred to as __________",
        options: [
            "Physical address",
            "Logical address",
            "Neither physical nor logical",
            "None of the mentioned"
        ],
        answer: "Physical address"
      },
      {
        question: "The run-time mapping from virtual to physical addresses is done by a hardware device called the __________",
        options: [
            "Virtual to physical mapper",
            "Memory management unit",
            "Memory mapping unit",
            "None of the mentioned"
        ],
        answer: "Memory management unit"
      },
      {
        question: "The base register is also known as the __________",
        options: [
            "basic register",
            "regular register",
            "relocation register",
            "delocation register"
        ],
        answer: "relocation register"
      },
      {
        question: "The size of a process is limited to the size of __________",
        options: [
            "physical memory",
            "external storage",
            "secondary storage",
            "none of the mentioned"
        ],
        answer: "physical memory"
      },
      {
        question: "If execution time binding is being used, then a process _____ be swapped to a different memory space.",
        options: [
            "has to be",
            "can never",
            "must",
            "may"
        ],
        answer: "may"
      },
      {
        question: "Swapping requires a __________",
        options: [
            "motherboard",
            "keyboard",
            "monitor",
            "backing store"
        ],
        answer: "backing store"
      },
      {
        question: "The ______ time in a swap out of a running process and swap in of a new process into the memory is very high.",
        options: [
            "context-switch",
            "waiting",
            "execution",
            "all of the mentioned"
        ],
        answer: "context-switch"
      },
      {
        question: "Swapping _____ be done when a process has pending I/O, or has to execute I/O operations only into operating system buffers.",
        options: [
            "must",
            "can",
            "must never",
            "maybe"
        ],
        answer: "must never"
      },
      {
        question: "Memory management technique in which system stores and retrieves data from secondary storage for use in main memory is called?",
        options: [
            "fragmentation",
            "paging",
            "mapping",
            "none of the mentioned"
        ],
        answer: "paging"
      },
      {
        question: "The address of a page table in memory is pointed by __________",
        options: [
            "stack pointer",
            "page table base register",
            "page register",
            "program counter"
        ],
        answer: "page table base register"
      },
      {
        question: "Program always deals with __________",
        options: [
            "logical address",
            "absolute address",
            "physical address",
            "relative address"
        ],
        answer: "logical address"
      },
      {
        question: "The page table contains __________",
        options: [
            "base address of each page in physical memory",
            "page offset",
            "page size",
            "none of the mentioned"
        ],
        answer: "base address of each page in physical memory"
      },
      {
        question: "What is compaction?",
        options: [
            "a technique for overcoming internal fragmentation",
            "a paging technique",
            "a technique for overcoming external fragmentation",
            "a technique for overcoming fatal error"
        ],
        answer: "a technique for overcoming external fragmentation"
      },
      {
        question: "Operating System maintains the page table for __________",
        options: [
            "each process",
            "each thread",
            "each instruction",
            "each address"
        ],
        answer: "each process"
      },
      {
        question: "In contiguous memory allocation __________",
        options: [
            "each process is contained in a single contiguous section of memory",
            "all processes are contained in a single contiguous section of memory",
            "the memory space is contiguous",
            "none of the mentioned"
        ],
        answer: "each process is contained in a single contiguous section of memory"
      },
      {
        question: "When memory is divided into several fixed-sized partitions, each partition may contain __________",
        options: [
            "exactly one process",
            "at least one process",
            "multiple processes at once",
            "none of the mentioned"
        ],
        answer: "exactly one process"
      },
      {
        question: "The first fit, best fit, and worst fit are strategies to select a __________",
        options: [
            "process from a queue to put in memory",
            "processor to run the next process",
            "free hole from a set of available holes",
            "all of the mentioned"
        ],
        answer: "free hole from a set of available holes"
      },
      {
        question: "A solution to the problem of external fragmentation is __________",
        options: [
            "compaction",
            "larger memory space",
            "smaller memory space",
            "none of the mentioned"
        ],
        answer: "compaction"
      },
      {
        question: "Another solution to the problem of external fragmentation problem is to __________",
        options: [
            "permit the logical address space of a process to be noncontiguous",
            "permit smaller processes to be allocated memory at last",
            "permit larger processes to be allocated memory at last",
            "all of the mentioned"
        ],
        answer: "permit the logical address space of a process to be noncontiguous"
      },
      {
        question: "__________ is generally faster than ________ and ________",
        options: [
            "first fit, best fit, worst fit",
            "best fit, first fit, worst fit",
            "worst fit, best fit, first fit",
            "none of the mentioned"
        ],
        answer: "first fit, best fit, worst fit"
      },
      {
        question: "External fragmentation exists when?",
        options: [
            "enough total memory exists to satisfy a request, but it is not contiguous",
            "the total memory is insufficient to satisfy a request",
            "a request cannot be satisfied even when the total memory is free",
            "none of the mentioned"
        ],
        answer: "enough total memory exists to satisfy a request, but it is not contiguous"
      },
      {
        question: "When the memory allocated to a process is slightly larger than the process, then __________",
        options: [
            "internal fragmentation occurs",
            "external fragmentation occurs",
            "both internal and external fragmentation occurs",
            "neither internal nor external fragmentation occurs"
        ],
        answer: "internal fragmentation occurs"
      },
      {
        question: "Physical memory is broken into fixed-sized blocks called __________",
        options: [
            "frames",
            "pages",
            "backing store",
            "none of the mentioned"
        ],
        answer: "frames"
      },
      {
        question: "Every address generated by the CPU is divided into two parts. They are __________",
        options: [
            "frame bit & page number",
            "page number & page offset",
            "page offset & frame bit",
            "frame offset & page offset"
        ],
        answer: "page number & page offset"
      },
      {
        question: "The ________ is used as an index into the page table.",
        options: [
            "frame bit",
            "page number",
            "page offset",
            "frame offset"
        ],
        answer: "page number"
      },
      {
        question: "The size of a page is typically __________",
        options: [
            "varied",
            "power of 2",
            "power of 4",
            "none of the mentioned"
        ],
        answer: "power of 2"
      },
      {
        question: "If the size of logical address space is 2 to the power of m, and a page size is 2 to the power of n addressing units, then the high order ____ bits of a logical address designate the page number, and the ____ low order bits designate the page offset.",
        options: [
            "m, n",
            "n, m",
            "m - n, n",
            "m - n, n"
        ],
        answer: "m - n, n"
      },
      {
        question: "With paging there is no ________ fragmentation.",
        options: [
            "internal",
            "external",
            "either type of",
            "none of the mentioned"
        ],
        answer: "external"
      },
      {
        question: "The operating system maintains a _____ table that keeps track of how many frames have been allocated, how many are there, and how many are available.",
        options: [
            "page",
            "mapping",
            "frame",
            "memory"
        ],
        answer: "frame"
      },
      {
        question: "Paging increases the _____ time.",
        options: [
            "waiting",
            "execution",
            "context-switch",
            "all of the mentioned"
        ],
        answer: "context-switch"
      },
      {
        question: "The page table registers should be built with ______",
        options: [
            "very low speed logic",
            "very high speed logic",
            "a large memory space",
            "none of the mentioned"
        ],
        answer: "very high speed logic"
      },
      {
        question: "Each entry in a translation lookaside buffer (TLB) consists of __________",
        options: [
            "key",
            "value",
            "bit value",
            "constant"
        ],
        answer: "key"
      },
      {
        question: "Illegal addresses are trapped using the ____ bit.",
        options: [
            "error",
            "protection",
            "valid-invalid",
            "access"
        ],
        answer: "valid-invalid"
      },
      {
        question: "When there is a large logical address space, the best way of paging would be __________",
        options: [
            "not to page",
            "a two-level paging algorithm",
            "the page table itself",
            "all of the mentioned"
        ],
        answer: "a two-level paging algorithm"
      },
      {
        question: "In segmentation, each address is specified by __________",
        options: [
            "a segment number & offset",
            "an offset & value",
            "a value & segment number",
            "a key & value"
        ],
        answer: "a segment number & offset"
      },
      {
        question: "In paging the user provides only ______, which is partitioned by the hardware into ______",
        options: [
            "one address, page number, offset",
            "one offset, page number, address",
            "page number, offset, address",
            "none of the mentioned"
        ],
        answer: "one address, page number, offset"
      },
      {
        question: "Each entry in a segment table has a __________",
        options: [
            "segment base",
            "segment peak",
            "segment value",
            "none of the mentioned"
        ],
        answer: "segment base"
      },
      {
        question: "The segment base contains the __________",
        options: [
            "starting logical address of the process",
            "starting physical address of the segment in memory",
            "segment length",
            "none of the mentioned"
        ],
        answer: "starting physical address of the segment in memory"
      },
      {
        question: "The segment limit contains the __________",
        options: [
            "starting logical address of the process",
            "starting physical address of the segment in memory",
            "segment length",
            "none of the mentioned"
        ],
        answer: "segment length"
      },
      {
        question: "When the entries in the segment tables of two different processes point to the same physical location __________",
        options: [
            "the segments are invalid",
            "the processes get blocked",
            "segments are shared",
            "all of the mentioned"
        ],
        answer: "segments are shared"
      },
      {
        question: "If there are 32 segments, each of size 1Kb, then the logical address should have __________",
        options: [
            "13 bits",
            "14 bits",
            "15 bits",
            "16 bits"
        ],
        answer: "15 bits" // 32 segments = 2^5 bits (for segment number) and 1KB = 2^10 bits (for offset). Total bits = 5 + 10 = 15 bits.
      },
      {
        question: "A multilevel page table is preferred in comparison to a single level page table for translating virtual address to physical address because __________",
        options: [
            "it reduces the memory access time to read or write a memory location",
            "it helps to reduce the size of page table needed to implement the virtual address space of a process",
            "it is required by the translation lookaside buffer",
            "it helps to reduce the number of page faults in page replacement algorithms"
        ],
        answer: "it helps to reduce the size of page table needed to implement the virtual address space of a process"
      }
];

export default questionData;