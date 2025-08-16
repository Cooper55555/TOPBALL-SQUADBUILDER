/* ----- Data ----- */
const PLAYERS = [
  {id:1,name:"A. Becker",pos:["GK"],club:"Liverpool",rating:90},
  {id:2,name:"Ederson",pos:["GK"],club:"Man City",rating:90},
  {id:3,name:"K. Trippier",pos:["RB"],club:"Newcastle",rating:86},
  {id:4,name:"J. Kimmich",pos:["RB","CDM","CM"],club:"Bayern",rating:88},
  {id:5,name:"V. van Dijk",pos:["CB"],club:"Liverpool",rating:90},
  {id:6,name:"R. Dias",pos:["CB"],club:"Man City",rating:88},
  {id:7,name:"A. Robertson",pos:["LB"],club:"Liverpool",rating:87},
  {id:8,name:"A. Davies",pos:["LB"],club:"Bayern",rating:86},
  {id:9,name:"Rodri",pos:["CDM","CM"],club:"Man City",rating:91},
  {id:10,name:"K. De Bruyne",pos:["CM","CAM"],club:"Man City",rating:91},
  {id:11,name:"B. Fernandes",pos:["CM","CAM"],club:"Man United",rating:88},
  {id:12,name:"J. Bellingham",pos:["CM","CAM"],club:"Real Madrid",rating:90},
  {id:13,name:"L. Modrić",pos:["CM"],club:"Real Madrid",rating:87},
  {id:14,name:"M. Ødegaard",pos:["CAM","CM"],club:"Arsenal",rating:87},
  {id:15,name:"M. Salah",pos:["RW"],club:"Liverpool",rating:90},
  {id:16,name:"E. Haaland",pos:["ST"],club:"Man City",rating:92},
  {id:17,name:"K. Mbappé",pos:["LW","ST"],club:"Real Madrid",rating:92},
  {id:18,name:"V. Jr",pos:["LW"],club:"Real Madrid",rating:90},
  {id:19,name:"H. Kane",pos:["ST"],club:"Bayern",rating:91},
  {id:20,name:"B. Saka",pos:["RW"],club:"Arsenal",rating:88},
];

