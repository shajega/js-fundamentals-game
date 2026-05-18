import { syllabus } from './syllabus.js';

const AsyncFunction = Object.getPrototypeOf(async function(){}).constructor;
const UNIT_COUNT = 10;

const unitLessons = [
  {
    title: 'JS Origins & Role',
    focus: 'Understand what JavaScript is, why it exists, and where it runs.',
    explanation: 'JavaScript started as the language that made web pages interactive. Today it is used in browsers, servers, mobile apps, desktop apps, and tooling. In this unit, students practise storing facts in variables and recognising JavaScript as part of the wider ECMAScript standard.',
    sampleCode: "const creator = 'Brendan Eich';\nconst standard = 'ECMAScript';\nconst platforms = ['browser', 'server', 'mobile'];\n\nconsole.log(`${creator} created the language we use with the ${standard} standard.`);\nconsole.log(`JavaScript can run in the ${platforms.join(', ')}.`);",
    practice: {
      prompt: 'Create variables for a JavaScript fact, the year you learned it, and one place JavaScript can run. Log a short sentence using all three values.',
      starter: "const jsFact = 'JavaScript makes pages interactive';\nconst yearLearned = 2026;\nconst platform = 'browser';\n\nconsole.log(`${jsFact}. I learned this in ${yearLearned}, and it runs in the ${platform}.`);"
    },
    lab: {
      title: 'JavaScript Timeline Card',
      duration: '30–40 min',
      objective: 'Build a short timeline summary that explains why JavaScript matters.',
      steps: [
        'Store at least three facts about JavaScript in variables or an array.',
        'Write a function that formats the facts into one readable summary.',
        'Log the summary for a classmate to review.'
      ],
      starter: "const facts = ['Created for web interactivity', 'Standardised as ECMAScript', 'Runs beyond the browser'];\n\nfunction buildTimelineSummary(factList) {\n  // Return one useful summary sentence.\n}\n\nconsole.log(buildTimelineSummary(facts));"
    }
  },
  {
    title: 'Data Types & Operators',
    focus: 'Use primitive values, arithmetic, and comparisons to represent simple rules.',
    explanation: 'Programs make decisions with data. Strings store text, numbers store quantities, booleans store true/false answers, and operators let us calculate or compare values.',
    sampleCode: "const studentName = 'Sam';\nconst attempts = 3;\nconst score = 8 + 2;\nconst passed = score >= 10;\n\nconsole.log(`${studentName} passed: ${passed}`);\nconsole.log(`Attempts remaining: ${5 - attempts}`);",
    practice: {
      prompt: 'Create variables for a quiz score and passing score. Use a comparison operator to store whether the student passed, then log it.',
      starter: "const quizScore = 7;\nconst passingScore = 6;\nconst didPass = quizScore >= passingScore;\n\nconsole.log(`Passed quiz: ${didPass}`);"
    },
    lab: {
      title: 'Grade Calculator',
      duration: '35–45 min',
      objective: 'Use numbers and comparison operators to calculate a simple grade status.',
      steps: [
        'Create variables for student name, score, and maximum score.',
        'Calculate the percentage score.',
        'Create a boolean that stores whether the score is passing.',
        'Log a clear grade report.'
      ],
      starter: "const studentName = 'Amina';\nconst score = 42;\nconst maxScore = 50;\n\nconst percentage = 0; // Calculate this.\nconst isPassing = false; // Compare against 70%.\n\nconsole.log(`${studentName}: ${percentage}% passing=${isPassing}`);"
    }
  },
  {
    title: 'Control Flow',
    focus: 'Use if statements and loops to control what code runs and how often.',
    explanation: 'Control flow lets code respond to conditions. Use if/else when a program needs to choose, and loops when a program needs to repeat a task.',
    sampleCode: "let energy = 4;\n\nif (energy >= 5) {\n  console.log('Ready for the boss quest!');\n} else {\n  console.log('Recharge before the boss quest.');\n}\n\nwhile (energy < 5) {\n  energy++;\n}\n\nconsole.log(`Energy restored to ${energy}.`);",
    practice: {
      prompt: 'Write an if/else statement that recommends either “keep practising” or “start the quest” based on a readiness score.',
      starter: "const readiness = 6;\n\nif (readiness >= 7) {\n  console.log('Start the quest');\n} else {\n  console.log('Keep practising');\n}"
    },
    lab: {
      title: 'Study Streak Coach',
      duration: '40–50 min',
      objective: 'Use loops and decisions to build a simple study recommendation.',
      steps: [
        'Create a variable for current streak days.',
        'Use a loop to simulate three more study days.',
        'Use an if/else statement to recommend a next step.',
        'Log the final streak and recommendation.'
      ],
      starter: "let streakDays = 2;\n\n// Add three more days with a loop.\n\nfunction getRecommendation(streak) {\n  // Return a recommendation based on the streak.\n}\n\nconsole.log(streakDays);\nconsole.log(getRecommendation(streakDays));"
    }
  },
  {
    title: 'Arrays',
    focus: 'Store lists of values and process them with indexes, loops, and array methods.',
    explanation: 'Arrays hold ordered collections. Students use arrays whenever they need a list of scores, names, tasks, inventory items, or results.',
    sampleCode: "const questScores = [80, 72, 95];\nlet total = 0;\n\nfor (const score of questScores) {\n  total += score;\n}\n\nconst average = total / questScores.length;\nconsole.log(`Average score: ${average}`);",
    practice: {
      prompt: 'Create an array of three topics you want to revise. Add one more topic, then log the full list.',
      starter: "const topics = ['variables', 'operators', 'loops'];\ntopics.push('arrays');\n\nconsole.log(topics);"
    },
    lab: {
      title: 'Quest Score Analyzer',
      duration: '45–60 min',
      objective: 'Analyse a list of quest scores using arrays and loops.',
      steps: [
        'Store at least five numeric scores in an array.',
        'Write a function that calculates the average score.',
        'Write a function that finds the highest score.',
        'Log a short progress report.'
      ],
      starter: "const scores = [80, 72, 95, 64, 88];\n\nfunction getAverageScore(scoreList) {\n  // Calculate and return the average.\n}\n\nfunction getHighestScore(scoreList) {\n  // Return the highest score.\n}\n\nconsole.log(getAverageScore(scores));\nconsole.log(getHighestScore(scores));"
    }
  },
  {
    title: 'Functions',
    focus: 'Package reusable logic with parameters, return values, and scope.',
    explanation: 'Functions make code reusable. A function can accept inputs, do a task, and return a value. Students should also notice which variables are available globally and locally.',
    sampleCode: "const baseXp = 150;\n\nfunction calculateXp(questCount) {\n  return questCount * baseXp;\n}\n\nconsole.log(calculateXp(4));",
    practice: {
      prompt: 'Write a function that accepts a topic and returns a study reminder for that topic.',
      starter: "function buildReminder(topic) {\n  return `Spend 10 minutes reviewing ${topic}.`;\n}\n\nconsole.log(buildReminder('functions'));"
    },
    lab: {
      title: 'Profile Card Builder',
      duration: '35–45 min',
      objective: 'Use functions to build a reusable student profile summary.',
      steps: [
        'Create variables for name, skill level, favourite topic, and completed quests.',
        'Write a function that returns a profile sentence.',
        'Write a function that recommends the next study action.',
        'Log both results.'
      ],
      starter: "const studentName = 'Amina';\nconst skillLevel = 'beginner';\nconst favouriteTopic = 'functions';\nconst completedQuests = 3;\n\nfunction buildProfile() {\n  // Return a profile sentence here.\n}\n\nfunction recommendNextStep() {\n  // Return a recommendation.\n}\n\nconsole.log(buildProfile());\nconsole.log(recommendNextStep());"
    }
  },
  {
    title: 'Modules',
    focus: 'Organise code across files with imports and exports.',
    explanation: 'Modules help teams split code into files. A file can export values or functions, and another file can import them. In this browser game, module syntax is also used to load the syllabus into the app.',
    sampleCode: "// settings.js\nexport const baseUrl = 'https://api.example.com';\n\n// app.js\nimport { baseUrl } from './settings.js';\nconsole.log(baseUrl);",
    practice: {
      prompt: 'Write a short module-style snippet that exports a class name or imports a helper. You can run it as text practice in the editor.',
      starter: "const classSettingsModule = `export const className = 'JS Fundamentals';`;\nconst importExample = `import { className } from './classSettings.js';`;\n\nconsole.log(classSettingsModule);\nconsole.log(importExample);"
    },
    lab: {
      title: 'Class Settings Module Plan',
      duration: '30–40 min',
      objective: 'Plan how a small app could separate settings, helpers, and app code.',
      steps: [
        'Write two exports for values a class app might share.',
        'Write an example import statement that uses one value.',
        'Explain in a comment why modules help larger projects.'
      ],
      starter: "const settingsFile = `export const courseTitle = 'JS Quest';\nexport const weeklyXpTarget = 450;`;\nconst appFile = `import { courseTitle, weeklyXpTarget } from './settings.js';`;\nconst benefit = 'Modules keep shared settings reusable across files.';\n\nconsole.log(settingsFile);\nconsole.log(appFile);\nconsole.log(benefit);"
    }
  },
  {
    title: 'Asynchronous JS',
    focus: 'Handle delayed work with promises, async functions, await, and errors.',
    explanation: 'Some tasks take time, such as loading data from an API. JavaScript uses promises and async/await so the program can wait for results without freezing the whole page.',
    sampleCode: "function loadQuestReward() {\n  return Promise.resolve('150 XP');\n}\n\nasync function showReward() {\n  const reward = await loadQuestReward();\n  console.log(`Reward unlocked: ${reward}`);\n}\n\nshowReward();",
    practice: {
      prompt: 'Create an async function that awaits a resolved promise and logs the result.',
      starter: "async function practiseAsync() {\n  const message = await Promise.resolve('Async code complete');\n  console.log(message);\n}\n\npractiseAsync();"
    },
    lab: {
      title: 'Async Reward Loader',
      duration: '40–55 min',
      objective: 'Use async/await to simulate loading a reward after a quest.',
      steps: [
        'Create a function that returns a Promise with a reward string.',
        'Create an async function that awaits the reward.',
        'Use try/catch inside the async function.',
        'Log success or error feedback.'
      ],
      starter: "function fetchReward() {\n  return Promise.resolve('Badge unlocked');\n}\n\nasync function showReward() {\n  try {\n    // Await the reward here.\n  } catch (error) {\n    console.log(error.message);\n  }\n}\n\nshowReward();"
    }
  },
  {
    title: 'Events',
    focus: 'Respond to user actions such as clicks, typing, and form submissions.',
    explanation: 'Events connect code to user behaviour. A button click, key press, or form submit can trigger a function called an event handler.',
    sampleCode: "const button = document.querySelector('#run-button');\n\nbutton.addEventListener('click', () => {\n  console.log('Button clicked!');\n});",
    practice: {
      prompt: 'Write a button click listener snippet. The editor will not create the button for you, but you can practise the event syntax.',
      starter: "const startButton = {\n  addEventListener(eventName, handler) {\n    console.log(`Listening for ${eventName}`);\n    handler();\n  }\n};\n\nstartButton.addEventListener('click', () => {\n  console.log('Starting quest...');\n});"
    },
    lab: {
      title: 'Interaction Plan',
      duration: '35–45 min',
      objective: 'Design the event logic for a simple interactive classroom tool.',
      steps: [
        'Choose one user action, such as clicking a start button.',
        'Write a querySelector line for the element.',
        'Attach an event listener.',
        'Log or update a value inside the handler.'
      ],
      starter: "// Simulated button for this practice runner.\nconst checkButton = {\n  addEventListener(eventName, handler) {\n    console.log(`Ready for ${eventName}`);\n    handler();\n  }\n};\n\ncheckButton.addEventListener('click', () => {\n  console.log('Answer checked!');\n});"
    }
  },
  {
    title: 'DOM Manipulation',
    focus: 'Select elements and update page content, attributes, or styles.',
    explanation: 'The DOM is the browser representation of a web page. JavaScript can select elements and change what the user sees, which is how interactive pages update without reloading.',
    sampleCode: "const message = document.querySelector('#message');\n\nmessage.textContent = 'Quest complete!';\nmessage.style.color = 'green';",
    practice: {
      prompt: 'Write a DOM snippet that selects an element and updates its text content.',
      starter: "const statusMessage = { textContent: '' };\nstatusMessage.textContent = 'Ready for the next quest';\n\nconsole.log(statusMessage.textContent);"
    },
    lab: {
      title: 'Feedback Panel Builder',
      duration: '45–60 min',
      objective: 'Plan DOM updates for a feedback panel in a learning app.',
      steps: [
        'Select a message element.',
        'Write a function that accepts feedback text and a colour.',
        'Update textContent and style inside the function.',
        'Call the function with sample feedback.'
      ],
      starter: "const feedback = { textContent: '', style: { color: '' } };\n\nfunction updateFeedback(message, colour) {\n  feedback.textContent = message;\n  feedback.style.color = colour;\n}\n\nupdateFeedback('Great effort!', 'green');\nconsole.log(feedback.textContent);\nconsole.log(feedback.style.color);"
    }
  },
  {
    title: 'API Calls',
    focus: 'Request data from APIs and use responses in an app.',
    explanation: 'APIs let apps request data from other services. The fetch function returns a promise, so API work combines asynchronous JavaScript with response handling.',
    sampleCode: "async function loadTodo() {\n  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');\n  const todo = await response.json();\n  console.log(todo.title);\n}\n\nloadTodo();",
    practice: {
      prompt: 'Write an async function that fetches data, converts the response to JSON, and logs one property.',
      starter: "async function loadData() {\n  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');\n  const data = await response.json();\n  console.log(data.title);\n}\n\nloadData();"
    },
    lab: {
      title: 'API Response Reporter',
      duration: '50–65 min',
      objective: 'Use fetch and async/await to load data and present a short report.',
      steps: [
        'Choose a public API endpoint or use the starter endpoint.',
        'Fetch the data inside an async function.',
        'Convert the response with .json().',
        'Log two useful fields from the returned object.'
      ],
      starter: "async function loadReport() {\n  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');\n  const data = await response.json();\n\n  // Log two useful fields here.\n}\n\nloadReport();"
    }
  }
];

