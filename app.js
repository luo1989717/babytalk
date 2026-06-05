const defaultWordSeeds = [
  ["people", "爸爸", "baba", "👨", ["爸爸抱", "爸爸来", "爸爸好"]],
  ["people", "妈妈", "mama", "👩", ["妈妈抱", "妈妈来", "妈妈亲"]],
  ["people", "爷爷", "yeye", "👴", ["爷爷好", "爷爷来", "找爷爷"]],
  ["people", "奶奶", "nainai", "👵", ["奶奶好", "奶奶抱", "找奶奶"]],
  ["people", "外公", "waigong", "👴", ["外公好", "外公来", "找外公"]],
  ["people", "外婆", "waipo", "👵", ["外婆好", "外婆抱", "找外婆"]],
  ["people", "哥哥", "gege", "👦", ["哥哥玩", "哥哥来", "找哥哥"]],
  ["people", "姐姐", "jiejie", "👧", ["姐姐玩", "姐姐来", "找姐姐"]],
  ["people", "弟弟", "didi", "🧒", ["弟弟小", "弟弟来", "抱弟弟"]],
  ["people", "妹妹", "meimei", "👧", ["妹妹小", "妹妹来", "抱妹妹"]],
  ["people", "宝宝", "baobao", "👶", ["宝宝好", "宝宝来", "宝宝笑"]],
  ["people", "老师", "laoshi", "🧑‍🏫", ["老师好", "找老师", "老师来"]],
  ["people", "阿姨", "ayi", "👩", ["阿姨好", "阿姨来", "找阿姨"]],
  ["people", "叔叔", "shushu", "👨", ["叔叔好", "叔叔来", "找叔叔"]],
  ["people", "医生", "yisheng", "🧑‍⚕️", ["看医生", "医生好", "医生来"]],
  ["people", "朋友", "pengyou", "🧒", ["小朋友", "一起玩", "朋友好"]],
  ["people", "自己", "ziji", "🙂", ["我自己", "自己来", "自己拿"]],

  ["need", "抱抱", "baobao", "🫂", ["要抱抱", "妈妈抱", "爸爸抱"]],
  ["need", "吃饭", "chifan", "🍚", ["饭饭", "吃一口", "我要吃"]],
  ["need", "喝水", "heshui", "🥤", ["杯杯", "喝一口", "我要喝"]],
  ["need", "喝奶", "henai", "🍼", ["奶奶", "奶瓶", "我要喝"]],
  ["need", "尿尿", "niaoniao", "🚽", ["要尿尿", "去厕所", "脱裤子"]],
  ["need", "臭臭", "chouchou", "🚽", ["拉臭臭", "换尿布", "擦擦"]],
  ["need", "还要", "haiyao", "☝️", ["还要吃", "还要玩", "再来"]],
  ["need", "不要", "buyao", "🙅", ["不要了", "不想要", "不要碰"]],
  ["need", "帮忙", "bangmang", "🤝", ["帮帮我", "妈妈帮", "爸爸帮"]],
  ["need", "拿来", "nalai", "🤲", ["拿给我", "拿这个", "给宝宝"]],
  ["need", "开门", "kaimen", "🚪", ["门开开", "开一下", "我要开"]],
  ["need", "穿鞋", "chuanxie", "👟", ["穿鞋鞋", "出门啦", "穿上鞋"]],
  ["need", "脱鞋", "tuoxie", "🦶", ["脱鞋鞋", "回家啦", "脱下来"]],
  ["need", "擦擦", "caca", "🧻", ["擦嘴巴", "擦手手", "擦干净"]],
  ["need", "疼疼", "tengteng", "🤕", ["这里疼", "要抱抱", "吹一吹"]],
  ["need", "渴了", "kele", "🥤", ["喝水水", "要杯杯", "想喝水"]],
  ["need", "饿了", "ele", "🍚", ["吃饭饭", "要吃饭", "肚子饿"]],

  ["thing", "球", "qiu", "⚽", ["球球", "滚球", "拍球"]],
  ["thing", "车", "che", "🚗", ["车车", "开车", "滴滴"]],
  ["thing", "灯", "deng", "💡", ["灯灯", "亮了", "关灯"]],
  ["thing", "门", "men", "🚪", ["门门", "开门", "关门"]],
  ["thing", "鞋", "xie", "👟", ["鞋鞋", "穿鞋", "小鞋"]],
  ["thing", "帽子", "maozi", "🧢", ["戴帽子", "小帽子", "帽帽"]],
  ["thing", "杯子", "beizi", "🥤", ["杯杯", "喝水", "拿杯子"]],
  ["thing", "勺子", "shaozi", "🥄", ["小勺子", "吃饭", "拿勺子"]],
  ["thing", "碗", "wan", "🥣", ["小碗", "饭碗", "拿碗"]],
  ["thing", "书", "shu", "📖", ["看书", "翻书", "小书"]],
  ["thing", "包包", "baobao", "🎒", ["背包包", "拿包包", "小包"]],
  ["thing", "床", "chuang", "🛏️", ["小床", "睡觉", "上床"]],
  ["thing", "椅子", "yizi", "🪑", ["坐椅子", "小椅子", "椅子上"]],
  ["thing", "积木", "jimu", "🧱", ["搭积木", "小积木", "放积木"]],
  ["thing", "牙刷", "yashua", "🪥", ["刷牙", "小牙刷", "牙刷刷"]],
  ["thing", "纸巾", "zhijin", "🧻", ["擦擦", "抽纸巾", "小纸巾"]],
  ["thing", "玩具", "wanju", "🧸", ["玩玩具", "小玩具", "收玩具"]],

  ["animal", "猫", "mao", "🐱", ["猫猫", "喵喵", "小猫"]],
  ["animal", "狗", "gou", "🐶", ["狗狗", "汪汪", "小狗"]],
  ["animal", "鸭", "ya", "🦆", ["鸭鸭", "嘎嘎", "小鸭"]],
  ["animal", "鱼", "yu", "🐟", ["鱼鱼", "游泳", "小鱼"]],
  ["animal", "鸟", "niao", "🐦", ["鸟鸟", "飞飞", "小鸟"]],
  ["animal", "牛", "niu", "🐮", ["牛牛", "哞哞", "小牛"]],
  ["animal", "羊", "yang", "🐑", ["羊羊", "咩咩", "小羊"]],
  ["animal", "马", "ma", "🐴", ["马马", "跑跑", "小马"]],
  ["animal", "猪", "zhu", "🐷", ["猪猪", "哼哼", "小猪"]],
  ["animal", "兔子", "tuzi", "🐰", ["兔兔", "跳跳", "小兔子"]],
  ["animal", "鸡", "ji", "🐔", ["鸡鸡", "咯咯", "小鸡"]],
  ["animal", "青蛙", "qingwa", "🐸", ["蛙蛙", "呱呱", "小青蛙"]],
  ["animal", "老虎", "laohu", "🐯", ["虎虎", "嗷嗷", "大老虎"]],
  ["animal", "大象", "daxiang", "🐘", ["象象", "长鼻子", "大象走"]],
  ["animal", "熊猫", "xiongmao", "🐼", ["熊猫猫", "黑白", "熊猫吃"]],
  ["animal", "猴子", "houzi", "🐵", ["猴猴", "爬爬", "小猴子"]],
  ["animal", "乌龟", "wugui", "🐢", ["龟龟", "慢慢走", "小乌龟"]],

  ["action", "跑", "pao", "🏃", ["跑跑", "快跑", "小脚跑"]],
  ["action", "跳", "tiao", "🤸", ["跳跳", "小跳", "跳起来"]],
  ["action", "拍手", "paishou", "👏", ["拍拍", "拍拍手", "拍一拍"]],
  ["action", "吹", "chui", "🫧", ["吹吹", "吹泡泡", "轻轻吹"]],
  ["action", "洗手", "xishou", "🧼", ["洗洗", "搓搓手", "洗干净"]],
  ["action", "睡觉", "shuijiao", "😴", ["睡睡", "晚安", "闭眼睛"]],
  ["action", "坐", "zuo", "🪑", ["坐坐", "坐下来", "坐椅子"]],
  ["action", "站", "zhan", "🧍", ["站站", "站起来", "站好"]],
  ["action", "走", "zou", "🚶", ["走走", "慢慢走", "一起走"]],
  ["action", "推", "tui", "🫸", ["推推", "推车车", "轻轻推"]],
  ["action", "拉", "la", "🫷", ["拉拉", "拉手手", "拉一下"]],
  ["action", "拿", "na", "🤲", ["拿拿", "拿这个", "拿给我"]],
  ["action", "放", "fang", "📥", ["放放", "放这里", "放进去"]],
  ["action", "踢", "ti", "🦶", ["踢踢", "踢球", "小脚踢"]],
  ["action", "摸", "mo", "✋", ["摸摸", "轻轻摸", "摸一摸"]],
  ["action", "亲亲", "qinqin", "😘", ["亲一下", "亲妈妈", "亲爸爸"]],

  ["social", "笑", "xiao", "😄", ["笑笑", "开心", "哈哈"]],
  ["social", "哭", "ku", "😢", ["哭哭", "难过", "要抱"]],
  ["social", "拜拜", "baibai", "👋", ["再见", "挥挥手", "拜拜啦"]],
  ["social", "你好", "nihao", "🙂", ["你好呀", "打招呼", "你好好"]],
  ["social", "谢谢", "xiexie", "🙏", ["谢谢你", "谢谢妈妈", "谢谢爸爸"]],
  ["social", "对不起", "duibuqi", "🙇", ["说抱歉", "没关系", "轻轻说"]],
  ["social", "没关系", "meiguanxi", "🙂", ["没事", "没关系呀", "抱抱"]],
  ["social", "喜欢", "xihuan", "🥰", ["我喜欢", "喜欢你", "喜欢玩"]],
  ["social", "不喜欢", "buxihuan", "🙅", ["不想要", "不喜欢", "换一个"]],
  ["social", "开心", "kaixin", "😃", ["开心呀", "好开心", "笑一笑"]],
  ["social", "生气", "shengqi", "😠", ["生气了", "不开心", "抱一抱"]],
  ["social", "害怕", "haipa", "😟", ["怕怕", "别怕", "抱抱"]],
  ["social", "疼", "teng", "🤕", ["疼疼", "这里疼", "吹一吹"]],
  ["social", "好", "hao", "👍", ["好呀", "好的", "真好"]],
  ["social", "不好", "buhao", "👎", ["不好呀", "不要", "换一个"]],
  ["social", "等一下", "dengyixia", "⏳", ["等等", "等一下", "慢慢来"]],
];

