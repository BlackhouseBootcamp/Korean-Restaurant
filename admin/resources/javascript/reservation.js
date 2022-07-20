import { collection, onSnapshot, query, where, getDocs } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-firestore.js";
import { db } from "./firebase.js";
import { Reservation } from "../class/reservationClass.js";

//===========================================================
// Reservation Table on Load  - JJ 07/21/22
//===========================================================
const reservationsRef = collection(db, "reservations");

function displayData(arrData) {
	let tblRef = document.getElementById("tblReservations").getElementsByTagName("tbody")[0];
	while (tblRef.hasChildNodes()) {
		tblRef.removeChild(tblRef.lastChild);
	}
	arrData.forEach(data => {
		let newRow = tblRef.insertRow();
		const dataRow = new Reservation(data.id, data.fullname, data.email, data.branch, data.phone, data.mobile, data.date, data.time, data.status);

		newRow.innerHTML = dataRow.createReservation();
	});
}

window.onload = () => {
	// allReservations;
};

//===========================================================
// Display All - JJ 07/21/22
//===========================================================
let btnDisplayAll = document.querySelector("#btnDisplayAll");

btnDisplayAll.addEventListener("click", () => {
	onSnapshot(reservationsRef, queryData => {
		const reservations = [];
		queryData.forEach(res => {
			reservations.push({ ...res.data(), id: res.id });
		});

		displayData(reservations);
	});
});

//===========================================================
// Display Dining - JJ 07/21/22
//===========================================================
let btnDisplayDining = document.querySelector("#btnDisplayDining");

btnDisplayDining.addEventListener("click", diningReservations => {
	const q = query(reservationsRef, where("status", "==", "dining"));

	onSnapshot(q, queryData => {
		const reservations = [];
		queryData.forEach(res => {
			reservations.push({ ...res.data(), id: res.id });
		});

		displayData(reservations);
	});
});

//===========================================================
// Display Dining - JJ 07/21/22
//===========================================================
let btnDisplayCompleted = document.querySelector("#btnDisplayCompleted");

btnDisplayCompleted.addEventListener("click", diningReservations => {
	const q = query(reservationsRef, where("status", "==", "completed"));

	onSnapshot(q, queryData => {
		const reservations = [];
		queryData.forEach(res => {
			reservations.push({ ...res.data(), id: res.id });
		});

		displayData(reservations);
	});
});

//===========================================================
// Display Pending - JJ 07/21/22
//===========================================================
let btnDisplayPending = document.querySelector("#btnDisplayPending");

btnDisplayPending.addEventListener("click", function () {
	const q = query(reservationsRef, where("status", "==", "pending"));

	onSnapshot(q, queryData => {
		const reservations = [];
		queryData.forEach(res => {
			reservations.push({ ...res.data(), id: res.id });
		});

		displayData(reservations);
	});
});

//===========================================================
// Display Cancelled - JJ 07/21/22
//===========================================================
let btnDisplayCancelled = document.querySelector("#btnDisplayCancelled");

btnDisplayCancelled.addEventListener("click", function () {
	const q = query(reservationsRef, where("status", "==", "cancelled"));

	onSnapshot(q, queryData => {
		const reservations = [];
		queryData.forEach(res => {
			reservations.push({ ...res.data(), id: res.id });
		});

		displayData(reservations);
	});
});

//
// Modal
//

$("#tblReservations").on("click", "#btnOpenModal", function () {
	$("#optionsModal").css({ display: "block" });
});

$(window).click(function (e) {
	if (e.target.id == "optionsModal") {
		$("#optionsModal").css({ display: "none" });
	}
});
