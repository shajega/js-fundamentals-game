export const syllabus = [
  {
    week: 1,
    title: "Week 1: JS Origins & Role",
    quests: [
      {
        title: "1.1 The Birth of JS",
        shortTitle: "Birth of JS",
        explanation: "JavaScript was created to make web pages interactive. It was built by Brendan Eich. Let's record his name in a variable.",
        task: "Create a variable named <code>creator</code> and set its value to <code>'Brendan Eich'</code>.",
        hint: "let creator = 'Brendan Eich';",
        startCode: "// Write your code below:\n",
        test: "return typeof creator !== 'undefined' ? creator : undefined;",
        expected: "Brendan Eich",
        successMessage: "Awesome! You've documented the creator."
      },
      {
        title: "1.2 ECMAScript Standard",
        shortTitle: "The Standard",
        explanation: "To ensure JavaScript works the same across all browsers, it was standardized under the name ECMAScript.",
        task: "Create a constant named <code>standard</code> and set it to <code>'ECMAScript'</code>.",
        hint: "const standard = 'ECMAScript';",
        startCode: "",
        test: "return typeof standard !== 'undefined' ? standard : undefined;",
        expected: "ECMAScript",
        successMessage: "Correct! ECMAScript is the spec, JS is the implementation."
      },
      {
        title: "1.3 JS in the Real World",
        shortTitle: "Real-world JS",
        isSideQuest: true,
        explanation: "Today, JavaScript is used not just in browsers, but on servers (Node.js), mobile apps (React Native), and databases (MongoDB).",
        task: "Create an array called <code>platforms</code> containing the strings: 'browser', 'server', 'mobile'.",
        hint: "let platforms = ['browser', 'server', 'mobile'];",
        startCode: "",
        test: "return typeof platforms !== 'undefined' && platforms.length === 3 ? platforms[1] : undefined;",
        expected: "server",
        successMessage: "Great! JS truly runs everywhere."
      }
    ]
  },
  {
    week: 2,
    title: "Week 2: Data Types & Operators",
    quests: [
      {
        title: "2.1 Primitive Types",
        shortTitle: "Primitives",
        explanation: "JavaScript has primitives like Strings (text), Numbers, and Booleans (true/false).",
        task: "Create three variables: <code>name</code> (string), <code>age</code> (number), and <code>isStudent</code> (boolean).",
        hint: "let name = 'Alice';\nlet age = 25;\nlet isStudent = true;",
        startCode: "",
        test: "return (typeof name === 'string' && typeof age === 'number' && typeof isStudent === 'boolean') ? 'Passed' : undefined;",
        expected: "Passed",
        successMessage: "You've mastered the building blocks of data!"
      },
      {
        title: "2.2 Arithmetic Magic",
        shortTitle: "Math Operators",
        explanation: "You can perform math natively using Operators like +, -, *, /, and %.",
        task: "Create a variable <code>remainder</code> that stores the remainder of 10 divided by 3.",
        hint: "let remainder = 10 % 3;",
        startCode: "",
        test: "return typeof remainder !== 'undefined' ? remainder : undefined;",
        expected: 1,
        successMessage: "Math whiz! Modulo (%) is very useful in programming."
      },
      {
        title: "2.3 Logical Comparisons",
        shortTitle: "Comparisons",
        explanation: "We can compare values using operators like === (strictly equal), !== (not equal), > and <.",
        task: "Create a variable <code>canVote</code> that evaluates to true if <code>age</code> (set to 20) is greater than or equal to 18.",
        hint: "let age = 20;\nlet canVote = age >= 18;",
        startCode: "let age = 20;\n// Write logic here:\n",
        test: "return typeof canVote !== 'undefined' ? canVote : undefined;",
        expected: true,
        successMessage: "Perfect logical deduction!"
      }
    ]
  },
  {
    week: 3,
    title: "Week 3: Control Flow",
    quests: [
      {
        title: "3.1 The If Statement",
        shortTitle: "If/Else",
        explanation: "Run code only if a condition is true.",
        task: "If <code>battery</code> is greater than 10, set <code>status</code> to <code>'OK'</code>. Otherwise, set it to <code>'Low'</code>.",
        hint: "if (battery > 10) { status = 'OK'; } else { status = 'Low'; }",
        startCode: "let battery = 15;\nlet status = '';\n\n// Write your if statement below:\n",
        test: "return status;",
        expected: "OK",
        successMessage: "Good decision making!"
      },
      {
        title: "3.2 While Loops",
        shortTitle: "While Loops",
        explanation: "A <code>while</code> loop runs as long as a condition remains true.",
        task: "Write a while loop that adds 1 to <code>hp</code> until it reaches 5.",
        hint: "while (hp < 5) { hp++; }",
        startCode: "let hp = 1;\n// Write loop here:\n",
        test: "return hp;",
        expected: 5,
        successMessage: "You healed to full HP!"
      },
      {
        title: "3.3 For Loops",
        shortTitle: "For Loops",
        isSideQuest: true,
        explanation: "<code>for</code> loops are designed for iterating a specific number of times.",
        task: "Write a <code>for</code> loop that increments <code>count</code> by 2 exactly 3 times.",
        hint: "for (let i = 0; i < 3; i++) { count += 2; }",
        startCode: "let count = 0;\n// loop here:\n",
        test: "return count;",
        expected: 6,
        successMessage: "Looping master!"
      }
    ]
  },
  {
    week: 4,
    title: "Week 4: Arrays",
    quests: [
      {
        title: "4.1 Creating Arrays",
        shortTitle: "Array Setup",
        explanation: "Arrays are lists of data wrapped in square brackets.",
        task: "Create a variable <code>colors</code> holding an array: 'red', 'green', and 'blue'.",
        hint: "let colors = ['red', 'green', 'blue'];",
        startCode: "",
        test: "return (Array.isArray(colors) && colors[1] === 'green') ? 'Success' : undefined;",
        expected: "Success",
        successMessage: "You've crafted a colorful list."
      },
      {
        title: "4.2 Pushing & Popping",
        shortTitle: "Push & Pop",
        explanation: "Use <code>.push()</code> to add to the end of an array, and <code>.pop()</code> to remove from the end.",
        task: "Use <code>.push('yellow')</code> to add to the array, then use <code>.pop()</code> and save the removed value in <code>lastColor</code>.",
        hint: "colors.push('yellow');\nlet lastColor = colors.pop();",
        startCode: "let colors = ['red', 'blue'];\n// Write code below:\n",
        test: "return lastColor;",
        expected: "yellow",
        successMessage: "Data manipulated successfully!"
      },
      {
        title: "4.3 Iterating Arrays",
        shortTitle: "Array Loops",
        explanation: "You can combine loops and arrays using methods like <code>.forEach()</code> or a standard <code>for</code> loop.",
        task: "Write a for loop that adds each number in <code>nums</code> to <code>sum</code>. (nums contains [10, 20])",
        hint: "for (let i = 0; i < nums.length; i++) { sum += nums[i]; }",
        startCode: "let nums = [10, 20];\nlet sum = 0;\n// sum it up:\n",
        test: "return sum;",
        expected: 30,
        successMessage: "You've traversed the array!"
      }
    ]
  },
  {
    week: 5,
    title: "Week 5: Functions",
    quests: [
      {
        title: "5.1 Reusable Logic",
        shortTitle: "Functions",
        explanation: "Functions wrap block of codes that can be executed later with parameters and return values.",
        task: "Create a function named <code>multiply</code> that takes <code>(a, b)</code> and returns their product.",
        hint: "function multiply(a, b) { return a * b; }",
        startCode: "",
        test: "return typeof multiply === 'function' ? multiply(4, 5) : false;",
        expected: 20,
        successMessage: "Excellent! You programmed custom logic."
      },
      {
        title: "5.2 Arrow Functions",
        shortTitle: "Arrow Funcs",
        explanation: "In modern JS, functions can be written with an 'arrow' syntax: <code>() => {}</code>",
        task: "Convert the traditional function into an arrow function assigned to <code>double</code>.",
        hint: "const double = (n) => n * 2;",
        startCode: "const double = function(n) {\n  return n * 2;\n};",
        test: "return typeof double === 'function' && double.toString().includes('=>') ? double(5) : false;",
        expected: 10,
        successMessage: "Clean, modern syntax mastered."
      },
      {
        title: "5.3 Variable Scope",
        shortTitle: "Global/Local Scope",
        isSideQuest: true,
        explanation: "Variables inside functions are 'Local' and can't be accessed outside. 'Global' variables are accessible anywhere.",
        task: "Create a global variable <code>base = 10</code>. Inside the `addBase` function, return <code>base + x</code>.",
        hint: "let base = 10;\nfunction addBase(x) { return base + x; }",
        startCode: "",
        test: "return typeof addBase === 'function' && addBase(5) === 15 ? 'Scope OK' : undefined;",
        expected: "Scope OK",
        successMessage: "You understand how scope works!"
      }
    ]
  },
  {
    week: 6,
    title: "Week 6: Modules",
    quests: [
      {
        title: "6.1 ES6 Export",
        shortTitle: "Exporting",
        evalMode: "string",
        explanation: "To share variables between files in modern JS, we use the <code>export</code> keyword.",
        task: "Export the variable <code>apiURL</code>.",
        hint: "export const apiURL = 'https://api.example.com';",
        startCode: "const apiURL = 'https://api.example.com';",
        test: "return code.includes('export const apiURL') || code.includes('export { apiURL }');",
        expected: true,
        successMessage: "You exposed the required data for other modules."
      },
      {
        title: "6.2 ES6 Import",
        shortTitle: "Importing",
        evalMode: "string",
        explanation: "You can import code from another file using the <code>import</code> keyword.",
        task: "Import <code>apiURL</code> from <code>'./config.js'</code>.",
        hint: "import { apiURL } from './config.js';",
        startCode: "",
        test: "return code.includes(\"import { apiURL }\") && code.includes(\"./config.js\");",
        expected: true,
        successMessage: "Modules perfectly linked!"
      }
    ]
  },
  {
    week: 7,
    title: "Week 7: Asynchronous JS",
    quests: [
      {
        title: "7.1 Returning a Promise",
        shortTitle: "Promises",
        explanation: "Promises represent a value that will be available in the future (like an API response).",
        task: "Create a variable <code>waitForIt</code> that holds a new Promise. Resolve it with 'Done!'",
        hint: "let waitForIt = new Promise((resolve) => resolve('Done!'));",
        startCode: "",
        test: "return waitForIt;",
        expected: "Done!",
        successMessage: "A promise kept!"
      },
      {
        title: "7.2 Async/Await",
        shortTitle: "Async/Await",
        explanation: "Using <code>await</code> lets you pause code execution until a Promise finishes without chaining `.then()`.",
        task: "Use <code>await</code> to get the result from `delayedPromise` and store it in `result`.",
        hint: "let result = await delayedPromise;",
        startCode: "let delayedPromise = Promise.resolve(42);\nlet result = 0;\n\n// Write your code here:\n",
        test: "return result;",
        expected: 42,
        successMessage: "Asynchronous code streamlined!"
      },
      {
        title: "7.3 Error Debugging",
        shortTitle: "Try/Catch",
        isSideQuest: true,
        explanation: "Wrap <code>await</code> calls in a <code>try...catch</code> block to handle errors gracefully.",
        task: "Wrap the bad code in a try/catch block. In the catch block, set <code>hasError = true</code>.",
        hint: "try { throw new Error('Yikes!'); } catch (err) { hasError = true; }",
        startCode: "let hasError = false;\n// Add try/catch below:\nthrow new Error('Yikes!');",
        test: "return hasError;",
        expected: true,
        successMessage: "Errors handled safely!"
      }
    ]
  },
  {
    week: 8,
    title: "Week 8: Events",
    quests: [
      {
        title: "8.1 Click Listeners",
        shortTitle: "Event Listeners",
        explanation: "Use <code>addEventListener</code> to connect user actions (like clicks) to JavaScript functions.",
        task: "Add an event listener to the <code>btn</code> element so when 'click' happens, <code>clicked = true</code>.",
        hint: "btn.addEventListener('click', () => clicked = true);",
        startCode: "let btn = document.createElement('button');\nlet clicked = false;\n\n// Add listener here:\n\n\n// Testing click instance\nbtn.dispatchEvent(new Event('click'));",
        test: "return clicked;",
        expected: true,
        successMessage: "Interactive UI achieved!"
      },
      {
        title: "8.2 Event Object",
        shortTitle: "Event Details",
        explanation: "Event handler functions receive an Event object containing details about what happened.",
        task: "Listen to 'keydown' on <code>inputEl</code>. If the event's <code>key</code> is 'Enter', set <code>submitted = true</code>.",
        hint: "inputEl.addEventListener('keydown', (e) => { if (e.key === 'Enter') submitted = true; });",
        startCode: "let inputEl = document.createElement('input');\nlet submitted = false;\n\n// Listen here:\n\n\n// Triggering keydown\ninputEl.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter' }));",
        test: "return submitted;",
        expected: true,
        successMessage: "You handled an advanced event!"
      }
    ]
  },
  {
    week: 9,
    title: "Week 9: DOM Manipulation",
    quests: [
      {
        title: "9.1 Selecting Elements",
        shortTitle: "Query Selector",
        explanation: "Use Document Object Model (DOM) methods to select elements. <code>querySelector</code> is very powerful.",
        task: "In the browser, find an element with id `hero`. (Since we don't have a real DOM, use `document.createElement('div')` to mock it for now.)",
        hint: "let hero = document.createElement('div');",
        startCode: "let hero = null;\n// Create the mock element:\n",
        test: "return hero && hero.tagName === 'DIV' ? 'Selected' : undefined;",
        expected: "Selected",
        successMessage: "DOM node secured!"
      },
      {
        title: "9.2 Modifying Styles",
        shortTitle: "Dynamic Styles",
        explanation: "You can change an element's inline CSS using <code>element.style.property</code>.",
        task: "Change the <code>hero</code> object's background color to 'blue'.",
        hint: "hero.style.backgroundColor = 'blue';",
        startCode: "let hero = document.createElement('div');\n\n// Change color here:\n",
        test: "return hero.style.backgroundColor;",
        expected: "blue",
        successMessage: "The DOM looks much better now!"
      },
      {
        title: "9.3 HTML Content",
        shortTitle: "Text Content",
        explanation: "Change the actual text on the screen using <code>textContent</code> or <code>innerHTML</code>.",
        task: "Set the <code>textContent</code> of <code>hero</code> to 'Welcome!'.",
        hint: "hero.textContent = 'Welcome!';",
        startCode: "let hero = document.createElement('div');\n\n",
        test: "return hero.textContent;",
        expected: "Welcome!",
        successMessage: "You injected dynamic text!"
      }
    ]
  },
  {
    week: 10,
    title: "Week 10: API Calls",
    quests: [
      {
        title: "10.1 The Fetch API",
        shortTitle: "Fetch Data",
        explanation: "<code>fetch()</code> executes a GET request to servers to retrieve data.",
        task: "Call <code>fetch('/api/user')</code>, <code>await</code> the response, and then <code>await response.json()</code> into a variable <code>data</code>.",
        hint: "let response = await fetch('/api/user');\nlet data = await response.json();",
        startCode: "let fetch = async () => ({ json: async () => ({ name: 'Alice' }) });\nlet data = {};\n\n// Fetch below:\n",
        test: "return data.name;",
        expected: "Alice",
        successMessage: "Successfully fetched data from a mock server."
      },
      {
        title: "10.2 POST Requests",
        shortTitle: "Sending Data",
        isSideQuest: true,
        evalMode: "string",
        explanation: "To send data to an API, configure <code>fetch</code> with `{ method: 'POST', body: ... }`.",
        task: "Write a fetch call using the 'POST' method.",
        hint: "fetch('/save', { method: 'POST', body: JSON.stringify(myData) });",
        startCode: "let myData = { score: 100 };\n// POST it:\n",
        test: "return code.includes('POST') && code.includes('fetch');",
        expected: true,
        successMessage: "Data securely submitted!"
      }
    ]
  },
  {
    week: 11,
    title: "Week 11: Objects",
    quests: [
      {
        title: "11.1 Object Setup",
        shortTitle: "Object Config",
        explanation: "Objects hold properties inside curly braces <code>{}</code>. It relies on a key-value structure.",
        task: "Create a <code>user</code> object with a <code>name</code> set to 'Bob', and <code>level</code> set to 5.",
        hint: "let user = { name: 'Bob', level: 5 };",
        startCode: "",
        test: "return typeof user !== 'undefined' && user.level === 5 ? user.name : '';",
        expected: "Bob",
        successMessage: "Object initialized!"
      },
      {
        title: "11.2 Object Methods",
        shortTitle: "Methods",
        explanation: "Functions inside objects are called Methods. They encapsulate functionality.",
        task: "Add a <code>sayHi</code> method to <code>user</code> that returns 'Hi Bob!'.",
        hint: "let user = { sayHi() { return 'Hi Bob!'; } };",
        startCode: "let user = {\n  // add method here\n};",
        test: "return typeof user.sayHi === 'function' ? user.sayHi() : '';",
        expected: "Hi Bob!",
        successMessage: "The object can speak!"
      }
    ]
  },
  {
    week: 12,
    title: "Week 12: Advanced Concepts",
    quests: [
      {
        title: "12.1 Class Syntax",
        shortTitle: "Classes",
        explanation: "Classes are templates for creating objects. Define a class and a constructor.",
        task: "Create a class <code>Car</code> with a constructor taking <code>brand</code> and saving it to <code>this.brand</code>.",
        hint: "class Car { constructor(brand) { this.brand = brand; } }",
        startCode: "// Create class below:\n",
        test: "return new Car('Tesla').brand;",
        expected: "Tesla",
        successMessage: "Object Oriented Architecture unlocked!"
      },
      {
        title: "12.2 Inheritance",
        shortTitle: "Extends",
        evalMode: "string",
        explanation: "Using <code>extends</code>, a new class can inherit properties from a parent class.",
        task: "Create a class <code>ElectricCar</code> that extends <code>Car</code>.",
        hint: "class ElectricCar extends Car {}",
        startCode: "class Car {}\n// Build inheritance:\n",
        test: "return code.includes('extends Car');",
        expected: true,
        successMessage: "You inherited the parent properties!"
      },
      {
        title: "12.3 Context & Bind",
        shortTitle: "Bind 'this'",
        isSideQuest: true,
        explanation: "<code>bind()</code> attaches a specific 'this' context to a function so it remembers its parent object.",
        task: "Use <code>.bind(obj)</code> on <code>func</code> and save it in <code>boundFunc</code>.",
        hint: "let boundFunc = func.bind(obj);",
        startCode: "let obj = { val: 42 };\nfunction func() { return this.val; }\n\n// Bind it:\n",
        test: "return typeof boundFunc === 'function' ? boundFunc() : undefined;",
        expected: 42,
        successMessage: "Mastered the tricky 'this' keyword."
      }
    ]
  }
];
