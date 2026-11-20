// Book I pilot: clear each local obstacle before reading the whole sense unit.
const U=(prompt,choices,hint,feedback)=>({stage:1,type:'Unmask the expression',prompt,choices,answer:0,hint,feedback});
const T=(kind,bridge)=>({stage:2,type:'Identify the transformation',prompt:'Which transformation best describes what Virgil has done here?',choices:[kind,...TRANSFORMATIONS.filter(x=>x!==kind).slice(0,2)],answer:0,hint:'Use the replacement you just made, then consult the reference table.',feedback:bridge});
const P=(prompt,choices,hint,feedback,kind,bridge)=>[U(prompt,choices,hint,feedback),T(kind,bridge)];
const W=(prompt,choices,hint,feedback)=>({stage:3,type:'Read the whole idea',prompt,choices,answer:0,hint,feedback});
const B=(cite,lines,parts,whole)=>({cite,lines,questions:[...parts.flat(),W(...whole)]});

const BOOK1_CHUNK_DATA={
'Aeneid 1.1–33':[
B('1.1–4',[0,1,2,3],[
P('Arma literally means “weapons.” What larger subject does it introduce?',['Warfare','Farming','A particular shield'],'Think of the activity performed with arma.','Arma introduces warfare.','Compression','Arma → bellum. The equipment of war represents warfare as a whole, so this is compression.'),
P('In et terrīs … et altō, which noun must be understood with altō?',['marī','caelō','ventō'],'The phrase contrasts land with another place of travel.','Altō means altō marī, “on the deep sea.”','Omission (ellipsis)','Altō → altō marī. The noun is understood but unstated, so this is omission or ellipsis.'),
P('Which familiar form is concealed by superum?',['superōrum','superīs','superōs'],'The phrase means “by the power of the gods.”','Superum is the shortened genitive plural superōrum.','Poetic or alternate forms','Superum → superōrum. Virgil has used a shortened poetic form.'),
P('Which words belong together in saevae memorem Iūnōnis ob īram?',['saevae … Iūnōnis and memorem … īram','saevae … īram only','memorem … Iūnōnis only'],'Match case, number, and gender.','Saevæ modifies Iūnōnis; memorem modifies īram.','Separated word groups','The ordinary order is ob memorem īram saevae Iūnōnis. Virgil has separated both word groups.')
],['After clearing those obstacles, what establishes Aeneas’ situation?',['He is driven from Troy toward Italy and suffers because of fate and Juno’s anger','He willingly leaves Italy for Troy under Juno’s protection','He sings only about weapons stored at Troy'],'Combine profugus, fātō, iactātus, and ob īram.','Aeneas is a fate-driven exile traveling from Troy to Italy and battered on land and sea, especially because of Juno’s enduring anger.']),

B('1.5–7',[4,5,6],[
P('In genus unde Latīnum, what idea must be supplied after unde?',['From which the Latin race would arise','From which the Latin race fled','Where the Latin race was destroyed'],'Unde introduces the origin of the future people.','The phrase means “from which the Latin race would arise.”','Omission (ellipsis)','Genus unde Latīnum expands to genus unde Latīnum orerētur. The action is omitted.'),
P('What future developments are packed into Albānīque patrēs atque altae moenia Rōmae?',['The Alban ancestors and the walls of Rome','A war between Alba and Rome','The destruction of the Alban fathers'],'These nouns continue the sequence begun by genus Latīnum.','Vergil moves rapidly from the Latin race to Alba and Rome.','Compression','Generations of future history are compressed into a short sequence of names.')
],['What complete mission do these lines assign to Aeneas?',['He must suffer, found a city, bring his gods to Latium, and begin the line leading to Rome','He must abandon his gods and return to Troy','He must conquer Rome after the Alban fathers build it'],'Follow dum conderet and inferretque.','Aeneas’ suffering serves a future mission: city, gods, Latin descendants, Alba, and Rome.']),

B('1.8–11',[7,8,9,10],[
P('In quō nūmine laesō, what fuller idea does laesō express?',['Because a divinity had been offended','After a mortal queen had been praised','Although the Muse was silent'],'Laesō is a perfect passive participle.','The phrase asks what divinity had been offended.','Participial phrasing','Quō nūmine laesō uses a participle to compress a causal clause.'),
P('Whom does rēgīna deum identify?',['Juno','Venus','Dido'],'The preceding lines name the angry goddess.','Rēgīna deum is Juno.','Poetic name or epithet','Rēgīna deum → Iūnō. Her divine role replaces her name.')
],['What does the poet ask the Muse?',['Why Juno drove a famously dutiful man through so many hardships','Why Aeneas refused to leave Carthage','Why the gods felt no anger toward Troy'],'Connect quō nūmine laesō, quidve dolēns, and impulerit.','The poet asks what offense or grief made Juno force dutiful Aeneas through so many disasters.']),

B('1.12–16',[11,12,13,14,15],[
P('What is the urbs antīqua finally named at the beginning of the next line?',['Carthage','Troy','Rome'],'Karthāgō renames urbs antīqua.','The ancient city is Carthage.','Separated word groups','Urbs antīqua … Karthāgō separates a noun from its delayed apposition.'),
P('Which words mean that Juno valued Carthage even above Samos?',['posthabitā … Samō','dīves … bellī','Tiberīna … ōstia'],'Posthabēre means to place second.','Posthabitā Samō means “with Samos placed second.”','Separated word groups','Posthabitā … Samō is a natural ablative group interrupted by coluisse.')
],['What picture of Carthage emerges?',['A wealthy, warlike city loved by Juno above every other land','A weak Trojan settlement near Rome','A peaceful city Juno intends to abandon'],'Combine its location, wealth, military character, and Juno’s preference.','Carthage is distant from Italy, powerful in war, and uniquely favored by Juno.']),

B('1.16–18',[15,16,17],[
P('What does hōc rēgnum … gentibus esse express?',['Juno wanted Carthage to rule the nations','Juno wanted the nations to destroy Carthage','Carthage had already conquered every nation'],'Hōc refers to Carthage; rēgnum is its hoped-for role.','Juno hopes Carthage will become a ruling power.','Compression','The fuller ambition “that Carthage should rule the nations” is compressed into hōc rēgnum gentibus esse.')
],['What does Juno already hope for Carthage?',['That it will rule the nations if fate permits','That it will surrender its arms to Rome','That it will move to Samos'],'Connect tendit, fovet, rēgnum, and gentibus.','Juno cherishes the hope of Carthaginian empire, although fate may resist her.']),

B('1.19–22',[18,19,20,21],[
P('What familiar place is meant by Tyriās … arcēs?',['Carthage','Troy','Rome'],'Carthage was founded by colonists from Tyre.','The “Tyrian citadels” are Carthage.','Poetic name or epithet','Tyriās arcēs → Karthāgō. An ethnic description replaces the place-name.'),
P('What idea is expressed by populum lātē regem bellōque superbum?',['A people ruling widely and proud in war','A king ruling one small city','A peaceful people subject to Carthage'],'Populum is described as regem, “ruling.”','The coming Roman people will exercise broad military power.','Compression','The future power of Rome is concentrated into populum … regem.')
],['What report frightens Juno?',['Trojan descendants will someday overthrow Carthage','Carthage will destroy Troy before Rome is founded','The Fates have made Juno queen of Rome'],'Follow Trōiānō ā sanguine, Tyriās arcēs, and excidiō Libyae.','Juno has heard that Trojan descendants will become a ruling people and destroy Carthage.']),

B('1.23–28',[22,23,24,25,26,27],[
P('Whom does Sāturnia identify?',['Juno','Venus','Dido'],'The daughter of Saturn remembers the Trojan War.','Sāturnia is Juno.','Poetic name or epithet','Sāturnia → Iūnō. A divine family title replaces her name.'),
P('Which familiar form lies beneath repostum?',['repositum','reportātum','respōnsum'],'The memory remains stored in her mind.','Repostum is a contracted form of repositum.','Poetic or alternate forms','Repostum → repositum. Internal letters have been dropped in a poetic contraction.'),
P('What is packed into iūdicium Paridis, iniūria fōrmae, genus invīsum, and Ganymēdis honōrēs?',['Juno’s accumulated grievances against Troy','A list of Roman victories','Reasons Juno protects the Trojans'],'Each phrase evokes an entire mythic story.','The list recalls several old insults to Juno.','Compression','Complete mythological stories are compressed into a rapid catalogue of names and injuries.')
],['Why does Juno continue to oppose the Trojans?',['Old injuries remain fixed in her mind','She has forgotten Troy but fears Aeneas personally','The Trojans recently attacked Carthage'],'Combine veteris memor bellī with what remains repostum.','Juno’s ancient political and personal grievances against Troy remain stored deep in her mind.']),

B('1.29–33',[28,29,30,31,32],[
P('What fuller clause is compressed by Hīs accēnsa?',['Because Juno was inflamed by these grievances','Although Juno had forgotten them','After the Trojans burned the sea'],'Accēnsa is a perfect passive participle.','Hīs accēnsa means “inflamed by these things.”','Participial phrasing','The participle accēnsa compresses a causal clause explaining Juno’s action.'),
P('Whom does rēliquiās Danaum atque immītis Achillī describe?',['The surviving Trojans','The surviving Greeks','The Carthaginians'],'They are remnants left by the Greeks and Achilles.','The phrase describes the Trojans as survivors.','Elevated synonym','Rēliquiae replaces Trōiānī with the emotionally charged “remnants.”'),
P('What idea lies beneath Tantae mōlis erat Rōmānam condere gentem?',['Founding Rome required immense effort','Rome was built from one enormous stone','Rome was founded without difficulty'],'Mōlēs can suggest a massive weight or undertaking.','Founding the Roman people was enormously difficult.','Metaphor or image','Abstract difficulty is pictured as a vast physical mass or weight.')
],['What is the result of Juno’s anger?',['She drives the surviving Trojans from Latium for years, making Rome difficult to found','She guides them directly to Latium','She forces the Greeks to rebuild Troy'],'Follow iactātōs, arcēbat, errābant, and Tantae mōlis.','Juno prolongs Trojan wandering and makes the foundation of Rome an immense struggle.'])],

'Aeneid 1.88–107':[
B('1.88–91',[0,1,2,3],[
P('What event lies beneath nūbēs caelumque diemque eripiunt ex oculīs?',['Clouds block the sailors’ view of sky and daylight','The sailors seize the sky','Daylight removes the clouds'],'Eripiunt makes darkness sound like violent seizure.','The clouds suddenly take sky and daylight from sight.','Metaphor or image','The loss of light is made vivid as an act of snatching away.'),
P('What scene lies beneath pontō nox incubat atra?',['Black darkness settles over the sea','Night sails across the sea','The sea becomes calm'],'Incubāre literally means “lie upon.”','A black night lies heavily over the sea.','Metaphor or image','Darkness is made into a physical weight lying on the sea.'),
P('Which familiar form lies beneath intonuēre?',['intonuērunt','intonābunt','intonuerant'],'The subject is polī and the action is completed.','Intonuēre is intonuērunt.','Poetic or alternate forms','The poetic perfect ending -ēre appears in place of -ērunt.')
],['What happens to the Trojans?',['A storm removes light, fills the sky with thunder and lightning, and makes death seem immediate','A calm night lets them see the stars','They reach land before the clouds arrive'],'Combine eripiunt, incubat, intonuēre, micat, and mortem.','The storm abruptly overwhelms sight and sound until every sign threatens death.']),

B('1.92–96',[4,5,6,7,8],[
P('What does solvuntur frīgore membra express?',['Aeneas’ limbs go weak with fear','Aeneas calmly relaxes','Aeneas is warmed by courage'],'Frīgus can be the chill of terror.','Aeneas physically goes weak with fear.','Metaphor or image','Fear becomes a bodily chill that loosens Aeneas’ limbs.'),
P('Which familiar form lies beneath duplicīs palmās?',['duplicēs palmās','duplicia palmā','duplicium palmārum'],'The adjective agrees with accusative plural palmās.','Duplicīs is duplicēs.','Poetic or alternate forms','The poetic accusative plural -īs appears in place of -ēs.'),
P('What idea does terque quaterque beātī intensify?',['Those who died at Troy were extraordinarily fortunate','Exactly seven men survived','The Trojans were fortunate to escape battle'],'The numbers intensify rather than count precisely.','Aeneas calls the dead many times blessed.','Metaphor or image','The numerical repetition is a heightened, hyperbolic image.')
],['How does Aeneas react to the storm?',['He collapses in fear and envies those who died honorably at Troy','He confidently orders the fleet onward','He celebrates because the storm recalls Troy'],'Connect solvuntur membra with his exclamation about death at Troy.','Aeneas is terrified and wishes he had received an honorable death at Troy.']),

B('1.96–101',[8,9,10,11,12,13],[
P('Whom does Tȳdīde identify?',['Diomedes','Achilles','Hector'],'The ending means “son of Tydeus.”','Tȳdīde is Diomedes.','Poetic name or epithet','A patronymic—“son of Tydeus”—replaces Diomedes’ name.'),
P('What place is meant by Īliacīs campīs?',['The fields of Troy','The plains of Italy','The countryside near Carthage'],'Īlium is another name for Troy.','The “Ilian fields” are Troy’s battlefield.','Poetic name or epithet','Īliacīs campīs → Trōiae. A poetic geographic name replaces the familiar one.'),
P('What idea lies beneath animam hanc effundere dextrā?',['To kill me with your own hand','To pour a drink into my hand','To rescue my life'],'The object poured out is Aeneas’ life.','Aeneas wishes Diomedes had killed him.','Metaphor or image','Life is imagined as a liquid that can be poured out.')
],['What kind of death does Aeneas wish he had received?',['A heroic death at Troy among famous warriors','A peaceful death at Carthage','An anonymous death by drowning'],'Combine Tȳdīde, Īliacīs campīs, Hector, Sarpedon, and Simois.','Aeneas contrasts sea death with an honorable battlefield death at Troy.']),

B('1.102–107',[14,15,16,17,18,19],[
P('Who is understood with iactantī in Talia iactantī?',['Aeneas','The North Wind','Hector'],'The preceding speech belongs to Aeneas.','It means “while Aeneas was uttering such words.”','Omission (ellipsis)','Talia iactantī [Aeneae] omits a name recoverable from context.'),
P('What event does fluctūs ad sīdera tollit intensify?',['The waves rise terrifyingly high','The stars fall into the sea','The ship reaches the sky'],'Ad sīdera exaggerates their height.','The storm raises enormous waves.','Metaphor or image','Waves rising “to the stars” is a hyperbolic image.'),
P('What sight lies beneath praeruptus aquae mōns?',['A towering, steep wave','A mountain on shore','A pile of broken oars'],'The mountain is made of water.','A huge wall of water follows the ship.','Metaphor or image','Aquae mōns presents a wave as a steep mountain of water.')
],['How does the fleet lose control?',['Wind strikes the sail, oars break, the ship turns broadside, and waves control the sailors','The sailors steer safely through calm water','Every sailor experiences the same gentle wave'],'Follow ferit, franguntur, avertit, and dat latus.','The ship’s equipment and orientation fail, leaving the sailors at the mercy of enormous waves.'])],

'Aeneid 1.494–508':[
B('1.494–497',[0,1,2,3],[
P('Whom does Dardaniō Aenēae identify?',['The Trojan Aeneas','The Carthaginian Aeneas','The Greek Aeneas'],'Dardanian points to Trojan ancestry.','Dardaniō is an ethnic description of Aeneas.','Poetic name or epithet','An epic ethnic title identifies Aeneas through his Trojan ancestry.'),
P('Which words together identify the approaching queen?',['rēgīna … forma pulcherrima Dīdō','Dardaniō … Aenēae','magna … catervā'],'Look for nominatives that rename one another.','Rēgīna and Dīdō stand in apposition.','Separated word groups','Dīdō is separated from rēgīna by the inserted description forma pulcherrima.'),
P('What clause lies beneath magnā iuvenum stipante catervā?',['While a great crowd of young men surrounded her','Because Dido dismissed every young man','Although Aeneas led the crowd'],'Stipante is a present participle.','A great crowd accompanies Dido.','Participial phrasing','The participle stipante compresses a full accompanying clause.')
],['What does Aeneas see?',['Dido approaches in beauty and authority, surrounded by young men','Diana enters the temple alone','The Trojan army drives Dido away'],'Combine rēgīna, Dīdō, incessit, and stipante catervā.','Aeneas sees Dido make a striking public entrance with a large retinue.']),

B('1.498–502',[4,5,6,7,8],[
P('To whom is Dido compared?',['Diana among the mountain nymphs','Juno among the gods','Venus guiding Aeneas'],'The comparison begins Qualis.','Dido is compared to Diana among the Oreads.','Metaphor or image','The extended Diana simile illuminates Dido’s beauty and leadership.'),
P('Which familiar form lies beneath deās … omnīs?',['deās … omnēs','deae … omnēs','deārum … omnium'],'Both words are accusative plural.','Omnīs is omnēs.','Poetic or alternate forms','The poetic accusative plural -īs appears in place of -ēs.'),
P('Whose joy is Lātōnae gaudia?',['Diana’s mother’s joy','Dido’s sister’s joy','Aeneas’ mother’s joy'],'Latona is Diana’s mother.','The joy belongs to Diana’s mother.','Omission (ellipsis)','Virgil names Latona but leaves her relationship to Diana unstated.')
],['What qualities does the simile transfer to Dido?',['Beauty, commanding presence, and joyful leadership','Fear, isolation, and reluctance','Anger toward the nymphs'],'Notice supereminet, exercet choros, and Latona’s joy.','Like Diana among the Oreads, Dido stands above her companions as an admired leader.']),

B('1.503–504',[9,10],[
P('What does instāns operī rēgnīsque futūrīs show Dido doing?',['Devoting herself to the work and her future kingdom','Abandoning the city for a hunt','Waiting for Aeneas to rule'],'Instāre with the dative expresses energetic attention.','Dido presses forward with building her realm.','Participial phrasing','Instāns uses a participle to compress Dido’s continuing public effort.')
],['How does Dido carry the Diana comparison into public life?',['She moves among her people while concentrating on the work of her future kingdom','She leaves her people to hunt','She gives her kingdom to Aeneas'],'Combine laeta ferebat, per mediōs, and instāns.','Dido’s Diana-like leadership appears in her energetic attention to the city.']),

B('1.505–508',[11,12,13,14],[
P('Whose temple is indicated by foribus dīvae?',['The goddess Juno’s','A mortal queen’s','Aeneas’ mother’s'],'The episode takes place in Juno’s temple.','Dīvae means “of the goddess,” Juno.','Poetic name or epithet','Dīvae → Iūnōnis. A divine title replaces the name.'),
P('Where does mediā testūdine templī place Dido?',['Beneath the temple’s central vaulted roof','Outside the city walls','At the edge of Diana’s forest'],'Testūdō literally means a tortoise shell.','Dido sits beneath the central vault.','Metaphor or image','Testūdō uses the image of a shell for an architectural vault.'),
P('What arrangement lies beneath saepta armīs soliōque altē subnixa?',['Dido is protected by armed guards and supported on a high throne','Dido hides under a shield','Dido abandons the throne'],'Both participles describe Dido as she sits.','Dido sits securely amid armed protection.','Participial phrasing','Saepta and subnixa compress two surrounding circumstances into participles.')
],['What complete picture of Dido closes the selection?',['An authoritative ruler administering justice and organizing civic labor','A private mourner hiding from her subjects','A warrior abandoning law'],'Combine the temple, throne, laws, and allocation of work.','Dido appears securely enthroned, dispensing law and organizing her new kingdom.'])]
};

VERGIL_PASSAGES.filter(p=>p.cite.startsWith('Aeneid 1.')).forEach(p=>{p.chunks=BOOK1_CHUNK_DATA[p.cite]||[];});
