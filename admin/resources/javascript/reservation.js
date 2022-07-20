import { collection, onSnapshot, query, where, getDocs } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-firestore.js";
import { db } from "./firebase.js";

const reservationsRef = collection(db, "reservations");
const q = query(reservationsRef, where("status", "==", false));
// const dataSnap = getDocs(q);

const sub = onSnapshot(q, queryData => {
	const reservations = [];
	queryData.forEach(res => {
		reservations.push(res.data());
	});

	displayData(reservations);
	console.log(reservations.length);
});

function displayData(arrData) {
	arrData.forEach(elem => {
		console.log(elem);
	});
}

window.onload = () => {
	sub;
};