// Just one formation shown here for brevity, add others if needed
const FORMATIONS = {
  "4-3-3": [
    {code:"GK", x:50, y:90, accept:["GK"]},
    {code:"RB", x:85, y:70, accept:["RB"]},
    {code:"RCB", x:65, y:72, accept:["CB"]},
    {code:"LCB", x:35, y:72, accept:["CB"]},
    {code:"LB", x:15, y:70, accept:["LB"]},
    {code:"RCM", x:70, y:50, accept:["CM","CDM"]},
    {code:"CM", x:50, y:38, accept:["CM"]},
    {code:"LCM", x:30, y:50, accept:["CM","CDM"]},
    {code:"RW", x:85, y:25, accept:["RW"]},
    {code:"ST", x:50, y:20, accept:["ST"]},
    {code:"LW", x:15, y:25, accept:["LW"]}
  ],

  "4-2-3-1": [
    {code:"GK", x:50, y:90, accept:["GK"]},
    {code:"RB", x:85, y:70, accept:["RB"]},
    {code:"RCB", x:65, y:72, accept:["CB"]},
    {code:"LCB", x:35, y:72, accept:["CB"]},
    {code:"LB", x:15, y:70, accept:["LB"]},
    {code:"RCDM", x:60, y:55, accept:["CDM","CM"]},
    {code:"LCDM", x:40, y:55, accept:["CDM","CM"]},
    {code:"CAM", x:50, y:38, accept:["CAM","CM"]},
    {code:"RW", x:80, y:30, accept:["RW"]},
    {code:"LW", x:20, y:30, accept:["LW"]},
    {code:"ST", x:50, y:20, accept:["ST"]}
  ],

  "4-4-2": [
    {code:"GK", x:50, y:90, accept:["GK"]},
    {code:"RB", x:85, y:70, accept:["RB"]},
    {code:"RCB", x:65, y:72, accept:["CB"]},
    {code:"LCB", x:35, y:72, accept:["CB"]},
    {code:"LB", x:15, y:70, accept:["LB"]},
    {code:"RM", x:85, y:50, accept:["RM","RW"]},
    {code:"RCM", x:60, y:55, accept:["CM"]},
    {code:"LCM", x:40, y:55, accept:["CM"]},
    {code:"LM", x:15, y:50, accept:["LM","LW"]},
    {code:"RST", x:60, y:25, accept:["ST"]},
    {code:"LST", x:40, y:25, accept:["ST"]}
  ],

  "3-5-2": [
    {code:"GK", x:50, y:90, accept:["GK"]},
    {code:"RCB", x:70, y:73, accept:["CB"]},
    {code:"CB", x:50, y:73, accept:["CB"]},
    {code:"LCB", x:30, y:73, accept:["CB"]},
    {code:"RWB", x:88, y:55, accept:["RM","RWB"]},
    {code:"LWB", x:12, y:55, accept:["LM","LWB"]},
    {code:"RCM", x:69, y:50, accept:["CM","CDM"]},
    {code:"CM", x:50, y:45, accept:["CM"]},
    {code:"LCM", x:31, y:50, accept:["CM","CDM"]},
    {code:"RST", x:60, y:25, accept:["ST"]},
    {code:"LST", x:40, y:25, accept:["ST"]}
  ],

  "3-4-3": [
    {code:"GK", x:50, y:90, accept:["GK"]},
    {code:"RCB", x:70, y:73, accept:["CB"]},
    {code:"CB", x:50, y:73, accept:["CB"]},
    {code:"LCB", x:30, y:73, accept:["CB"]},
    {code:"RM", x:80, y:48, accept:["RM","RW"]},
    {code:"RCM", x:60, y:50, accept:["CM"]},
    {code:"LCM", x:40, y:50, accept:["CM"]},
    {code:"LM", x:20, y:48, accept:["LM","LW"]},
    {code:"RW", x:80, y:25, accept:["RW"]},
    {code:"ST", x:50, y:20, accept:["ST"]},
    {code:"LW", x:20, y:25, accept:["LW"]}
  ],

  "5-3-2": [
    {code:"GK", x:50, y:90, accept:["GK"]},
    {code:"RWB", x:88, y:65, accept:["RWB","RB"]},
    {code:"RCB", x:70, y:72, accept:["CB"]},
    {code:"CB", x:50, y:72, accept:["CB"]},
    {code:"LCB", x:30, y:72, accept:["CB"]},
    {code:"LWB", x:12, y:65, accept:["LWB","LB"]},
    {code:"RCM", x:69, y:50, accept:["CM","CDM"]},
    {code:"CM", x:50, y:45, accept:["CM"]},
    {code:"LCM", x:31, y:50, accept:["CM","CDM"]},
    {code:"RST", x:60, y:25, accept:["ST"]},
    {code:"LST", x:40, y:25, accept:["ST"]}
  ]
};

let state={formation:"4-3-3",slots:{}};
const pitch=document.getElementById("pitch");
const playersEl=document.getElementById("players");
const formationSelect=document.getElementById("formation");
const formationName=document.getElementById("formationName");
const totalPlayers=document.getElementById("totalPlayers");

function init(){
  renderPlayers();
  setFormation(state.formation);
  bindUI();
}
function renderPlayers(filterText = "", club = "") {
  playersEl.innerHTML = "";
  const q = filterText.toLowerCase();

  PLAYERS.filter(p => {
    const matchesSearch =
      p.name.toLowerCase().includes(q) ||
      p.pos.some(pos => pos.toLowerCase().includes(q));

    const matchesClub = club ? p.club === club : true;
    return matchesSearch && matchesClub;
  }).forEach(p => {
    const el = document.createElement("div");
    el.className = "player";
    el.draggable = true;
    el.dataset.id = p.id;
    el.innerHTML = `
      <div class="badge">${p.rating}</div>
      <div class="grow">
        <div style="font-weight:800">${p.name}</div>
        <div class="muted small">${p.pos.join("/")}</div>
      </div>`;
    el.addEventListener("dragstart", e => {
      e.dataTransfer.setData("text/plain", p.id);
    });
    playersEl.appendChild(el);
  });
}
function setFormation(name){
  state.formation=name;formationSelect.value=name;formationName.textContent=name;
  document.querySelectorAll(".slot").forEach(s=>s.remove());
  FORMATIONS[name].forEach(def=>{
    const slot=document.createElement("div");
    slot.className="slot";slot.style.left=def.x+"%";slot.style.top=def.y+"%";slot.dataset.code=def.code;slot.dataset.accept=def.accept.join(",");
    slot.dataset.empty="true";slot.innerHTML=`<button class="remove">&times;</button><div class="content"><div class="pos">${def.code}</div></div>`;
    slot.addEventListener("drop",e=>{
      e.preventDefault();
      const id=parseInt(e.dataTransfer.getData("text/plain"));
      assign(id,def.code);
    });
    slot.addEventListener("dragover",e=>{e.preventDefault();});
    slot.querySelector(".remove").onclick=()=>clearSlot(def.code);
    pitch.appendChild(slot);
  });
}