const promptTemplates = {
  people: (word) => `这是${word}。宝宝可以试着说${word}。`,
  need: (word) => `宝宝想表达需要时，可以说${word}。`,
  thing: (word) => `这是${word}。我们一起找一找${word}。`,
  animal: (word) => `这是${word}。一起学一学${word}的声音或动作。`,
  action: (word) => `这是${word}。我们一起做一做${word}。`,
  social: (word) => `这是${word}。宝宝可以用这个词表达感受或打招呼。`,
};

const activityTemplates = {
  people: "看照片或指向家人，等宝宝尝试叫一叫。",
  need: "用真实场景示范一次，再等宝宝用声音、手势或词语表达。",
  thing: "在房间里找同类物品，让宝宝指一指或摸一摸。",
  animal: "一起模仿动物声音或动作，保持轻松好玩。",
  action: "家长先慢慢做一遍动作，再邀请宝宝跟着做。",
  social: "用表情和语气示范，接住宝宝的回应。",
};

const defaultWords = defaultWordSeeds.map(([stage, word, pinyin, visual, chips]) => ({
  stage,
  word,
  pinyin,
  visual,
  imageLabel: word,
  chips,
  prompt: promptTemplates[stage](word),
  activity: activityTemplates[stage],
}));

const stageLabels = {
  all: "全部",
  people: "人物",
  need: "需求",
  thing: "物品",
  animal: "动物",
  action: "动作",
  social: "情绪",
};

