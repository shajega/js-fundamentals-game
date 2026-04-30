import { syllabus } from './syllabus.js';

const AsyncFunction = Object.getPrototypeOf(async function(){}).constructor;

export const levels = [];
let counter = 1;

syllabus.forEach(week => {
  week.quests.forEach(q => {
    q.id = counter++;
    q.weekTitle = week.title;
    levels.push(q);
  });
});

const state = {
  xp: parseInt(localStorage.getItem('jsquests_xp')) || 0,
  unlockedLevel: parseInt(localStorage.getItem('jsquests_unlocked')) || 1,
  currentLevel: 1
};

function saveState() {
  localStorage.setItem('jsquests_xp', state.xp);
  localStorage.setItem('jsquests_unlocked', state.unlockedLevel);
}

function initApp() {
  const appEl = document.getElementById('app');
  appEl.innerHTML = `
    <header class="app-header">
      <div class="logo"><span>⚡</span> JS Quest: Apprentice Edition</div>
      <div class="xp-pill" aria-live="polite">Current XP: <span id="xp-display">${state.xp}</span></div>
    </header>
    <main class="app-main">
      <aside class="sidebar" id="sidebar" aria-label="Quest Navigation"></aside>
      <section class="content" id="level-container" aria-label="Quest Content" aria-live="polite"></section>
    </main>
  `;
  renderSidebar();
  renderLevel();
}

function renderSidebar() {
  const sidebar = document.getElementById('sidebar');
  let html = '<div><h3 id="progress-heading" style="margin-bottom: 12px; font-size: 14px; color: var(--text-light); text-transform: uppercase; font-weight: 700; letter-spacing: 0.05em;">MY PROGRESS</h3></div>';
  
  syllabus.forEach(week => {
    const weekId = `week-heading-${week.title.replace(/[^a-z0-9]/gi, '-').toLowerCase()}`;
    html += `<div style="margin-top: 24px;">
               <h4 id="${weekId}" style="font-size: 11px; text-transform: uppercase; color: var(--text-light); margin-bottom: 8px; letter-spacing: 0.05em;">${week.title}</h4>
               <ul class="level-list" aria-labelledby="progress-heading ${weekId}">`;
    
    week.quests.forEach(q => {
      const isUnlocked = q.id <= state.unlockedLevel;
      const isActive = q.id === state.currentLevel;
      const isCompleted = q.id < state.unlockedLevel;
      
      let icon = q.id;
      let classes = "level-item";
      if (isActive) classes += " active";
      else if (isCompleted) { classes += " completed"; icon = "✓"; }
      else if (!isUnlocked) { classes += " locked"; icon = "🔒"; }

      const badge = q.isSideQuest ? `<span style="font-size:10px; background:#fef3c7; color:#92400e; padding:2px 6px; border-radius:4px; margin-left:auto;">Side Quest</span>` : '';

      html += `
        <li class="${classes}" data-id="${q.id}" role="button" tabindex="${!isUnlocked ? '-1' : '0'}" aria-current="${isActive ? 'step' : 'false'}" ${!isUnlocked ? 'aria-disabled="true"' : ''}>
            <div class="icon" aria-hidden="true">${icon}</div>
            <div style="flex:1;">
                <div style="font-weight: 600; font-size: 13px;">${q.shortTitle || q.title}</div>
            </div>
            ${badge}
        </li>
      `;
    });
    html += `</ul></div>`;
  });
  
  html += `
    <div style="margin-top: 24px;">
      <h3 style="margin-bottom: 12px; font-size: 14px; color: var(--text-light); text-transform: uppercase; font-weight: 700; letter-spacing: 0.05em;">ACHIEVEMENTS</h3>
      <div id="achievements-container" style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px;">
        <!-- Filled based on progress -->
      </div>
    </div>
  `;
  
  sidebar.innerHTML = html;

  const achievementsDiv = document.getElementById('achievements-container');
  let achHtml = "";
  achHtml += state.unlockedLevel > 3 ? `<div style="aspect-ratio: 1; background: #fef3c7; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 20px; border: 2px solid var(--accent);">💎</div>` : `<div style="aspect-ratio: 1; background: #f3f4f6; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 20px; border: 2px dashed #d1d5db;">🔒</div>`;
  achHtml += state.unlockedLevel > 8 ? `<div style="aspect-ratio: 1; background: #fef3c7; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 20px; border: 2px solid var(--accent);">🔥</div>` : `<div style="aspect-ratio: 1; background: #f3f4f6; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 20px; border: 2px dashed #d1d5db;">🔒</div>`;
  achHtml += state.unlockedLevel > 15 ? `<div style="aspect-ratio: 1; background: #fef3c7; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 20px; border: 2px solid var(--accent);">🏆</div>` : `<div style="aspect-ratio: 1; background: #f3f4f6; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 20px; border: 2px dashed #d1d5db;">🔒</div>`;
  achievementsDiv.innerHTML = achHtml;

  document.querySelectorAll('.level-item').forEach(item => {
    const trigger = (e) => {
      const id = parseInt(e.currentTarget.dataset.id);
      if (id <= state.unlockedLevel) {
        state.currentLevel = id;
        renderSidebar();
        renderLevel();
      }
    };
    item.addEventListener('click', trigger);
    item.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        trigger(e);
      }
    });
  });
}

