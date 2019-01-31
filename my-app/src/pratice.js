//duplicate arrry
		
		/*let k = [1,3,5,8,7,9,2,6,4,7,9];
		 let k1 =[];

		for(let i=0; i<k.length; i++){
			if(!(k[i] in k1)){
				k1.push(k[i]);
			}
		}

		console.log(k1);*/

		/*function removeDuplicate(arr){
		  var exists ={},
		      outArr = [], 
		      elm;

		  for(var i =0; i<arr.length; i++){
		    elm = arr[i];
		    if(!(arr[i]==)){		    	
		      outArr.push(elm);		      
		   }
		  }
		  return outArr;
		}

		console.log(removeDuplicate([1,3,3,3,1,5,6,5,7,8,1]));*/

		/*function eliminateDuplicates(arr) {
		  var i,
		      len = arr.length,
		      out = [],
		      obj = {};

		  for (i = 0; i < len; i++) {
		    obj[arr[i]] = 0;
		  }
		  for (i in obj) {
		  	console.log(obj);
		    out.push(i);
		  }
		  return obj;
		}

		console.log(eliminateDuplicates([1,4,2,3,1,5,3,7,9,5,6,8]));*/


		// [1,3,3,3,1,5,6,7,8,1].reduce((x, y) => x.includes(y) ? x : [...x, y], [])

		/*let k = [1,4,1,5,6,7,8,1,6,9,4];
		let k1=[]
		for(var i=0; i<k.length;i++){
			for(var j=i+1; j<k.length;j++){
				if(k[i]==k[j]){
					k1.push(k[i]);
					// console.log(k[i]);
					break;
				}
			}
		}

		console.log(k1);
*/
		/*function arr(a) {
			let k1 = [];
		    for(var i = 0; i <= a.length; i++) {
		        for(var j = i; j <= a.length; j++) {
		            if(a[i] == a[j]) {
		            	k1.push(a[i]);
		            	console.log(k1);
		                return true;
		            }
		        }
		    }
		    return false;

		}

		console.log(arr([1,4,1,5,6,7,8,1,6,9,4]));*/

	/*	var arr = [9, 9, 111, 2, 3, 4, 4, 5, 7];
		var sorted_arr = arr.sort(); // You can define the comparing function here. 
		                             // JS by default uses a crappy string compare.
		var results = [];
		for (var i = 0; i < arr.length - 1; i++) {
		    if (sorted_arr[i + 1] == sorted_arr[i]) {
		        results.push(sorted_arr[i]);
		    }
		}

		console.log(results);*/

		/*function findDuplicates(data) {

		  let result = [];

		  data.forEach(function(element, index) {
		    
		    // Find if there is a duplicate or not
		    if (data.indexOf(element, index + 1) > -1) {
		      
		      // Find if the element is already in the result array or not
		      if (result.indexOf(element) === -1) {
		        result.push(element);
		      }
		    }
		  });

		  return result;
		}

		console.log( findDuplicates([1, 2,9, 3, 1, 2, 1,3,9]));*/



		/*a = [0, 1, 2, 1, 1, 3, 4, 5,5]
		for i in range(len(a)):
			for j in range ((i + 1),len(a)):
				if (a[i] == a[j]):
					print a[i]
					break*/



		$(document).ready(function(){
		  $.get("https://api.themoviedb.org/3/movie/latest?api_key=2bcc8bc7932766f61ccf677eaa208209&language=en-US", function(data, status){
		  		console.log(data.results);
		    alert("Data: " + data.results[0].original_title + "\nStatus: " + status);
		  });

		  /*$.get("http://localhost:3000/posts", function(data, status){
		  		console.log(data "1302-1771-9996-9901-4232-8679");
		    // alert("Data: " + data.results[0].original_title + "\nStatus: " + status);
		  });
*/		   $.ajax({
			    url: 'http://localhost:3000/posts',
			    method: 'GET',
			    // data:DATA,
			    success: function(data,result) {
			        // Do something with the result
			        // console.log(result);
		  			console.log(data);
			    }
			});
		   /*$.ajax({
			    url: 'http://localhost:3000/posts/21',
			    method: 'PUT',
			    // data:DATA,
			    success: function(data,result) {
			        // Do something with the result
			        console.log(result);
			    }
			});*/

		  /*$.ajax({
			    url: 'http://localhost:3000/posts/2',
			    method: 'DELETE',
			    success: function(data,result) {
			        // Do something with the result
			    }
			});*/

		});

		/*$.get("https://api.themoviedb.org/3/search/movie?api_key=2bcc8bc7932766f61ccf677eaa208209&language=en-US&query=lover&page=1&include_adult=false")*/

		/*const names = [1,2,3,5,6,2,7,1,3];
		let unique = [...new Set(names)];
		console.log(unique);*/

		/*const names = ['John', 'Paul', 'George', 'Ringo', 'John'];
		let x = (names) => names.filter((v,i) => names.indexOf(v) === i)
		x(names);
		console.log(x(names));*/

		/*var n=100;

		for(i=1; i<=n; i++)
	    {

	        fact=0;
	        for(j=1; j<=n; j++)
	        {

	            if(i%j==0)
	                fact++;	
	        }
	        // debugger;
	        if(fact==2)
	        	console.log(i);
	    }
*/
	    /*var n=30;

		for(i=1; i<=n; i++)
	    {
            if(i%i==0 && i%1 == 0 && !(i%2 == 0))
                console.log(i);
	        
	    }*/

		// var 

		/*var k =[1,2,3,4,5];

		k='';

		console.log(k.length);
*/
		//calculator

		/*let to_time = new Date();
		console.log(to_time.getTime());*/

		/*let time = new Date();

		var hh = time.getHours();
		var mm = time.getMinutes();
		var ss = time.getSeconds() 

		document.getElementById("time").value = hh + ":" + mm + ":" + ss;*/

		



		/*function change(){
			let user_input=document.getElementById("amount").value;

			let interst_rate =document.getElementById("int_rate").value;
			let time =document.getElementById("year").value;

			let interest = user_input * (interst_rate/100) * time;


			let k = document.getElementById("myslect").value;
			if(k=="daily")
				
				console.log((user_input+interest/365).toFixed(2));
			else if(k=="week")
				console.log((user_input+interest/52).toFixed(2));
			else if(k=="month")
				console.log((user_input+interest/12).toFixed(2));
			else if(k=="year")
				console.log(user_input+interest/1);

		}*/

		/*function greeting(name = "Anonymous") {
		  return "Hello " + name;
		}
		console.log(greeting("John")); // Hello John
		console.log(greeting()); // Hello Anonymous*/


		/*const increment = (function() {
		  "use strict";
		  return function increment(number, value=1) {
		    return number + value;
		  };
		})();
		console.log(increment(5, 2)); // returns 7
		console.log(increment(5)); // returns NaN*/

		/*const numbers = [2, 4, 8, 10];
		const halves = numbers.map(x => Math.pow(x,2));

		console.log(halves);*/

		/*var add = (function () {
		    var counter = 0;
		    return function () {counter += 1; return counter}
		})();

		console.log(add());
		console.log(add());
		console.log(add());*/

		/*console.log("before " + myFunction(5));

		function myFunction(y) {
		    return y * y;
		}

		console.log("after " + myFunction(5));*/

		/*var add = (function () {

			return function(){
				console.log("done");
			}
			
		})();

		add();*/


		/*var add = (function () {
		    var counter = 0;
		    return function () {
		    	console.log("before " + counter);
		    	counter += 1; 
		    	console.log("after " + counter);
		    	// alert(counter);
		    	return counter
		    }
		})();

		add();
		add();
		add();*/