const stageNames = {
  people: "人物称呼",
  need: "需求词",
  thing: "物品词",
  animal: "动物词",
  action: "动作词",
  social: "情绪词",
};

const stagePalettes = {
  people: ["#92c7ef", "#ffd36e", "#263238"],
  need: ["#ffb09f", "#ffd36e", "#263238"],
  thing: ["#92c7ef", "#ffd36e", "#263238"],
  animal: ["#ffd36e", "#ff9f8e", "#263238"],
  action: ["#6fbd8f", "#92c7ef", "#263238"],
  social: ["#9bd6c5", "#ff9f8e", "#263238"],
};

const storageKeys = {
  words: "babyWordsCardsV3",
  done: "babyWordsDoneV3",
};

let words = loadWords();
let selectedStage = "all";
let activeIndex = 0;
let soundEnabled = true;
let practiceOrderIds = [];
let activeView = "practice";
const doneWords = new Set(JSON.parse(localStorage.getItem(storageKeys.done) || "[]"));

const el = {
  workspaceTabs: document.querySelectorAll(".workspace-tab"),
  viewPanels: document.querySelectorAll(".view-panel"),
  stageLabel: document.querySelector("#stageLabel"),
  pageCounter: document.querySelector("#pageCounter"),
  pictureFrame: document.querySelector("#pictureFrame"),
  bigWord: document.querySelector("#bigWord"),
  pinyin: document.querySelector("#pinyin"),
  promptText: document.querySelector("#promptText"),
  activityText: document.querySelector("#activityText"),
  chips: document.querySelector("#chips"),
  progressBar: document.querySelector("#progressBar"),
  cardsGrid: document.querySelector("#cardsGrid"),
  doneCount: document.querySelector("#doneCount"),
  prevButton: document.querySelector("#prevButton"),
  nextButton: document.querySelector("#nextButton"),
  speakButton: document.querySelector("#speakButton"),
  doneButton: document.querySelector("#doneButton"),
  soundToggle: document.querySelector("#soundToggle"),
  shuffleButton: document.querySelector("#shuffleButton"),
  printButton: document.querySelector("#printButton"),
  addCardButton: document.querySelector("#addCardButton"),
  resetCardsButton: document.querySelector("#resetCardsButton"),
  cardEditor: document.querySelector("#cardEditor"),
  editorHint: document.querySelector("#editorHint"),
  editWord: document.querySelector("#editWord"),
  editPinyin: document.querySelector("#editPinyin"),
  editVisual: document.querySelector("#editVisual"),
  editImageLabel: document.querySelector("#editImageLabel"),
  editStage: document.querySelector("#editStage"),
  editPrompt: document.querySelector("#editPrompt"),
  editActivity: document.querySelector("#editActivity"),
  editChips: document.querySelector("#editChips"),
  deleteCardButton: document.querySelector("#deleteCardButton"),
};

