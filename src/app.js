import { syllabus } from './syllabus.js';

const AsyncFunction = Object.getPrototypeOf(async function(){}).constructor;
const UNIT_COUNT = 10;

const MODES = {
  PRACTICE: 'practice',
  QUEST: 'quest',
  LAB: 'lab'
};

const modeDetails = {
  [MODES.PRACTICE]: {
    icon: '🧪',
    label: 'Practice JS',
    description: 'Warm up with short coding drills and instant console-style feedback.'
  },
  [MODES.QUEST]: {
    icon: '⚔️',
    label: 'Quest Path',
    description: 'Complete the guided JS fundamentals adventure and unlock XP.'
  },
  [MODES.LAB]: {
    icon: '🏫',
    label: 'Class Lab',
    description: 'Open a teacher-guided lab brief with starter code and success criteria.'
  }
};

const practicePrompts = [
  {
    title: 'Variable warm-up',
    prompt: 'Create a variable called topic and set it to any JavaScript concept you want to revise. Then log it.',
    starter: "let topic = 'arrays';\nconsole.log(`Today I am practising ${topic}.`);"
  },
  {
    title: 'Function reps',
    prompt: 'Write a function that accepts a number and returns the number doubled. Log one test call.',
    starter: 'function double(number) {\n  return number * 2;\n}\n\nconsole.log(double(6));'
  },
  {
    title: 'Array sprint',
    prompt: 'Loop through an array of scores and calculate the total. Log the total.',
    starter: 'const scores = [4, 7, 9];\nlet total = 0;\n\nfor (const score of scores) {\n  total += score;\n}\n\nconsole.log(total);'
  }
];

const classLabs = [
  {
    title: 'Lab 1: Profile Card Builder',
    duration: '35–45 min',
    objective: 'Use variables, template literals, functions, and conditionals to build a reusable student profile summary.',
    steps: [
      'Create variables for name, skill level, favourite JS topic, and completed quest count.',
      'Write a function that returns a short profile sentence using those variables.',
      'Add a conditional that recommends the next study action based on completed quests.',
      'Log the final profile and recommendation.'
    ],
    starter: "const studentName = 'Amina';\nconst skillLevel = 'beginner';\nconst favouriteTopic = 'functions';\nconst completedQuests = 3;\n\nfunction buildProfile() {\n  // Return a profile sentence here.\n}\n\nfunction recommendNextStep() {\n  // Return a recommendation based on completedQuests.\n}\n\nconsole.log(buildProfile());\nconsole.log(recommendNextStep());",
    successCriteria: [
      'Uses const or let appropriately.',
      'Includes at least two functions.',
      'Uses one if/else or ternary decision.',
      'Produces readable output in the practice console.'
    ]
  },
  {
    title: 'Lab 2: Quest Score Analyzer',
    duration: '45–60 min',
    objective: 'Practise arrays, loops, and functions by analysing a small set of quest scores.',
    steps: [
      'Store at least five numeric scores in an array.',
      'Write a function that calculates the average score.',
      'Write a function that counts how many scores are passing.',
      'Log a short progress report for the class.'
    ],
    starter: 'const scores = [80, 72, 95, 64, 88];\n\nfunction getAverageScore(scoreList) {\n  // Calculate and return the average.\n}\n\nfunction countPassingScores(scoreList) {\n  // Count scores that are 70 or higher.\n}\n\nconsole.log(`Average: ${getAverageScore(scores)}`);\nconsole.log(`Passing quests: ${countPassingScores(scores)}`);',
    successCriteria: [
      'Uses an array of numbers.',
      'Uses at least one loop or array method.',
      'Returns values from both functions.',
      'Shows the results with console.log.'
    ]
  }
];

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
  currentLevel: 1,
  mode: localStorage.getItem('jsquests_mode') || MODES.QUEST,
  practicePrompt: 0,
  activeLab: 0
};