function renderLevel() {
  const container = document.getElementById('level-container');
  const lvl = levels.find(l => l.id === state.currentLevel);
  const isCompleted = lvl.id < state.unlockedLevel;

  container.innerHTML = `
    <div class="level-header">
      <h2 style="font-weight: 800;">${lvl.weekTitle}: ${lvl.title}</h2>
      ${isCompleted ? '<span class="badge" style="background:#d1fae5; color:#065f46;" aria-label="Status: Completed">Completed</span>' : ''}
    </div>
    <div class="level-card">
      <p class="explanation">${lvl.explanation}</p>
      
      <div class="task-box">
        <strong>Task</strong> ${lvl.task}
      </div>
      
      <button id="btn-hint" class="hint-btn" aria-expanded="false" aria-controls="hint-text">💡 Need a hint?</button>
      <div id="hint-text" class="hint-text hidden" aria-live="polite"><pre>${lvl.hint}</pre></div>

      <div class="editor-container">
        <label for="code-editor" class="sr-only">Code Editor</label>
        <textarea id="code-editor" spellcheck="false" aria-label="Write your JavaScript code here">${lvl.startCode}</textarea>
      </div>

      <div class="action-bar">
        <button id="btn-run" class="primary-btn">▶ Run Code</button>
        <button id="btn-next" class="secondary-btn hidden">Next Quest ➔</button>
      </div>

      <div id="feedback-box" class="feedback-box hidden" aria-live="assertive"></div>
    </div>
  `;

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
      renderSidebar();
      renderLevel();
    }
  });
  
  if (state.currentLevel < state.unlockedLevel && state.currentLevel < levels.length) {
    document.getElementById('btn-next').classList.remove('hidden');
  }
}

function showFeedback(type, message) {
  const feedbackBox = document.getElementById('feedback-box');
  feedbackBox.classList.remove('hidden');
  feedbackBox.className = `feedback-box ${type}`;
  
  const icon = type === 'success' ? '✅' : '❌';
  feedbackBox.innerHTML = `<strong>${icon}</strong> <div>${message}</div>`;
}

async function runCode() {
  const code = document.getElementById('code-editor').value;
  const lvl = levels[state.currentLevel - 1];

  if (!code.trim()) {
    showFeedback('error', 'Your code editor is empty. Try typing your solution!');
    return;
  }

  try {
    if (lvl.evalMode === 'string') {
        const testFunc = new Function('code', `${lvl.test}`);
        const result = testFunc(code);
        if (result === true) {
            showFeedback('success', lvl.successMessage);
            handleSuccess();
        } else {
            showFeedback('error', "That code doesn't quite match the requirement. Keep trying!");
        }
        return;
    }

    const wrappedCode = `
      return (async function() {
        try {
          ${code}
          ${lvl.test}
        } catch (e) {
          throw e;
        }
      })();
    `;
    
    const testFunc = new AsyncFunction(wrappedCode);
    const result = await testFunc();

    if (result === lvl.expected || (typeof result === 'string' && typeof lvl.expected === 'string' && result.includes(lvl.expected))) {
      showFeedback('success', lvl.successMessage);
      handleSuccess();
    } else if (result === undefined) {
      showFeedback('error', "Hmm, I didn't find the expected variable or return value.");
    } else {
      showFeedback('error', `Almost! Expected <b>${lvl.expected}</b>, but your code produced <b>${result}</b>.`);
    }
  } catch (error) {
    let friendlyError = error.message;
    if (error instanceof ReferenceError) {
      friendlyError = `Variable or function hasn't been created yet. (${error.message})`;
    } else if (error instanceof SyntaxError) {
      friendlyError = `Looks like a typo! Check brackets and semicolons. (${error.message})`;
    }
    showFeedback('error', `<b>Error:</b> ${friendlyError}`);
  }
}

function handleSuccess() {
  if (state.currentLevel === state.unlockedLevel) {
    state.xp += 150;
    state.unlockedLevel += 1;
    saveState();
    
    document.getElementById('xp-display').innerText = state.xp;
    renderSidebar(); 
  }
  
  if (state.currentLevel < levels.length) {
    document.getElementById('btn-next').classList.remove('hidden');
    document.getElementById('btn-next').scrollIntoView({behavior: 'smooth'});
  }
}

document.addEventListener('DOMContentLoaded', initApp);