function switchView(view) {
  activeView = view;
  el.workspaceTabs.forEach((tab) => {
    const isActive = tab.dataset.view === view;
    tab.classList.toggle("is-active", isActive);
    tab.setAttribute("aria-selected", String(isActive));
  });

  el.viewPanels.forEach((panel) => {
    const isActive = panel.dataset.viewPanel === view;
    panel.hidden = !isActive;
    panel.classList.toggle("is-active", isActive);
  });

  if (activeView === "admin") {
    renderCards();
  }
}

function loadWords() {
  try {
    const saved = JSON.parse(localStorage.getItem(storageKeys.words) || "null");
    if (Array.isArray(saved) && saved.length) {
      return saved.map(normalizeWord);
    }
  } catch {
    localStorage.removeItem(storageKeys.words);
  }
  return defaultWords.map(normalizeWord);
}

function normalizeWord(item, index = 0) {
  const migrated = migrateNaturalPhrase(item);
  const stage = migrated.stage !== "all" && stageLabels[migrated.stage] ? migrated.stage : "need";
  const word = String(migrated.word || "新").trim().slice(0, 4) || "新";
  const chips = Array.isArray(migrated.chips)
    ? migrated.chips.filter(Boolean).map(String)
    : String(migrated.chips || word)
        .split(/[，,]/)
        .map((chip) => chip.trim())
        .filter(Boolean);

  return {
    id: migrated.id || `card-${Date.now()}-${index}-${word}`,
    word,
    pinyin: String(migrated.pinyin || "").trim(),
    stage,
    stageName: stageNames[stage],
    prompt: String(migrated.prompt || `这是${word}。宝宝可以试着说${word}。`).trim(),
    activity: String(migrated.activity || "看一看，指一指，再等宝宝尝试发声。").trim(),
    chips: chips.length ? chips.slice(0, 4) : [word],
    visual: String(migrated.visual || "⭐").trim() || "⭐",
    imageLabel: String(migrated.imageLabel || word).trim() || word,
    palette: Array.isArray(migrated.palette) && migrated.palette.length >= 2 ? migrated.palette : stagePalettes[stage],
  };
}

