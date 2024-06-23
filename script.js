//your JS code here. If required.
let choosen=document.getElementById('btn').addEventListener('click', function(){
	 let a=document.getElementById('text').value;
	 let b=document.getElementById('delay').value;
	let c=document.getElementById('output');
	
	let Promisehai=new Promise((resolve,reject)=>{
		setTimeout(()=>resolve(a),b);
         
	});
	async function func(){
		let result= await Promisehai;
		
	    c.innerHTML+=`
		<p>${result}</p>
		
		
	`;
      document.getElementById('text').value = ''
	document.getElementById('delay').value = ''
	}
	func();
	
	
})
