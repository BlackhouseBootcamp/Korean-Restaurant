import { collection, doc, setDoc, addDoc } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-firestore.js";
import { db } from "./firebase.js";

let reserveBtn = document.querySelector("#btnReserve");

function insertData() {
	let fullName = document.getElementById("firstName").value + " " + document.getElementById("lastName").value;
	let emailAdd = document.getElementById("emailAddress").value;
	let branch = document.getElementById("branch").value;
	let phone = document.getElementById("phone").value;
	let mobile = document.getElementById("mobile").value;
	let date = document.getElementById("date").value;
	let pax = document.getElementById("pax").value;
	let time = document.getElementById("time").value;

	addDoc(collection(db, "reservations"), {
		fullname: fullName,
		email: emailAdd,
		branch: branch,
		phone: phone,
		mobile: mobile,
		date: date,
		pax: pax,
		time: time,
		status: false,
	})
		.then(() => {
			alert("Reserved! Please wait for our staff to contact you shortly.");
		})
		.catch(err => {
			alert("A problem occured when booking your reservation. Please try again later." + err);
		});
}

reserveBtn.addEventListener("click", insertData);
