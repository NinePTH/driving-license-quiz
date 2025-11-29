export const questionData = [
  {
    question: "What is not true about concurrency?",
    options: [
      "Operating system can run many processes at the same time on multi-core processor",
      "Operating system can run many threads at the same time on multi-core processor",
      "Memory of a process cannot be shared with other processes",
      "When a process has several threads, race condition might occur",
      "Only one process can be executed on a core of a processor at one time"
    ],
    answer: "Memory of a process cannot be shared with other processes"
  },
  {
    question: "What is not true about thread?",
    options: [
      "Each thread has separate address spaces",
      "Each thread has its own PC",
      "All threads share resource within a process",
      "OS also needs to context-switch threads",
      "Thread shares data but has separate stack"
    ],
    answer: "Each thread has separate address spaces"
  },
  {
    question: "What is not true about race condition?",
    options: [
      "To prevent race condition, mutex must be guaranteed when critical region is entered",
      "Mutex allows one of several threads to enter a critical region",
      "Race condition makes process runs faster",
      "Race condition might occur when threads share resources",
      "Race condition will not occur if one thread is running at a time"
    ],
    answer: "Race condition makes process runs faster"
  },
  {
    question: "Which statement cannot be a critical region?",
    options: [
      "for(int i=10; i>0; i--)",
      "count = count + 1",
      "sum += i",
      "i++",
      "all of them can be a critical region"
    ],
    answer: "for(int i=10; i>0; i--)"
  },
  {
    question: "Which system call causes the main thread to wait for child thread to terminate?",
    options: [
      "pthread_cond_wait",
      "pthread_join",
      "pthread_create",
      "pthread_cond_init",
      "pthread_mutex_init"
    ],
    answer: "pthread_join"
  },
  {
    question: "What is not true about lock?",
    options: [
      "compare_and_swap is a hardware lock",
      "Spin lock wastes CPU cycles waiting",
      "Software test and set is not correct",
      "We can create pure software lock",
      "We can use interrupt to create lock"
    ],
    answer: "Software test and set is not correct"
  },
  {
    question: "What is true about lock?",
    options: [
      "Fetch and add does not know the order of lock request",
      "Compare-and-swap is fairer than test-and-set",
      "Process can only wait for lock by spinning",
      "Load-linked allows caller to load a ticket",
      "Starvation might happen when uses only test-and-set"
    ],
    answer: "Starvation might happen when uses only test-and-set"
  },
  {
    question: "What is the software NOT a support to solve wasting cycles with lock?",
    options: [
      "Sleep instead of spin",
      "Yield system call",
      "Park when lock",
      "Using waiting queue for lock request",
      "All are software supports to solve wasting cycles"
    ],
    answer: "All are software supports to solve wasting cycles"
  },
  {
    question: "What is not true about bounded buffer problem?",
    options: [
      "The program does not work with one conditional variable",
      "Producer is waiting on empty condition",
      "Consumer is waiting on full condition",
      "Mutex is used to count available items",
      "You need all mutex, full, and empty"
    ],
    answer: "Mutex is used to count available items"
  },
  {
    question: "What does a producer call when it produces something?",
    options: [
      "mutex_lock(&mutex)",
      "mutex_unlock(&mutex)",
      "cond_signal(&fill)",
      "cond_signal(&empty)",
      "cond_wait(&fill, &mutex)"
    ],
    answer: "cond_signal(&fill)"
  },
  {
    question: "What does a consumer call when it consumes something?",
    options: [
      "mutex_lock(&mutex)",
      "mutex_unlock(&mutex)",
      "cond_signal(&fill)",
      "cond_signal(&empty)",
      "cond_wait(&fill,&mutex)"
    ],
    answer: "cond_wait(&fill,&mutex)"
  },
  {
    question: "What is true about semaphore?",
    options: [
      "There are binary and continuous semaphore",
      "When sem_post is called, value is decreased by 1",
      "When sem_wait is called, value is increased by 1",
      "Semaphore value can only be 0 and 1",
      "Semaphore can be used to create mutex"
    ],
    answer: "Semaphore can be used to create mutex"
  },
  {
    question: "Which statement is not true?",
    options: [
      "Each resource types only have one instance",
      "A process has to request for a resource before use",
      "A process needs to hold a resource while using it",
      "When a process finishes the task, resources can be released",
      "A process cannot hold processor"
    ],
    answer: "Each resource types only have one instance"
  },
  {
    question: "Which problem is caused by resource allocation?",
    options: [
      "Race condition",
      "Deadlock",
      "Trashing",
      "Internal fragmentation",
      "Zombie"
    ],
    answer: "Deadlock"
  },
  {
    question: "What is true about deadlock?",
    options: [
      "A deadlock needs more than one process to occur",
      "Deadlock will occur when many processes are waiting for CPU",
      "Deadlock will occur when virtual memory is running low",
      "Deadlock will occur if process needs to hold resources and wait for other resources",
      "Deadlock will occur even if only one resource type"
    ],
    answer: "Deadlock will occur if process needs to hold resources and wait for other resources"
  },
  {
    question: "What is not the four conditions of deadlock?",
    options: [
      "Mutual exclusion",
      "Non-preemption",
      "Virtualization",
      "Hold and wait",
      "Circular wait"
    ],
    answer: "Virtualization"
  },
  {
    question: "When does a deadlock might occur?",
    options: [
      "Resource allocation graph has circle",
      "Banker algorithm is in a safe state",
      "There is no resource in holding",
      "Resource can be preempted",
      "Resource allocation graph has no circle"
    ],
    answer: "Resource allocation graph has circle"
  },
  {
    question: "A deadlock will never occur with which deadlock management?",
    options: [
      "Prevention",
      "Avoidance",
      "Detection",
      "Both prevention and avoidance",
      "Deadlock will occur in all management"
    ],
    answer: "Both prevention and avoidance"
  },
  {
    question: "Which deadlock management needs recovery?",
    options: [
      "Prevention",
      "Avoidance",
      "Detection",
      "Both prevention and avoidance",
      "All managements need recovery scheme"
    ],
    answer: "Detection"
  },
  {
    question: "Which problem does requesting resource in increasing order solve?",
    options: [
      "No preemption",
      "Hold and wait",
      "Mutual exclusion",
      "Circular wait",
      "Starvation"
    ],
    answer: "Circular wait"
  },
  {
    question: "Which method can solve no preemption?",
    options: [
      "test_and_set",
      "yield",
      "try_lock and try_wait",
      "fetch_and_add",
      "request resource in increasing order"
    ],
    answer: "try_lock and try_wait"
  },
  {
    question: "What is not true about Banker's algorithm?",
    options: [
      "Process must declare maximum number of resources",
      "Deadlock might occur in safe state",
      "Need = Max − Allocation",
      "Deadlock will occur in unsafe state",
      "Request can be granted if resource left is more than needed"
    ],
    answer: "Deadlock might occur in safe state"
  },
  {
    question: "What could deadlock recovery do?",
    options: [
      "Deny request",
      "Terminate processes",
      "Preempt resource from process",
      "Put process on wait queue",
      "Put process on ready queue"
    ],
    answer: "Terminate processes"
  },
  {
    question: "Which statement is not true?",
    options: [
      "Wait-for graph is equivalent to resource allocation graph",
      "Resource allocation graph is used in deadlock avoidance",
      "Resource allocation graph is used in deadlock detection",
      "There is no resource in wait-for graph",
      "Deadlock occurs when there is a loop in wait-for graph"
    ],
    answer: "Resource allocation graph is used in deadlock avoidance"
  },
  {
    question: "Which method maps device registers into memory space?",
    options: [
      "System call",
      "Interrupt",
      "Direct memory access",
      "Memory-Mapped I/O",
      "Pooling"
    ],
    answer: "Memory-Mapped I/O"
  },
  {
    question: "Which statement is not true?",
    options: [
      "Pooling is the most efficient method to access IO",
      "Interrupt can be hardware and software",
      "Interrupt frees up processor to do something else",
      "DMA moves data from device directly into memory",
      "Interrupt vector table stores service routine locations"
    ],
    answer: "Pooling is the most efficient method to access IO"
  },
  {
    question: "Which layer knows how to read/write device blocks?",
    options: [
      "Application layer",
      "File system",
      "Generic block layer",
      "Device driver",
      "All layers can directly read/write device blocks"
    ],
    answer: "Device driver"
  },
  {
    question: "Which disk scheduling algorithm might cause starvation?",
    options: [
      "FCFS",
      "SSTF",
      "SCAN",
      "LOOK",
      "No starvation in disk scheduling"
    ],
    answer: "SSTF"
  },
  {
    question: "Which disk scheduling algorithm sweeps outward then inward repeatedly?",
    options: [
      "FCFS",
      "SSTF",
      "SPTF",
      "SCAN",
      "LOOK"
    ],
    answer: "SCAN"
  },
  {
    question: "What is not true about RAID?",
    options: [
      "RAID 0 is stripping with no mirror",
      "RAID 1 is mirror with no stripping",
      "RAID 2 has ECC",
      "RAID 3 is bit-striping and dedicated parity",
      "RAID 4 is block-striping and block-mirroring"
    ],
    answer: "RAID 4 is block-striping and block-mirroring"
  },
  {
    question: "Which file allocation method is FAT?",
    options: [
      "Linked allocation",
      "Contiguous allocation",
      "Indexed allocation",
      "Multi-level indexed allocation",
      "Combined scheme"
    ],
    answer: "Linked allocation"
  }
];

export default questionData;