const units = [];
export const levels = [];
let counter = 1;

syllabus.slice(0, UNIT_COUNT).forEach((week, index) => {
  const lesson = unitLessons[index];
  const unit = {
    number: index + 1,
    title: lesson.title,
    sourceTitle: week.title,
    ...lesson,
    quests: week.quests
  };

  unit.quests.forEach(q => {
    q.id = counter++;
    q.weekTitle = week.title;
    q.unitNumber = unit.number;
    levels.push(q);
  });

  units.push(unit);
});

const state = {
  xp: parseInt(localStorage.getItem('jsquests_xp')) || 0,
  unlockedLevel: parseInt(localStorage.getItem('jsquests_unlocked')) || 1,
  currentUnit: parseInt(localStorage.getItem('jsquests_unit')) || 1,
  currentQuestId: parseInt(localStorage.getItem('jsquests_quest')) || 1
};

function saveState() {
  localStorage.setItem('jsquests_xp', state.xp);
  localStorage.setItem('jsquests_unlocked', state.unlockedLevel);
  localStorage.setItem('jsquests_unit', state.currentUnit);
  localStorage.setItem('jsquests_quest', state.currentQuestId);
}

function getActiveUnit() {
  return units.find(unit => unit.number === state.currentUnit) || units[0];
}

