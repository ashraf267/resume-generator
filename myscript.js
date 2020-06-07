/*
Built by Ashraf Otagun
github: www.github.com/ashraf267
twitter: www.twitter.com/ashraf_otagun
linkedin: www.linkedin.com/in/ashraf-otagun-244a571ab
*/

function myFunction(){
	userBasicInfo = ["firstname", "lastname", "othername", "address", "phone", "email", "github", "linkedin"];
	userBasicInfo[0] = document.forms["myform"]["firstname"].value;
	userBasicInfo[1] = document.forms["myform"]["lastname"].value;
	userBasicInfo[2] = document.forms["myform"]["othername"].value;
	userBasicInfo[3] = document.forms["myform"]["address"].value;
	userBasicInfo[4] = document.forms["myform"]["phone"].value;
	userBasicInfo[5] = document.forms["myform"]["email"].value;
	userBasicInfo[6] = document.forms["myform"]["github"].value;
	userBasicInfo[7] = document.forms["myform"]["linkedin"].value;

	document.getElementById("header").style.display = "block";
	document.getElementById("fullname").innerHTML = userBasicInfo[0]+" "+userBasicInfo[1]+" "+userBasicInfo[2];
	document.getElementById("address").innerHTML = userBasicInfo[3];
	document.getElementById("tel").innerHTML = userBasicInfo[4];
	document.getElementById("email").innerHTML = "Email: "+userBasicInfo[5];
	document.getElementById("github").innerHTML = "Github: "+userBasicInfo[6];
	document.getElementById("linkedin").innerHTML = "Linkedin: "+userBasicInfo[7];			
	var jobTitle = document.forms["myform"]["job-title"].value;
	document.getElementById("job-title").innerHTML = "JOB TITLE: "+jobTitle;
	document.getElementById("edu").innerHTML = "EDUCATION:";
	var degreeWithCourse = document.forms["myform"]["degree"].value;
	document.getElementById("deg").innerHTML = degreeWithCourse;
	var uniName = document.forms["myform"]["university"].value;
	document.getElementById("uni").innerHTML = uniName;
	var uniLevel = document.forms["myform"]["level"].value;
	document.getElementById("level").innerHTML = "Level: "+uniLevel;
	var exp = document.forms["myform"]["experience"].value;
	document.getElementById("experience").innerHTML ="EXPERIENCE: "+exp;
	document.getElementById("skill").innerHTML = "Skills: ";
	var skill1 = document.getElementById("sk1");
	var skill2 = document.getElementById("sk2");
	var skill3 = document.getElementById("sk3");
	var skill4 = document.getElementById("sk4");
	var skill5 = document.getElementById("sk5");
	var skill6 = document.getElementById("sk6");
	var skill7 = document.getElementById("sk7");
	var skill8 = document.getElementById("sk8");
	var skill9 = document.getElementById("sk9");
	var skill10 = document.getElementById("sk10");
	var skill11 = document.getElementById("sk11");
	var skill12 = document.getElementById("sk12");

	var p1 = document.getElementById("p1");
	var p2 = document.getElementById("p2");
	var p3 = document.getElementById("p3");
	var p4 = document.getElementById("p4");
	var p5 = document.getElementById("p5");
	var p6 = document.getElementById("p6");
	var p7 = document.getElementById("p7");
	var p8 = document.getElementById("p8");
	var p9 = document.getElementById("p9");
	var p10 = document.getElementById("p10");
	var p11= document.getElementById("p11");
	var p12 = document.getElementById("p12");
	if(skill1.checked == true){
		p1.style.display = "block";
		}else{
		p1.style.display = "none";
	}
	if(skill12.checked == true){
		p2.style.display = "block";
		}else{
		p2.style.display = "none";
	}
	if(skill3.checked == true){
		p3.style.display = "block";
		}else{
		p3.style.display = "none";
	}
	if(skill4.checked == true){
		p4.style.display = "block";
		}else{
		p4.style.display = "none";
	}
	if(skill5.checked == true){
		p5.style.display = "block";
		}else{
		p5.style.display = "none";
	}
	if(skill6.checked == true){
		p6.style.display = "block";
		}else{
		p6.style.display = "none";
	}
	if(skill7.checked == true){
		p7.style.display = "block";
		}else{
		p7.style.display = "none";
	}
	if(skill8.checked == true){
		p8.style.display = "block";
		}else{
		p8.style.display = "none";
	}
	if(skill9.checked == true){
		p9.style.display = "block";
		}else{
		p9.style.display = "none";
	}
	if(skill10.checked == true){
		p10.style.display = "block";
		}else{
		p10.style.display = "none";
	}
	if(skill11.checked == true){
		p11.style.display = "block";
		}else{
		p11.style.display = "none";
	}
	if(skill12.checked == true){
		p12.style.display = "block";
		}else{
		p12.style.display = "none";
	}	
	return false;
}
function printResume(){
	window.alert("Built by Ashraf Otagun");
	document.getElementById("form").style.display = "none";
	window.print();
}