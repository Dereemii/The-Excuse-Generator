let who = ['My yorkshire','A t-rex',"My neighbor's bird",'A dwarf', 'A ghost'];
let what = ['runed away','stole my pencil','broke in', 'eated my homework'];
let when = ['before the class','right in time','when I finished','during my lunch','while I was praying'];

let excuse = who[Math.floor(Math.random()*who.length)] + " " + what[Math.floor(Math.random()*what.length)] + " " + when[Math.floor(Math.random()*when.length)] ;

document.write(excuse);