function saveState() {
  localStorage.setItem('jsquests_xp', state.xp);
  localStorage.setItem('jsquests_unlocked', state.unlockedLevel);
  localStorage.setItem('jsquests_mode', state.mode);
}

function initApp() {
  const appEl = document.getElementById('app');
  appEl.innerHTML = `
    <header class="app-header">
      <div class="brand-block">
        <div class="logo"><span>⚡</span> JS Quest: Classroom Edition</div>
        <p>Practise JavaScript, follow quests, or launch a class lab.</p>
      </div>
      <div class="header-actions">
        <div class="xp-pill" aria-live="polite">Current XP: <span id="xp-display">${state.xp}</span></div>
      </div>
    </header>
    <nav class="mode-nav" aria-label="Learning mode selector">
      ${Object.entries(modeDetails).map(([mode, detail]) => `
        <button class="mode-tab ${state.mode === mode ? 'active' : ''}" data-mode="${mode}" aria-pressed="${state.mode === mode}">
          <span aria-hidden="true">${detail.icon}</span>
          <span>${detail.label}</span>
        </button>
      `).join('')}
    </nav>
    <main class="app-main">
      <aside class="sidebar" id="sidebar" aria-label="Learning Navigation"></aside>
      <section class="content" id="level-container" aria-label="Learning Content" aria-live="polite"></section>
    </main>
  `;

  document.querySelectorAll('.mode-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      state.mode = tab.dataset.mode;
      saveState();
      initApp();
    });
  });

  renderSidebar();
  renderContent();
}

function renderContent() {
  if (state.mode === MODES.PRACTICE) {
    renderPractice();
    return;
  }

  if (state.mode === MODES.LAB) {
    renderClassLab();
    return;
  }

  renderLevel();
}

function renderSidebar() {
  if (state.mode === MODES.PRACTICE) {
    renderPracticeSidebar();
    return;
  }

  if (state.mode === MODES.LAB) {
    renderLabSidebar();
    return;
  }

  renderQuestSidebar();
}

function renderModeIntro(mode) {
  const detail = modeDetails[mode];
  return `
    <div class="mode-intro">
      <div class="mode-intro-icon" aria-hidden="true">${detail.icon}</div>
      <div>
        <p class="eyebrow">${detail.label}</p>
        <h2>${detail.description}</h2>
      </div>
    </div>
  `;
}

function renderPracticeSidebar() {
  const sidebar = document.getElementById('sidebar');
  sidebar.innerHTML = `
    <div>
      <h3 class="sidebar-heading">PRACTICE DRILLS</h3>
      <p class="sidebar-note">Choose a starter drill, edit freely, and run it without affecting quest XP.</p>
    </div>
    <ul class="level-list">
      ${practicePrompts.map((prompt, index) => `
        <li class="level-item ${index === state.practicePrompt ? 'active' : ''}" data-practice-id="${index}" role="button" tabindex="0" aria-current="${index === state.practicePrompt ? 'step' : 'false'}">
          <div class="icon" aria-hidden="true">${index + 1}</div>
          <div>
            <div>${prompt.title}</div>
            <small>${prompt.prompt}</small>
          </div>
        </li>
      `).join('')}
    </ul>
  `;

  document.querySelectorAll('[data-practice-id]').forEach(item => {
    const selectPractice = () => {
      state.practicePrompt = parseInt(item.dataset.practiceId);
      renderSidebar();
      renderPractice();
    };
    item.addEventListener('click', selectPractice);
    item.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        selectPractice();
      }
    });
  });
}

