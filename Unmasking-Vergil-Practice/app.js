let current=0,chunkIndex=0,q=0,tries=0;
const $=s=>document.querySelector(s);

function passageNav(){
  const box=$('#passageButtons');
  box.innerHTML=VERGIL_PASSAGES.map((p,i)=>`<button class="passage-link" data-i="${i}" aria-current="${i===current}">${p.cite}<small>${p.label}</small></button>`).join('');
  box.querySelectorAll('button').forEach(b=>b.onclick=()=>loadPassage(+b.dataset.i));
}

function chunkNav(){
  const p=VERGIL_PASSAGES[current],box=$('#chunkButtons');
  box.innerHTML=p.chunks.map((c,i)=>`<button class="chunk-link" data-i="${i}" aria-current="${i===chunkIndex}">${c.cite}</button>`).join('');
  box.querySelectorAll('button').forEach(b=>b.onclick=()=>loadChunk(+b.dataset.i));
}

function loadPassage(i){
  current=i;chunkIndex=0;
  passageNav();
  loadChunk(0);
}

function loadChunk(i){
  chunkIndex=i;q=0;tries=0;
  const p=VERGIL_PASSAGES[current],c=p.chunks[i];
  chunkNav();
  $('#citation').textContent=`${c.cite} · ${p.status}`;
  $('#title').textContent=p.title;
  $('#instruction').textContent='Use the transformation table as you work. Recover familiar Latin before polishing the translation.';
  $('#passage').innerHTML=c.lines.map(n=>`<span class="line">${p.lines[n]}</span>`).join('');
  render();
}

function render(){
  const p=VERGIL_PASSAGES[current],c=p.chunks[chunkIndex],questions=c.questions;
  $('#bar').style.width=(q/questions.length*100)+'%';
  if(q===questions.length){
    $('#bar').style.width='100%';
    $('#question').innerHTML=`<div class="summary"><h3>Section complete</h3><p>You completed ${questions.length} questions on ${c.cite}.</p><button class="action" id="again">Practice this section again</button></div>`;
    $('#again').onclick=()=>loadChunk(chunkIndex);
    return;
  }
  const x=questions[q];
  $('#question').innerHTML=`<div class="kind">${x.type} · Question ${q+1} of ${questions.length}</div><fieldset><legend>${x.prompt}</legend>${x.choices.map((v,i)=>`<label class="choice"><input type="radio" name="answer" value="${i}"> ${v}</label>`).join('')}</fieldset><button class="action" id="check">Check my thinking</button><button class="hint" id="hint">Show one clue</button><div id="feedback" aria-live="polite"></div>`;
  $('#hint').onclick=()=>show(x.hint,'try');
  $('#check').onclick=()=>{
    const a=$('input[name=answer]:checked');
    if(!a)return show('Choose an answer first.','try');
    if(+a.value===x.answer){
      show('<strong>Yes.</strong> '+x.feedback,'good');
      $('#check').textContent='Next question';
      $('#check').onclick=()=>{q++;tries=0;render();};
    }else{
      tries++;
      show(tries>1?x.hint:'Not yet. Use the table, identify the form, and recover the ordinary idea.','try');
    }
  };
}

function show(t,c){const f=$('#feedback');f.className='feedback '+c;f.innerHTML=t;}
loadPassage(0);