function saveWords() {
  localStorage.setItem(storageKeys.words, JSON.stringify(words));
}

function migrateNaturalPhrase(item) {
  const migrations = {
    爸: {
      word: "爸爸",
      pinyin: "baba",
      stage: "people",
      prompt: "这是爸爸。爸爸来了，宝宝可以说爸爸。",
      chips: ["爸爸抱", "爸爸来", "爸爸好"],
    },
    妈: {
      word: "妈妈",
      pinyin: "mama",
      stage: "people",
      prompt: "这是妈妈。宝宝看到妈妈，可以说妈妈。",
      chips: ["妈妈抱", "妈妈来", "妈妈亲"],
    },
    抱: {
      word: "抱抱",
      pinyin: "baobao",
      prompt: "宝宝想抱抱时，可以说抱抱。",
      chips: ["要抱抱", "妈妈抱", "爸爸抱"],
    },
    吃: {
      word: "吃饭",
      pinyin: "chifan",
      prompt: "这是吃饭。宝宝饿了，可以说吃饭。",
      chips: ["饭饭", "吃一口", "我要吃"],
    },
    喝: {
      word: "喝水",
      pinyin: "heshui",
      prompt: "这是喝水。宝宝想喝，可以说喝水。",
      chips: ["杯杯", "喝一口", "我要喝"],
    },
    拜: {
      word: "拜拜",
      pinyin: "baibai",
      prompt: "这是拜拜。我们挥挥手说拜拜。",
      chips: ["再见", "挥挥手", "拜拜啦"],
    },
  };

  const migrated = migrations[item.word] ? { ...item, ...migrations[item.word] } : item;
  if (["爸爸", "妈妈"].includes(migrated.word) && migrated.stage === "need") {
    return { ...migrated, stage: "people" };
  }
  return migrated;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function baseFilteredWords() {
  return selectedStage === "all" ? words : words.filter((item) => item.stage === selectedStage);
}

function filteredWords() {
  const list = baseFilteredWords();
  if (!practiceOrderIds.length) return list;

  const order = new Map(practiceOrderIds.map((id, index) => [id, index]));
  return [...list].sort((a, b) => {
    const aOrder = order.has(a.id) ? order.get(a.id) : Number.MAX_SAFE_INTEGER;
    const bOrder = order.has(b.id) ? order.get(b.id) : Number.MAX_SAFE_INTEGER;
    return aOrder - bOrder;
  });
}

function currentWord() {
  return filteredWords()[activeIndex] || words[0];
}

function currentWordGlobalIndex() {
  return words.findIndex((item) => item.id === currentWord().id);
}

function pictureMarkup(item, mini = false) {
  const [a, b] = item.palette;
  return `
    <span class="${mini ? "mini-emoji-picture" : "emoji-picture"}" style="--picture-bg:${a}; --picture-accent:${b};">
      <span class="emoji-symbol" aria-hidden="true">${escapeHtml(item.visual)}</span>
    </span>
  `;
}

function renderPage() {
  const list = filteredWords();
  if (!list.length) {
    selectedStage = "all";
    activeIndex = 0;
    renderStageTabs();
    renderCards();
    return;
  }
  if (activeIndex >= list.length) activeIndex = 0;
  const item = currentWord();
  const realIndex = currentWordGlobalIndex();

  el.stageLabel.textContent = item.stageName;
  el.pageCounter.textContent = `${activeIndex + 1} / ${list.length}`;
  el.pictureFrame.innerHTML = `<div class="picture-card">${pictureMarkup(item)}</div>`;
  el.bigWord.textContent = item.word;
  el.pinyin.textContent = item.pinyin;
  el.promptText.textContent = item.prompt;
  el.activityText.textContent = item.activity;
  el.chips.innerHTML = item.chips
    .map(
      (chip, index) =>
        `<button class="chip chip-button" type="button" data-chip-index="${index}" title="点击发音">${escapeHtml(chip)}</button>`,
    )
    .join("");
  el.chips.querySelectorAll(".chip-button").forEach((button) => {
    button.addEventListener("click", () => {
      speakText(item.chips[Number(button.dataset.chipIndex)]);
    });
  });
  el.progressBar.style.width = `${((activeIndex + 1) / list.length) * 100}%`;
  el.doneButton.classList.toggle("is-done", doneWords.has(item.word));
  el.doneButton.textContent = doneWords.has(item.word) ? "已练过" : "今天练过";
  updateEditor(item);

  document.querySelectorAll(".word-card").forEach((card) => {
    const index = Number(card.dataset.index);
    card.classList.toggle("is-active", index === realIndex);
    card.classList.toggle("is-done", doneWords.has(words[index].word));
  });

  el.prevButton.disabled = activeIndex === 0;
  el.nextButton.disabled = activeIndex === list.length - 1;
  updateDoneCount();
}

function renderCards() {
  const list = filteredWords();
  if (activeView !== "admin") {
    el.cardsGrid.innerHTML = "";
    renderPage();
    return;
  }

  el.cardsGrid.innerHTML = list
    .map((item) => {
      const index = words.indexOf(item);
      return `
        <button class="word-card" type="button" data-index="${index}">
          <span class="mini-picture" aria-hidden="true">${pictureMarkup(item, true)}</span>
          <span>
            <span class="card-word">${escapeHtml(item.word)}</span>
            <span class="card-label">${escapeHtml(item.chips.join(" · "))}</span>
            <span class="card-category">${escapeHtml(stageLabels[item.stage])}</span>
          </span>
        </button>
      `;
    })
    .join("");

  el.cardsGrid.querySelectorAll(".word-card").forEach((card) => {
    card.addEventListener("click", () => {
      const chosen = words[Number(card.dataset.index)];
      activeIndex = filteredWords().indexOf(chosen);
      renderPage();
      speakCurrentWord();
    });
  });

  renderPage();
}

function renderStageTabs() {
  document.querySelectorAll(".stage-tab").forEach((tab) => {
    const isActive = tab.dataset.stage === selectedStage;
    tab.classList.toggle("is-active", isActive);
    if (isActive) {
      tab.setAttribute("aria-label", `当前阶段：${stageLabels[selectedStage]}`);
    } else {
      tab.removeAttribute("aria-label");
    }
  });
}

function updateEditor(item = currentWord()) {
  if (!item) return;
  el.editorHint.textContent = `当前：${item.word} · ${stageLabels[item.stage]}`;
  el.editWord.value = item.word;
  el.editPinyin.value = item.pinyin;
  el.editVisual.value = item.visual;
  el.editImageLabel.value = item.imageLabel;
  el.editStage.value = item.stage;
  el.editPrompt.value = item.prompt;
  el.editActivity.value = item.activity;
  el.editChips.value = item.chips.join("，");
  el.deleteCardButton.disabled = words.length <= 1;
}

function selectCardById(id, preferredStage = selectedStage) {
  const item = words.find((word) => word.id === id) || words[0];
  selectedStage = preferredStage;
  let list = filteredWords();

  if (!list.includes(item)) {
    selectedStage = item.stage;
    list = filteredWords();
  }

  activeIndex = Math.max(0, list.findIndex((word) => word.id === item.id));
  renderStageTabs();
  renderCards();
}

function shuffleCurrentPracticeList() {
  const shuffled = [...baseFilteredWords()];
  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[index]];
  }

  practiceOrderIds = shuffled.map((item) => item.id);
  activeIndex = 0;
  renderCards();
}