function getActiveQuest(unit = getActiveUnit()) {
  return unit.quests.find(quest => quest.id === state.currentQuestId) || unit.quests[0];
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function initApp() {
  const appEl = document.getElementById('app');
  appEl.innerHTML = `
    <header class="app-header">
      <div class="brand-block">
        <div class="logo"><span>⚡</span> JS Quest: Classroom Edition</div>
        <p>Choose a unit, teach the concept, practise JavaScript, complete a quest, then run a class lab.</p>
      </div>
      <div class="header-actions">
        <div class="xp-pill" aria-live="polite">Current XP: <span id="xp-display">${state.xp}</span></div>
      </div>
    </header>
    <main class="app-main">
      <aside class="sidebar" id="sidebar" aria-label="Unit Navigation"></aside>
      <section class="content" id="level-container" aria-label="Unit Content" aria-live="polite"></section>
    </main>
  `;

  renderSidebar();
  renderUnit();
}

function renderSidebar() {
  const sidebar = document.getElementById('sidebar');
  sidebar.innerHTML = `
    <div>
      <h3 class="sidebar-heading">UNITS 1–10</h3>
      <p class="sidebar-note">Each unit includes a lesson explanation, sample code, practice, quest, and lab.</p>
    </div>
    <ul class="level-list unit-list">
      ${units.map(unit => {
        const completedCount = unit.quests.filter(quest => quest.id < state.unlockedLevel).length;
        const isActive = unit.number === state.currentUnit;

        return `
          <li class="level-item unit-item ${isActive ? 'active' : ''}" data-unit-id="${unit.number}" role="button" tabindex="0" aria-current="${isActive ? 'step' : 'false'}">
            <div class="icon" aria-hidden="true">${unit.number}</div>
            <div class="level-label">
              <div>Unit ${unit.number}</div>
              <small>${unit.title}</small>
              <span class="unit-progress">${completedCount}/${unit.quests.length} quests complete</span>
            </div>
          </li>
        `;
      }).join('')}
    </ul>
    <div class="achievement-panel">
      <h3 class="sidebar-heading">ACHIEVEMENTS</h3>
      <div class="achievement-grid">
        ${state.unlockedLevel > 3 ? '<div class="achievement unlocked">💎</div>' : '<div class="achievement locked">🔒</div>'}
        ${state.unlockedLevel > 8 ? '<div class="achievement unlocked">🔥</div>' : '<div class="achievement locked">🔒</div>'}
        ${state.unlockedLevel > 15 ? '<div class="achievement unlocked">🏆</div>' : '<div class="achievement locked">🔒</div>'}
      </div>
    </div>
  `;

  document.querySelectorAll('[data-unit-id]').forEach(item => {
    const selectUnit = () => {
      state.currentUnit = parseInt(item.dataset.unitId);
      state.currentQuestId = getActiveUnit().quests[0].id;
      saveState();
      renderSidebar();
      renderUnit();
    };

    item.addEventListener('click', selectUnit);
    item.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        selectUnit();
      }
    });
  });
}