function renderLabSidebar() {
  const sidebar = document.getElementById('sidebar');
  sidebar.innerHTML = `
    <div>
      <h3 class="sidebar-heading">CLASS LABS</h3>
      <p class="sidebar-note">Use these as editable lab briefs now. Later, this area can become a paid teacher workspace.</p>
    </div>
    <ul class="level-list">
      ${classLabs.map((lab, index) => `
        <li class="level-item ${index === state.activeLab ? 'active' : ''}" data-lab-id="${index}" role="button" tabindex="0" aria-current="${index === state.activeLab ? 'step' : 'false'}">
          <div class="icon" aria-hidden="true">${index + 1}</div>
          <div>
            <div>${lab.title}</div>
            <small>${lab.duration}</small>
          </div>
        </li>
      `).join('')}
    </ul>
  `;

  document.querySelectorAll('[data-lab-id]').forEach(item => {
    const selectLab = () => {
      state.activeLab = parseInt(item.dataset.labId);
      renderSidebar();
      renderClassLab();
    };
    item.addEventListener('click', selectLab);
    item.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        selectLab();
      }
    });
  });
}

function renderQuestSidebar() {
  const sidebar = document.getElementById('sidebar');
  let html = '<div><h3 id="progress-heading" class="sidebar-heading">MY PROGRESS</h3><p class="sidebar-note">Complete quests in order to unlock the next challenge.</p></div>';
  
  syllabus.forEach(week => {
    const weekId = `week-heading-${week.title.replace(/[^a-z0-9]/gi, '-').toLowerCase()}`;
    html += `<div class="week-group">
               <h4 id="${weekId}" class="week-heading">${week.title}</h4>
               <ul class="level-list" aria-labelledby="progress-heading ${weekId}">`;
    
    week.quests.forEach(q => {
      const isUnlocked = q.id <= state.unlockedLevel;
      const isActive = q.id === state.currentLevel;
      const isCompleted = q.id < state.unlockedLevel;
      
      let icon = q.id;
      let classes = 'level-item';
      if (isActive) classes += ' active';
      else if (isCompleted) { classes += ' completed'; icon = '✓'; }
      else if (!isUnlocked) { classes += ' locked'; icon = '🔒'; }

      const badge = q.isSideQuest ? '<span class="side-quest-badge">Side Quest</span>' : '';

      html += `
        <li class="${classes}" data-id="${q.id}" role="button" tabindex="${!isUnlocked ? '-1' : '0'}" aria-current="${isActive ? 'step' : 'false'}" ${!isUnlocked ? 'aria-disabled="true"' : ''}>
            <div class="icon" aria-hidden="true">${icon}</div>
            <div class="level-label">
                <div>${q.shortTitle || q.title}</div>
            </div>
            ${badge}
        </li>
      `;
    });
    html += '</ul></div>';
  });
  
  html += `
    <div class="achievement-panel">
      <h3 class="sidebar-heading">ACHIEVEMENTS</h3>
      <div id="achievements-container" class="achievement-grid">
        <!-- Filled based on progress -->
      </div>
    </div>
  `;
  
  sidebar.innerHTML = html;

  const achievementsDiv = document.getElementById('achievements-container');
  let achHtml = '';
  achHtml += state.unlockedLevel > 3 ? '<div class="achievement unlocked">💎</div>' : '<div class="achievement locked">🔒</div>';
  achHtml += state.unlockedLevel > 8 ? '<div class="achievement unlocked">🔥</div>' : '<div class="achievement locked">🔒</div>';
  achHtml += state.unlockedLevel > 15 ? '<div class="achievement unlocked">🏆</div>' : '<div class="achievement locked">🔒</div>';
  achievementsDiv.innerHTML = achHtml;

  document.querySelectorAll('.level-item[data-id]').forEach(item => {
    const trigger = (e) => {
      const id = parseInt(e.currentTarget.dataset.id);
      if (id <= state.unlockedLevel) {
        state.currentLevel = id;
        renderQuestSidebar();
        renderLevel();
      }
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

function renderPractice() {
  const container = document.getElementById('level-container');
  const prompt = practicePrompts[state.practicePrompt];

  container.innerHTML = `
    ${renderModeIntro(MODES.PRACTICE)}
    <div class="level-card">
      <div class="task-box">
        <strong>${prompt.title}</strong> ${prompt.prompt}
      </div>
      <div class="editor-container">
        <label for="practice-editor" class="sr-only">Practice JavaScript editor</label>
        <textarea id="practice-editor" spellcheck="false" aria-label="Write practice JavaScript code here">${prompt.starter}</textarea>
      </div>
      <div class="action-bar">
        <button id="btn-practice-run" class="primary-btn">▶ Run Practice</button>
        <button id="btn-practice-reset" class="secondary-btn">Reset Starter</button>
      </div>
      <div id="practice-output" class="feedback-box hidden" aria-live="polite"></div>
    </div>
  `;

  document.getElementById('btn-practice-run').addEventListener('click', runPracticeCode);
  document.getElementById('btn-practice-reset').addEventListener('click', () => {
    document.getElementById('practice-editor').value = prompt.starter;
    document.getElementById('practice-output').classList.add('hidden');
  });
}

function renderClassLab() {
  const container = document.getElementById('level-container');
  const lab = classLabs[state.activeLab];

  container.innerHTML = `
    ${renderModeIntro(MODES.LAB)}
    <div class="lab-layout">
      <article class="lab-brief">
        <div class="level-header">
          <h2>${lab.title}</h2>
          <span class="badge">${lab.duration}</span>
        </div>
        <p class="explanation">${lab.objective}</p>
        <div class="task-box">
          <strong>Lab steps</strong>
          <ol class="lab-list">
            ${lab.steps.map(step => `<li>${step}</li>`).join('')}
          </ol>
        </div>
        <div class="task-box success-criteria">
          <strong>Success criteria</strong>
          <ul class="lab-list">
            ${lab.successCriteria.map(criteria => `<li>${criteria}</li>`).join('')}
          </ul>
        </div>
      </article>
      <section class="level-card">
        <div class="editor-container">
          <label for="lab-editor" class="sr-only">Class lab JavaScript editor</label>
          <textarea id="lab-editor" spellcheck="false" aria-label="Write class lab JavaScript code here">${lab.starter}</textarea>
        </div>
        <div class="action-bar">
          <button id="btn-lab-run" class="primary-btn">▶ Run Lab Code</button>
          <button id="btn-lab-reset" class="secondary-btn">Reset Starter</button>
        </div>
        <div id="lab-output" class="feedback-box hidden" aria-live="polite"></div>
      </section>
    </div>
  `;

  document.getElementById('btn-lab-run').addEventListener('click', runLabCode);
  document.getElementById('btn-lab-reset').addEventListener('click', () => {
    document.getElementById('lab-editor').value = lab.starter;
    document.getElementById('lab-output').classList.add('hidden');
  });
}

function renderLevel() {
  const container = document.getElementById('level-container');
  const unit = getActiveUnit();
  const quest = getActiveQuest(unit);

  container.innerHTML = `
    ${renderModeIntro(MODES.QUEST)}
    <div class="level-header">
      <h2>${lvl.weekTitle}: ${lvl.title}</h2>
      ${isCompleted ? '<span class="badge completed-badge" aria-label="Status: Completed">Completed</span>' : ''}
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
  document.getElementById('btn-run').addEventListener('click', runCode);
  document.getElementById('btn-next').addEventListener('click', () => {
    if (state.currentLevel < levels.length) {
      state.currentLevel++;
      renderQuestSidebar();
      renderLevel();
    }
  });
  
  if (state.currentLevel < state.unlockedLevel && state.currentLevel < levels.length) {
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

    showFeedback('success', `<pre>${output}</pre>`, outputId);
  } catch (error) {
    let friendlyError = error.message;
    if (error instanceof ReferenceError) {
      friendlyError = `Variable or function hasn't been created yet. (${error.message})`;
    } else if (error instanceof SyntaxError) {
      friendlyError = `Looks like a typo! Check brackets and semicolons. (${error.message})`;
    }
    showFeedback('error', `<b>Error:</b> ${friendlyError}`, outputId);
  }
}

function runPracticeCode() {
  runUserCode('practice-editor', 'practice-output');
}

function runLabCode() {
  runUserCode('lab-editor', 'lab-output');
}

async function runCode() {
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
    renderQuestSidebar();
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
