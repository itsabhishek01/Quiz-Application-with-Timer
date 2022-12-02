// creating an array and passing the number, questions, options, and answers
let questions = [
    {
    numb: 1,
    question: "Which of the following type is provided by C++ but not C?",
    answer: "bool",
    options: [
      "double",
      "float",
      "int",
      "bool"
    ]
  },
    {
    numb: 2,
    question: "Which of the following correctly declares an array in C++?",
    answer: "int array[10];",
    options: [
      "array{10};",
      "array array[10];",
      "int array[10];",
      "int array;"
    ]
  },
    {
    numb: 3,
    question: "The C++ code which causes abnormal termination/behaviour of a program should be written under _________ block.",
    answer: "try",
    options: [
      "try",
      "finally",
      "catch",
      "none"
    ]
  },
    {
    numb: 4,
    question: "What is meant by a polymorphism in C++?",
    answer: "class having many forms",
    options: [
      "class having only single form",
      "class having four forms",
      "class having many forms",
      "class having two forms"
    ]
  },
    {
    numb: 5,
    question: "Pick the incorrect statement about inline functions in C++?",
    answer: "They are generally very large and complicated function",
    options: [
      "Saves overhead of a return call from a function",
      "They are generally very large and complicated function",
      "These functions are inserted/substituted at the point of call",
      "They reduce function call overheads"
    ]
  },
  {
    numb: 6,
    question: "Which of the following constructors are provided by the C++ compiler if not defined in a class?",
    answer: "All of the mentioned",
    options: [
      "Copy constructor",
      "Default constructor",
      "Assignment constructor",
      "All of the mentioned"
    ]
  },
  {
    numb: 7,
    question: "Operator overloading is ___________",
    answer: "adding operation to the existing operators",
    options: [
      "making c++ operator works with objects",
      "giving new meaning to existing operator",
      "making the new operator",
      "adding operation to the existing operators"
    ]
  },
  {
    numb: 8,
    question: "Which concept do we use for the implementation of late binding?",
    answer: "Virtual Functions",
    options: [
      "Static Functions",
      "Constant Functions",
      "Operator Functions",
      "Virtual Functions"
    ]
  },
  {
    numb: 9,
    question: "Which function do we use for checking if a character is a space or a tab?",
    answer: "isblank()",
    options: [
      "isdigit()",
      "isblank()",
      "isalnum()",
      "isalpha()"
    ]
  },
  {
    numb: 10,
    question: "What would happen in case one uses a void in the passing of an argument?",
    answer: "It would not return any value to the caller",
    options: [
      "It would return any value",
      "It may not or may depend on a declared return type of any function. The return type of the function is different from the passed arguments",
      "It would return some value to the caller",
      "It would not return any value to the caller"
    ]
  },
  // you can uncomment the below codes and make duplicate as more as you want to add question
  // but remember you need to give the numb value serialize like 1,2,3,5,6,7,8,9.....

  //   {
  //   numb: 6,
  //   question: "Your Question is Here",
  //   answer: "Correct answer of the question is here",
  //   options: [
  //     "Option 1",
  //     "option 2",
  //     "option 3",
  //     "option 4"
  //   ]
  // },
];