function renderUnit() {
  const container = document.getElementById('level-container');
  const unit = getActiveUnit();
  const quest = getActiveQuest(unit);

  container.innerHTML = `
    <div class="unit-hero">
      <p class="eyebrow">Unit ${unit.number}</p>
      <h1>${unit.title}</h1>
      <p>${unit.focus}</p>
    </div>

    <section class="unit-section lesson-grid" aria-labelledby="lesson-heading">
      <div class="lesson-card">
        <p class="eyebrow">Explanation</p>
        <h2 id="lesson-heading">Concept overview</h2>
        <p>${unit.explanation}</p>
      </div>
      <div class="lesson-card sample-code-card">
        <p class="eyebrow">Sample code</p>
        <pre><code>${escapeHtml(unit.sampleCode)}</code></pre>
      </div>
    </section>

    <section class="unit-section" aria-labelledby="practice-heading">
      <div class="section-heading">
        <div>
          <p class="eyebrow">JS Practice</p>
          <h2 id="practice-heading">Warm-up coding space</h2>
        </div>
        <span class="badge">No XP pressure</span>
      </div>
      <div class="task-box">
        <strong>Practice prompt</strong> ${unit.practice.prompt}
      </div>
      <div class="editor-container">
        <label for="practice-editor" class="sr-only">Practice JavaScript editor</label>
        <textarea id="practice-editor" spellcheck="false" aria-label="Write practice JavaScript code here">${escapeHtml(unit.practice.starter)}</textarea>
      </div>
      <div class="action-bar">
        <button id="btn-practice-run" class="primary-btn">▶ Run Practice</button>
        <button id="btn-practice-reset" class="secondary-btn">Reset Practice</button>
      </div>
      <div id="practice-output" class="feedback-box hidden" aria-live="polite"></div>
    </section>

    <section class="unit-section" aria-labelledby="quest-heading">
      <div class="section-heading">
        <div>
          <p class="eyebrow">Quest</p>
          <h2 id="quest-heading">Guided challenge</h2>
        </div>
        <span class="badge">${unit.quests.length} quests</span>
      </div>
      <div class="quest-switcher" aria-label="Quest selector">
        ${unit.quests.map(unitQuest => {
          const isActive = unitQuest.id === quest.id;
          const isCompleted = unitQuest.id < state.unlockedLevel;
          return `
            <button class="quest-chip ${isActive ? 'active' : ''} ${isCompleted ? 'completed' : ''}" data-quest-id="${unitQuest.id}" aria-pressed="${isActive}">
              ${isCompleted ? '✓ ' : ''}${unitQuest.shortTitle || unitQuest.title}
            </button>
          `;
        }).join('')}
      </div>
      ${renderQuestWorkspace(quest)}
    </section>

    <section class="unit-section" aria-labelledby="lab-heading">
      <div class="section-heading">
        <div>
          <p class="eyebrow">Lab</p>
          <h2 id="lab-heading">${unit.lab.title}</h2>
        </div>
        <span class="badge">${unit.lab.duration}</span>
      </div>
      <div class="lab-layout">
        <article class="lab-brief">
          <p class="explanation">${unit.lab.objective}</p>
          <div class="task-box">
            <strong>Lab steps</strong>
            <ol class="lab-list">
              ${unit.lab.steps.map(step => `<li>${step}</li>`).join('')}
            </ol>
          </div>
        </article>
        <section class="level-card">
          <div class="editor-container">
            <label for="lab-editor" class="sr-only">Class lab JavaScript editor</label>
            <textarea id="lab-editor" spellcheck="false" aria-label="Write class lab JavaScript code here">${escapeHtml(unit.lab.starter)}</textarea>
          </div>
          <div class="action-bar">
            <button id="btn-lab-run" class="primary-btn">▶ Run Lab Code</button>
            <button id="btn-lab-reset" class="secondary-btn">Reset Lab</button>
          </div>
          <div id="lab-output" class="feedback-box hidden" aria-live="polite"></div>
        </section>
      </div>
    </section>
  `;

  wireUnitInteractions(unit);
}