function layoutSlotsForMobile() {
  if (window.innerWidth <= 600) {
    document.querySelectorAll('.slot').forEach(slot => {
      slot.style.position = "relative";
      slot.style.left = "auto";
      slot.style.top = "auto";
      slot.style.transform = "none";
      slot.style.margin = "0.5rem auto";
    });
  } else {
    // Restore absolute positions
    FORMATIONS[state.formation].forEach(def => {
      const slot = document.querySelector(`.slot[data-code="${def.code}"]`);
      if(slot){
        slot.style.position = "absolute";
        slot.style.left = def.x + "%";
        slot.style.top = def.y + "%";
        slot.style.transform = "translate(-50%, -50%)";
        slot.style.margin = "0";
      }
    });
  }
}

// Run on load and on resize
window.addEventListener('resize', layoutSlotsForMobile);
layoutSlotsForMobile();
function assign(pid,code){
  state.slots[code]=pid;
  const slot=document.querySelector(`.slot[data-code="${code}"]`);
  const p=PLAYERS.find(pp=>pp.id===pid);
  slot.dataset.empty="false";
  slot.querySelector(".content").innerHTML=`<div><strong>${p.name}</strong><div class="small muted">${p.pos.join("/")}</div></div><div class="badge">${p.rating}</div>`;
  updateCount();
}
function clearSlot(code){
  delete state.slots[code];
  const slot=document.querySelector(`.slot[data-code="${code}"]`);
  slot.dataset.empty="true";slot.querySelector(".content").innerHTML=`<div class="pos">${code}</div>`;
  updateCount();
}

// ----- Save Screenshot -----
document.getElementById('saveBtn').addEventListener('click', () => {
    const pitch = document.getElementById('pitch');
    html2canvas(pitch).then(canvas => {
        canvas.toBlob(blob => {
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = 'team.png';
            link.click();
            URL.revokeObjectURL(link.href);
        });
    });
});

function updateCount(){totalPlayers.textContent=Object.keys(state.slots).length;}
function bindUI() {
  formationSelect.onchange = e => setFormation(e.target.value);

  // Search filter
  const searchInput = document.getElementById("search");
  const clubFilter = document.getElementById("clubFilter");

  searchInput.addEventListener("input", () =>
    renderPlayers(searchInput.value, clubFilter.value)
  );
  clubFilter.addEventListener("change", () =>
    renderPlayers(searchInput.value, clubFilter.value)
  );

  document.getElementById("clearBtn").onclick = () => {
    state.slots = {};
    document.querySelectorAll(".slot").forEach(s => clearSlot(s.dataset.code));
  };

  document.getElementById("randomBtn").onclick = () => {
    state.slots = {};
    FORMATIONS[state.formation].forEach(def => {
      const pool = PLAYERS.filter(p =>
        p.pos.some(pos => def.accept.includes(pos))
      );
      if (pool.length) {
        const p = pool[Math.floor(Math.random() * pool.length)];
        assign(p.id, def.code);
      }
    });
  };
}
formationSelect.addEventListener('change', () => {
    document.getElementById('totalPlayers').textContent = 0;
    // Optional: clear pitch slots when changing formation
    const slots = document.querySelectorAll('.slot');
    slots.forEach(slot => slot.dataset.empty = "true");
});
init();