function updateDoneCount() {
  el.doneCount.textContent = `${doneWords.size}个已练`;
}

function speakText(text) {
  if (!soundEnabled || !("speechSynthesis" in window)) return;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "zh-CN";
  utterance.rate = 0.76;
  utterance.pitch = 1.12;
  window.speechSynthesis.speak(utterance);
}

function speakCurrentWord() {
  const item = currentWord();
  speakText(item.word);
}

document.querySelectorAll(".stage-tab").forEach((button) => {
  button.addEventListener("click", () => {
    selectedStage = button.dataset.stage;
    activeIndex = 0;
    practiceOrderIds = [];
    renderStageTabs();
    renderCards();
  });
});

el.workspaceTabs.forEach((button) => {
  button.addEventListener("click", () => {
    switchView(button.dataset.view);
  });
});

el.prevButton.addEventListener("click", () => {
  activeIndex = Math.max(0, activeIndex - 1);
  renderPage();
});

el.nextButton.addEventListener("click", () => {
  activeIndex = Math.min(filteredWords().length - 1, activeIndex + 1);
  renderPage();
  speakCurrentWord();
});

el.speakButton.addEventListener("click", speakCurrentWord);

el.shuffleButton.addEventListener("click", shuffleCurrentPracticeList);

el.doneButton.addEventListener("click", () => {
  const item = currentWord();
  if (doneWords.has(item.word)) {
    doneWords.delete(item.word);
  } else {
    doneWords.add(item.word);
  }
  localStorage.setItem(storageKeys.done, JSON.stringify([...doneWords]));
  renderPage();
});