function renderQuestWorkspace(quest) {
  const isCompleted = quest.id < state.unlockedLevel;

  return `
    <div class="quest-workspace">
      <div class="level-header">
        <h3>${quest.weekTitle}: ${quest.title}</h3>
        ${isCompleted ? '<span class="badge completed-badge" aria-label="Status: Completed">Completed</span>' : ''}
      </div>
      <p class="explanation">${quest.explanation}</p>
      <div class="task-box">
        <strong>Task</strong> ${quest.task}
      </div>
      <button id="btn-hint" class="hint-btn" aria-expanded="false" aria-controls="hint-text">💡 Need a hint?</button>
      <div id="hint-text" class="hint-text hidden" aria-live="polite"><pre>${escapeHtml(quest.hint)}</pre></div>
      <div class="editor-container">
        <label for="code-editor" class="sr-only">Quest Code Editor</label>
        <textarea id="code-editor" spellcheck="false" aria-label="Write your JavaScript quest solution here">${escapeHtml(quest.startCode)}</textarea>
      </div>
      <div class="action-bar">
        <button id="btn-run" class="primary-btn">▶ Run Quest</button>
        <button id="btn-next" class="secondary-btn hidden">Next Quest ➔</button>
      </div>
      <div id="feedback-box" class="feedback-box hidden" aria-live="assertive"></div>
    </div>
  `;
}

