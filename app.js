document.querySelectorAll('#y').forEach(function(e){e.textContent=new Date().getFullYear()});
var f=document.getElementById('f');
if(f){f.addEventListener('submit',function(e){e.preventDefault();var n=document.getElementById('nm').value.trim(),s=document.getElementById('sv').value,m=document.getElementById('ms').value.trim();
window.open('https://wa.me/26879762612?text='+encodeURIComponent('Hello Gift, my name is '+n+'. I need help with: '+s+'.'+(m?'\n\nProblem: '+m:'')),'_blank','noopener')})}
var cal=document.getElementById('cal');
if(cal){var D=['Sun','Mon','Tue','Wed','Thu','Fri','Sat'],M=['January','February','March','April','May','June','July','August','September','October','November','December'],T=new Date(),go=document.getElementById('calgo');
document.getElementById('mo').textContent=M[T.getMonth()]+', '+T.getFullYear();
function pick(d,b){[].forEach.call(cal.children,function(x){x.classList.remove('on');x.setAttribute('aria-pressed','false')});b.classList.add('on');b.setAttribute('aria-pressed','true');
go.href='https://wa.me/26879762612?text='+encodeURIComponent('Hello Gift, I would like computer support on '+D[d.getDay()]+' '+d.getDate()+' '+M[d.getMonth()]+'. Is that day available?')}
for(var i=0;i<7;i++){var d=new Date(T.getFullYear(),T.getMonth(),T.getDate()+i),b=document.createElement('button');b.type='button';b.innerHTML='<small>'+D[d.getDay()]+'</small><b>'+d.getDate()+'</b>';(function(d,b){b.onclick=function(){pick(d,b)}})(d,b);cal.appendChild(b);if(i===0)pick(d,b)}}