el.cardEditor.addEventListener("submit", (event) => {
  event.preventDefault();
  const index = currentWordGlobalIndex();
  if (index < 0) return;

  const original = words[index];
  const stage = el.editStage.value;
  const chips = el.editChips.value
    .split(/[，,]/)
    .map((chip) => chip.trim())
    .filter(Boolean);
  const word = el.editWord.value.trim().slice(0, 4) || original.word;

  words[index] = normalizeWord({
    ...original,
    word,
    pinyin: el.editPinyin.value,
    visual: el.editVisual.value,
    imageLabel: el.editImageLabel.value || word,
    stage,
    prompt: el.editPrompt.value,
    activity: el.editActivity.value,
    chips: chips.length ? chips : [word],
    palette: stagePalettes[stage],
  });

  practiceOrderIds = [];
  saveWords();
  selectCardById(words[index].id, stage);
});

el.addCardButton.addEventListener("click", () => {
  const stage = selectedStage === "all" ? "need" : selectedStage;
  const newCard = normalizeWord({
    id: `custom-${Date.now()}`,
    word: "新",
    pinyin: "xin",
    stage,
    visual: "⭐",
    imageLabel: "新词卡",
    prompt: "这是新词卡。可以改成宝宝最近想说的字。",
    activity: "看一看，指一指，再等宝宝尝试发声。",
    chips: ["新词", "看看", "说说"],
    palette: stagePalettes[stage],
  });

  words.push(newCard);
  practiceOrderIds = [];
  saveWords();
  selectCardById(newCard.id, stage);
  el.editWord.focus();
});

el.deleteCardButton.addEventListener("click", () => {
  if (words.length <= 1) return;
  const item = currentWord();
  const index = currentWordGlobalIndex();
  if (index < 0) return;

  words.splice(index, 1);
  practiceOrderIds = [];
  doneWords.delete(item.word);
  localStorage.setItem(storageKeys.done, JSON.stringify([...doneWords]));
  saveWords();
  activeIndex = Math.min(activeIndex, filteredWords().length - 1);
  renderCards();
});

el.resetCardsButton.addEventListener("click", () => {
  const shouldReset = confirm("恢复默认词卡会清除你编辑和新增的词卡，确定恢复吗？");
  if (!shouldReset) return;

  words = defaultWords.map(normalizeWord);
  localStorage.removeItem(storageKeys.words);
  selectedStage = "all";
  activeIndex = 0;
  practiceOrderIds = [];
  renderStageTabs();
  renderCards();
});

el.soundToggle.addEventListener("click", () => {
  soundEnabled = !soundEnabled;
  el.soundToggle.textContent = soundEnabled ? "🔊" : "🔇";
  el.soundToggle.setAttribute("aria-label", soundEnabled ? "声音已开启" : "声音已关闭");
  if (!soundEnabled && "speechSynthesis" in window) window.speechSynthesis.cancel();
});

el.printButton.addEventListener("click", () => window.print());

document.addEventListener("keydown", (event) => {
  const tagName = event.target.tagName;
  if (["INPUT", "TEXTAREA", "SELECT"].includes(tagName)) return;
  if (document.querySelector('[data-view-panel="practice"]').hidden) return;

  if (event.key === "ArrowLeft") el.prevButton.click();
  if (event.key === "ArrowRight") el.nextButton.click();
  if (event.key === " ") {
    event.preventDefault();
    speakCurrentWord();
  }
});

switchView("practice");
renderCards();