function wireUnitInteractions(unit) {
  document.getElementById('btn-practice-run').addEventListener('click', () => runUserCode('practice-editor', 'practice-output'));
  document.getElementById('btn-practice-reset').addEventListener('click', () => {
    document.getElementById('practice-editor').value = unit.practice.starter;
    document.getElementById('practice-output').classList.add('hidden');
  });

  document.getElementById('btn-lab-run').addEventListener('click', () => runUserCode('lab-editor', 'lab-output'));
  document.getElementById('btn-lab-reset').addEventListener('click', () => {
    document.getElementById('lab-editor').value = unit.lab.starter;
    document.getElementById('lab-output').classList.add('hidden');
  });

  document.querySelectorAll('[data-quest-id]').forEach(button => {
    button.addEventListener('click', () => {
      state.currentQuestId = parseInt(button.dataset.questId);
      saveState();
      renderUnit();
    });
  });

  document.getElementById('btn-hint').addEventListener('click', (e) => {
    const hintText = document.getElementById('hint-text');
    hintText.classList.toggle('hidden');
    const isHidden = hintText.classList.contains('hidden');
    e.target.setAttribute('aria-expanded', isHidden ? 'false' : 'true');
  });

  document.getElementById('btn-run').addEventListener('click', runQuestCode);
  document.getElementById('btn-next').addEventListener('click', goToNextQuest);

  if (state.currentQuestId < state.unlockedLevel && state.currentQuestId < levels.length) {
    document.getElementById('btn-next').classList.remove('hidden');
  }
}