/*
		function showName (firstName, lastName) { 
		var nameIntro = "Your name is ";
		    // this inner function has access to the outer function's variables, including the parameter
		function makeFullName () {         
			return nameIntro + firstName + " " + lastName;     
		}

		return makeFullName (); 
		} 

		console.log(showName ("Michael", "Jackson")); // Your name is Michael Jackson */

/*
		var k ;

		(function(){
			console.log("before " +k);
			k= 5000;
			console.log("after " +k);
		})();
*/

	
	

	/*let k ={
		name:"prem",
		details:{
			village:"vavilla",
			pincode:524318
		}
	}

	console.log(Object.values(k.details));*/


	/*function abc(){
		alert("done");
	}

	// abc();

	let xyz = new abc();*/

	/*document.getElementById("out").onclick()=function(){
		alert("done");
	}*/

	/*document.getElementById("out").addEventListener("click", myFunction);

	function myFunction() {
	    // document.getElementById("demo").innerHTML = "YOU CLICKED ME!";
	    alert("done")
	}


	document.getElementById("in").addEventListener("click", myFunction1);

	function myFunction1(e) {
		e.stopPropagation()
	    // document.getElementById("demo").innerHTML = "YOU CLICKED ME!";
	    alert("done1")
	}*/


	/*let k = prompt("enter a number");

	let k1 = prompt("enter a number");
	if(k>k1)

		console.log(k-k1);
	else
		console.log("give crct values")
*/
	// time display on screen
	/*let k = ()=>{
		document.getElementById("demo").innerHTML = new Date().toLocaleTimeString();
	}
	setInterval(k,1000);*/

	/*let k = 10101010;
	const k2 = k.toString();
	console.log(k2);
	let k1 = 0;
	for(let i=k2.length; i>0;i--)
		// console.log(k2);
		k1=k2[i]*Math.pow(2,i);
		console.log(k2[i]);*/

	


	/*var bin = 0B11010000000; // code for 104
	let k = bin;
	document.getElementById("demo").innerHTML = k;
	// alert(k);

	let j = 0b11010000000;
	let j2 = "30"
	// j = parseInt(j2, 10);
	let j1 = j.toString().split('')[3];

	console.log(j2*10,j1 * 10);*/