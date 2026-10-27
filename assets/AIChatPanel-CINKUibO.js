import{c as u,r as i,j as e,X as x,U as g,B as f}from"./index-23nww4JV.js";/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o=u("Bot",[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y=u("Send",[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]),b={role:"assistant",content:`👋 Hi! I'm your pronunciation coach. Ask me about any English sound, diphthong, or triphthong. I can explain theory, give you examples, or suggest exercises!

Try asking:
• What is a diphthong?
• How do I pronounce /aɪ/?
• What's the difference between /eɪ/ and /æ/?`};function v({onClose:r}){const[s,l]=i.useState([b]),[a,d]=i.useState(""),[c,h]=i.useState(!1),m=()=>{if(!a.trim())return;const n={role:"user",content:a.trim()};l(t=>[...t,n]),d(""),h(!0),setTimeout(()=>{const t=w(n.content);l(p=>[...p,{role:"assistant",content:t}]),h(!1)},1e3)};return e.jsx("div",{className:"fixed bottom-20 right-4 md:bottom-20 md:right-6 z-50 w-[calc(100vw-2rem)] max-w-md animate-slide-up",children:e.jsxs("div",{className:"flex flex-col h-[28rem] rounded-xl border border-border bg-card shadow-elevated overflow-hidden",children:[e.jsxs("div",{className:"flex items-center justify-between border-b border-border bg-primary/5 px-4 py-3",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"flex h-8 w-8 items-center justify-center rounded-full bg-primary",children:e.jsx(o,{className:"h-4 w-4 text-primary-foreground"})}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm font-semibold text-foreground",children:"Pronunciation Coach"}),e.jsx("p",{className:"text-xs text-muted-foreground",children:"AI Assistant"})]})]}),e.jsx("button",{onClick:r,className:"text-muted-foreground hover:text-foreground",children:e.jsx(x,{className:"h-5 w-5"})})]}),e.jsxs("div",{className:"flex-1 overflow-y-auto p-4 space-y-4",children:[s.map((n,t)=>e.jsxs("div",{className:`flex gap-2 ${n.role==="user"?"justify-end":""}`,children:[n.role==="assistant"&&e.jsx("div",{className:"flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10",children:e.jsx(o,{className:"h-3.5 w-3.5 text-primary"})}),e.jsx("div",{className:`max-w-[80%] rounded-xl px-4 py-2.5 text-sm leading-relaxed whitespace-pre-line ${n.role==="user"?"bg-primary text-primary-foreground":"bg-muted text-foreground"}`,children:n.content}),n.role==="user"&&e.jsx("div",{className:"flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent/20",children:e.jsx(g,{className:"h-3.5 w-3.5 text-accent-foreground"})})]},t)),c&&e.jsxs("div",{className:"flex gap-2",children:[e.jsx("div",{className:"flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10",children:e.jsx(o,{className:"h-3.5 w-3.5 text-primary"})}),e.jsx("div",{className:"rounded-xl bg-muted px-4 py-3",children:e.jsxs("div",{className:"flex gap-1",children:[e.jsx("span",{className:"h-2 w-2 rounded-full bg-muted-foreground/40 animate-bounce",style:{animationDelay:"0ms"}}),e.jsx("span",{className:"h-2 w-2 rounded-full bg-muted-foreground/40 animate-bounce",style:{animationDelay:"150ms"}}),e.jsx("span",{className:"h-2 w-2 rounded-full bg-muted-foreground/40 animate-bounce",style:{animationDelay:"300ms"}})]})})]})]}),e.jsx("div",{className:"border-t border-border p-3",children:e.jsxs("form",{onSubmit:n=>{n.preventDefault(),m()},className:"flex gap-2",children:[e.jsx("input",{value:a,onChange:n=>d(n.target.value),placeholder:"Ask about pronunciation...",className:"flex-1 rounded-lg border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"}),e.jsx(f,{type:"submit",size:"sm",disabled:!a.trim()||c,children:e.jsx(y,{className:"h-4 w-4"})})]})})]})})}function w(r){const s=r.toLowerCase();return s.includes("diphthong")?`A **diphthong** is a vowel sound that glides from one position to another within the same syllable. English has 8 diphthongs:

• /eɪ/ as in 'day'
• /aɪ/ as in 'time'
• /ɔɪ/ as in 'boy'
• /aʊ/ as in 'now'
• /əʊ/ as in 'go'
• /ɪə/ as in 'near'
• /eə/ as in 'air'
• /ʊə/ as in 'tour'

Would you like to practice any of these?`:s.includes("/aɪ/")||s.includes("ai")&&s.includes("pronounce")?`The **/aɪ/** sound (as in 'time', 'fly', 'night'):

1. Open your mouth wide (like saying 'ah')
2. Glide your jaw upward toward /ɪ/
3. Your tongue moves from low-back to high-front

🎯 Practice: "I like to fly my kite at night."

Try saying it slowly first, then speed up!`:s.includes("triphthong")?`A **triphthong** is a three-part vowel glide within one syllable. English has 5 triphthongs:

• /aɪə/ as in 'fire'
• /aʊə/ as in 'power'
• /eɪə/ as in 'player'
• /əʊə/ as in 'lower'
• /ɔɪə/ as in 'loyal'

They can be tricky! Want me to explain any specific one?`:s.includes("stress")||s.includes("rhythm")?`**Word stress** in English means making one syllable louder, longer, and higher in pitch.

Examples:
• **RE**cord (noun) vs. re**CORD** (verb)
• **PRE**sent (noun) vs. pre**SENT** (verb)

**Rhythm** in English follows a stress-timed pattern. Stressed syllables come at regular intervals.

Shall I give you some practice exercises?`:s.includes("shadow")?`**Shadowing** is a powerful technique:

1. 🎧 **Listen** to a native speaker
2. 👀 **Read** the text while listening
3. 🗣️ **Repeat** immediately after (like an echo)
4. 📊 **Compare** your recording with the model

Start slow and gradually increase speed. Go to the Practice page to try it!`:`Great question! I can help you with:

• **Diphthongs** (/aɪ/, /eɪ/, /ɔɪ/, etc.)
• **Triphthongs** (/aɪə/, /aʊə/, etc.)
• **Stress & rhythm** patterns
• **Shadowing** technique
• **Connected speech** rules

What would you like to learn about?`}export{v as A};