function showFeedback(type, message, targetId = 'feedback-box') {
  const feedbackBox = document.getElementById(targetId);
  feedbackBox.classList.remove('hidden');
  feedbackBox.className = `feedback-box ${type}`;

  const icon = type === 'success' ? '✅' : '❌';
  feedbackBox.innerHTML = `<strong>${icon}</strong> <div>${message}</div>`;
}

async function runUserCode(editorId, outputId) {
  const code = document.getElementById(editorId).value;

  if (!code.trim()) {
    showFeedback('error', 'Your code editor is empty. Try typing your solution!', outputId);
    return;
  }

  const logs = [];
  const practiceConsole = {
    log: (...items) => logs.push(items.map(item => String(item)).join(' '))
  };

  try {
    const testFunc = new AsyncFunction('console', code);
    const result = await testFunc(practiceConsole);
    const output = [
      ...logs,
      result !== undefined ? `Returned: ${result}` : ''
    ].filter(Boolean).join('\n') || 'Code ran successfully. Add console.log(...) to show output.';

    showFeedback('success', `<pre>${escapeHtml(output)}</pre>`, outputId);
  } catch (error) {
    let friendlyError = error.message;
    if (error instanceof ReferenceError) {
      friendlyError = `Variable or function hasn't been created yet. (${error.message})`;
    } else if (error instanceof SyntaxError) {
      friendlyError = `Looks like a typo! Check brackets and semicolons. (${error.message})`;
    }
    showFeedback('error', `<b>Error:</b> ${escapeHtml(friendlyError)}`, outputId);
  }
}

async function runQuestCode() {
  const code = document.getElementById('code-editor').value;
  const unit = getActiveUnit();
  const quest = getActiveQuest(unit);

  if (!code.trim()) {
    showFeedback('error', 'Your code editor is empty. Try typing your solution!');
    return;
  }

  try {
    if (quest.evalMode === 'string') {
      const testFunc = new Function('code', `${quest.test}`);
      const result = testFunc(code);
      if (result === true) {
        showFeedback('success', quest.successMessage);
        handleQuestSuccess(quest);
      } else {
        showFeedback('error', "That code doesn't quite match the requirement. Keep trying!");
      }
      return;
    }

    const wrappedCode = `
      return (async function() {
        try {
          ${code}
          ${quest.test}
        } catch (e) {
          throw e;
        }
      })();
    `;

    const testFunc = new AsyncFunction(wrappedCode);
    const result = await testFunc();

    if (result === quest.expected || (typeof result === 'string' && typeof quest.expected === 'string' && result.includes(quest.expected))) {
      showFeedback('success', quest.successMessage);
      handleQuestSuccess(quest);
    } else if (result === undefined) {
      showFeedback('error', "Hmm, I didn't find the expected variable or return value.");
    } else {
      showFeedback('error', `Almost! Expected <b>${escapeHtml(quest.expected)}</b>, but your code produced <b>${escapeHtml(result)}</b>.`);
    }
  } catch (error) {
    let friendlyError = error.message;
    if (error instanceof ReferenceError) {
      friendlyError = `Variable or function hasn't been created yet. (${error.message})`;
    } else if (error instanceof SyntaxError) {
      friendlyError = `Looks like a typo! Check brackets and semicolons. (${error.message})`;
    }
    showFeedback('error', `<b>Error:</b> ${escapeHtml(friendlyError)}`);
  }
}

function handleQuestSuccess(quest) {
  if (quest.id === state.unlockedLevel) {
    state.xp += 150;
    state.unlockedLevel += 1;
    saveState();

    document.getElementById('xp-display').innerText = state.xp;
    renderSidebar();
  }

  if (quest.id < levels.length) {
    document.getElementById('btn-next').classList.remove('hidden');
    document.getElementById('btn-next').scrollIntoView({behavior: 'smooth'});
  }
}

function goToNextQuest() {
  const nextQuest = levels.find(quest => quest.id === state.currentQuestId + 1);
  if (!nextQuest) return;

  state.currentQuestId = nextQuest.id;
  state.currentUnit = Math.min(nextQuest.unitNumber, UNIT_COUNT);
  saveState();
  renderSidebar();
  renderUnit();
}

document.addEventListener('DOMContentLoaded', initApp);
