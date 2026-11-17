import fs from 'fs';
const d=process.argv[2]??'kb/support-kb/src/lib/data/';
const reports=JSON.parse(fs.readFileSync(d+'reports-4471.json'));
const notes=JSON.parse(fs.readFileSync(d+'desk-notes.json'));
const ten=Object.fromEntries(fs.readdirSync(d+'tenants').map(f=>{const t=JSON.parse(fs.readFileSync(d+'tenants/'+f));return [t.handle,t]}));
const dayFirst=l=>{const o=new Intl.DateTimeFormat(l,{year:'numeric',month:'2-digit',day:'2-digit'}).formatToParts(new Date(Date.UTC(2026,0,2,12))).map(p=>p.type);return o.indexOf('day')<o.indexOf('month')};
const H={'booking-v2':'DD/MM/YYYY','booking-v3':'MM/DD/YYYY'};
const cause=(r)=>{const t=ten[r.tenant];if(!t||!dayFirst(t.locale))return null;return r.channel==='form'&&H[t.form].startsWith('MM')?'hint':'parser'};
const u=[...new Map(reports.map(r=>[r.id,r])).values()].filter(r=>r.mergedInto===4471);
console.log(reports.length,u.length);
const g={};for(const r of u){(g[cause(r)??'unplaced']??=[]).push(r.id)}
for(const k in g)console.log(k,g[k].length,g[k].filter(i=>notes.oneDayMove.includes(i)).length);
console.log(Object.entries(ten).map(([h,t])=>h+' '+t.locale+' '+t.form).join('\n'));
for(const k of ['parser','hint']){const rs=u.filter(r=>cause(r)===k);const days=rs.map(r=>r.receivedAt.slice(0,10)).sort();
const tg={};rs.forEach(r=>tg[r.meta.intakeTag]=(tg[r.meta.intakeTag]??0)+1);
console.log(k,days[0],days.at(-1),[...new Set(rs.map(r=>r.tenant))].sort().join(','),JSON.stringify(tg),JSON.stringify(rs.reduce((a,r)=>(a[r.channel]=(a[r.channel]??0)+1,a),{})));}
