import { collection, doc, setDoc, addDoc } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-firestore.js";
import { db } from "./firebase.js";

// let btnReserve = document.querySelector("#btnReserve");

// function insertData() {
// 	let fullName = document.getElementById("firstName").value + " " + document.getElementById("lastName").value;
// 	let emailAdd = document.getElementById("emailAddress").value;
// 	let branch = document.getElementById("branch").value;
// 	let phone = document.getElementById("phone").value;
// 	let mobile = document.getElementById("mobile").value;
// 	let date = document.getElementById("date").value;
// 	let pax = document.getElementById("pax").value;
// 	let time = document.getElementById("time").value;

// 	addDoc(collection(db, "reservations"), {
// 		fullname: fullName,
// 		email: emailAdd,
// 		branch: branch,
// 		phone: phone,
// 		mobile: mobile,
// 		date: date,
// 		pax: pax,
// 		time: time,
// 		status: "pending",
// 	})
// 		.then(() => {
// 			$("#optionsModal").css({ display: "block" });
// 		})
// 		.catch(err => {
// 			$("#optionsModal").css({ display: "none" });
// 		});
// }

// btnReserve.addEventListener("click", insertData);

//======================================================
// Insert Data + Modal | JJ 07/21/2022
//======================================================
$("#btnReserve").on("click", () => {
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
		status: "pending",
	})
		.then(() => {
			$("#optionsModal").css({ display: "block" });
			$("#lblStatus").text("Booked Successfully!");
			$("#lblMessage").text("Thank you for booking a reservation with us. We hope to see you soon!");
		})
		.catch(err => {
			$("#optionsModal").css({ display: "block" });
			$("#lblStatus").text("Sorry, encoutered some error.");
			$("#lblMessage").text("There was an error while trying to book your reservation. Please try again later.");
		});
});

$(document).ready(function () {
	$("button").click("#btnModalOk", function () {
		$("#optionsModal").css({ display: "none" });
	});

	$("#optionsModal").on("click", "#btnModalOk", function () {
		$("input", $("#fieldReservation")).each(function () {
			this.value = "";
		});
		$("#optionsModal").css({ display: "none" });
	});
});

$(window).click(function (e) {
	if (e.target.id == "optionsModal") {
		$("#optionsModal").css({ display: "none" });
	}
});
