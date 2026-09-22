(()=>{"use strict";
  const levels=window.CONJUGATION_LEVELS||{};
  const $=id=>document.getElementById(id);
  const tenseNames=["Present","Imperfect","Future","Perfect","Pluperfect","Future perfect"];
  const cells=[...document.querySelectorAll("[data-form]")];
  let mode="practice";

  function normalize(value){
    return value.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().replace(/[.,;:!?]/g,"").replace(/\s+/g," ").trim()
  }
  function categoryOf(verb){
    if(verb.family==="deponent")return"deponent";
    if(/^Compounds of /.test(verb.group||""))return"compound";
    if(verb.family==="irregular")return"irregular";
    return"regular"
  }
  function levelData(){return levels[$("level").value]}
  function filteredVerbs(){
    const category=$("category").value;
    return levelData().verbs.filter(v=>category==="all"||categoryOf(v)===category)
  }
  function currentVerb(){return filteredVerbs().find(v=>v.label===$("verb").value)||filteredVerbs()[0]}
  function arraysFor(verb){
    const mood=$("mood").value,voice=$("voice").value;
    return mood==="indicative"?(voice==="active"?verb.indA:verb.indP):(voice==="active"?verb.subA:verb.subP)
  }
  function availableVoices(verb){
    const mood=$("mood").value;
    const active=mood==="indicative"?verb.indA:verb.subA;
    const passive=mood==="indicative"?verb.indP:verb.subP;
    const out=[];
    if(active?.some(Boolean))out.push(["active",verb.family==="deponent"?"Deponent (active meaning)":"Active"]);
    if(passive?.some(Boolean))out.push(["passive","Passive"]);
    return out
  }
  function populateLevels(){
    $("level").innerHTML=Object.entries(levels).map(([key,v])=>`<option value="${key}">${v.label}</option>`).join("")
  }
  function populateVerbs(preferred){
    const verbs=filteredVerbs();
    $("verb").innerHTML=verbs.map(v=>`<option value="${v.label}">${v.label} — ${v.english}</option>`).join("");
    if(preferred&&verbs.some(v=>v.label===preferred))$("verb").value=preferred;
    updateVerb()
  }
  function populateVoices(){
    const old=$("voice").value;
    const voices=availableVoices(currentVerb());
    $("voice").innerHTML=voices.map(([value,label])=>`<option value="${value}">${label}</option>`).join("");
    if(voices.some(([value])=>value===old))$("voice").value=old;
    populateTenses()
  }
  function populateTenses(){
    const old=Number($("tense").value);
    const arrays=arraysFor(currentVerb())||[];
    const options=arrays.map((forms,i)=>forms?.some(Boolean)?`<option value="${i}">${tenseNames[i]}</option>`:"").join("");
    $("tense").innerHTML=options;
    if([...$("tense").options].some(o=>Number(o.value)===old))$("tense").value=String(old);
    render()
  }
  function updateVerb(){
    const verb=currentVerb();
    if(!verb){$("principalParts").textContent="No verbs are available in this category.";$("meaning").textContent="Choose another category.";return}
    $("levelLabel").textContent=levelData().label+" · "+(verb.group||categoryOf(verb));
    $("principalParts").textContent=verb.principal;
    $("meaning").textContent="Meaning: "+verb.english;
    populateVoices()
  }
  function forms(){
    const arrays=arraysFor(currentVerb())||[];
    return arrays[Number($("tense").value)]||[]
  }
  function render(){
    const verb=currentVerb();if(!verb)return;
    const selectedForms=forms();
    const voiceLabel=$("voice").selectedOptions[0]?.textContent||"";
    $("paradigmName").textContent=`${tenseNames[Number($("tense").value)]} ${voiceLabel.toLowerCase()} ${$("mood").value} of ${verb.label}`;
    cells.forEach(cell=>{
      const i=Number(cell.dataset.form),answer=selectedForms[i]||"";
      cell.innerHTML="";
      if(!answer){cell.innerHTML='<span class="key-form unavailable">—</span>';return}
      if(mode==="key"){const span=document.createElement("span");span.className="key-form";span.textContent=answer;cell.appendChild(span)}
      else{const input=document.createElement("input");input.className="answer-input";input.autocomplete="off";input.spellcheck=false;input.dataset.answer=answer;input.setAttribute("aria-label",["First singular","Second singular","Third singular","First plural","Second plural","Third plural"][i]);input.addEventListener("input",()=>{input.classList.remove("correct","incorrect");cell.querySelector(".correction")?.remove();hideSummary()});cell.appendChild(input)}
    });
    const practice=mode==="practice";
    $("check").classList.toggle("hidden",!practice);$("clear").classList.toggle("hidden",!practice);$("reveal").classList.toggle("hidden",!practice);hideSummary()
  }
  function check(){
    const inputs=[...document.querySelectorAll(".answer-input")];let correct=0;
    inputs.forEach(input=>{
      input.parentElement.querySelector(".correction")?.remove();
      const good=normalize(input.value)===normalize(input.dataset.answer);
      input.classList.add(good?"correct":"incorrect");input.classList.remove(good?"incorrect":"correct");
      if(good)correct++;else{const note=document.createElement("span");note.className="correction";note.innerHTML="Correction: <strong></strong>";note.querySelector("strong").textContent=input.dataset.answer;input.parentElement.appendChild(note)}
    });
    const summary=$("summary");summary.className="summary"+(correct===inputs.length?" good":"");summary.textContent=correct===inputs.length?"Recte! All six forms are correct.":`${correct} of ${inputs.length} correct. Review the corrections and try again.`
  }
  function clear(){
    document.querySelectorAll(".answer-input").forEach(input=>{input.value="";input.classList.remove("correct","incorrect");input.parentElement.querySelector(".correction")?.remove()});hideSummary();document.querySelector(".answer-input")?.focus()
  }
  function reveal(){
    document.querySelectorAll(".answer-input").forEach(input=>{input.value=input.dataset.answer;input.classList.add("correct");input.classList.remove("incorrect");input.parentElement.querySelector(".correction")?.remove()});
    const summary=$("summary");summary.className="summary";summary.textContent="Answers revealed. Clear the table to practice this paradigm again."
  }
  function hideSummary(){$("summary").className="summary hidden";$("summary").textContent=""}
  function randomVerb(){
    const verbs=filteredVerbs();if(!verbs.length)return;
    let choice=verbs[Math.floor(Math.random()*verbs.length)];
    if(verbs.length>1&&choice.label===$("verb").value)choice=verbs[(verbs.indexOf(choice)+1)%verbs.length];
    $("verb").value=choice.label;updateVerb()
  }
  function setMode(next){
    mode=next;$("keyMode").classList.toggle("active",mode==="key");$("practiceMode").classList.toggle("active",mode==="practice");render()
  }

  $("level").addEventListener("change",()=>populateVerbs());
  $("category").addEventListener("change",()=>populateVerbs());
  $("verb").addEventListener("change",updateVerb);
  $("mood").addEventListener("change",populateVoices);
  $("voice").addEventListener("change",populateTenses);
  $("tense").addEventListener("change",render);
  $("randomVerb").addEventListener("click",randomVerb);
  $("newVerb").addEventListener("click",randomVerb);
  $("check").addEventListener("click",check);
  $("clear").addEventListener("click",clear);
  $("reveal").addEventListener("click",reveal);
  $("keyMode").addEventListener("click",()=>setMode("key"));
  $("practiceMode").addEventListener("click",()=>setMode("practice"));
  document.addEventListener("keydown",e=>{if(e.key==="Enter"&&mode==="practice")check()});

  populateLevels();populateVerbs("amō")
})();
