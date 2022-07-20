export class Reservation {
	constructor(id, name, email, branch, phone, mobile, date, time, status) {
		this.id = id;
		this.name = name;
		this.email = email;
		this.branch = branch;
		this.phone = phone;
		this.mobile = mobile;
		this.date = date;
		this.time = time;
		this.status = status;
	}

	createReservation() {
		const dateOption = { weekday: "long", year: "numeric", month: "long", day: "numeric" };

		let newDate = new Date(this.date);
		let dateToday = new Date();
		let remainingDays = Math.round((newDate.getTime() - dateToday.getTime()) / (1000 * 3600 * 24));
		let newTime = () => {
			let tempTime = new Date("1970-01-01T" + this.time + "Z").toLocaleTimeString("en-US", {
				hour12: true,
				hour: "numeric",
				minute: "numeric",
			});
			return tempTime;
		};

		const template = `<tr>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <div class="flex">
                        <div class="ml-3">
                            <p class="text-gray-900 whitespace-no-wrap">${this.name}</p>
                        </div>
                    </div>
                </td>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p class="text-gray-900 whitespace-no-wrap">${this.email}</p>
                </td>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p class="text-gray-900 whitespace-no-wrap">${this.branch}</p>
                </td>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p class="text-gray-900 whitespace-no-wrap">${this.phone}</p>
                </td>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p class="text-gray-900 whitespace-no-wrap">${this.mobile}</p>
                </td>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p class="text-gray-900 whitespace-no-wrap">${newDate.toLocaleDateString("en-US", dateOption)}</p>
                    <p class="text-gray-600 whitespace-no-wrap">In ${remainingDays} ${remainingDays > 1 ? "days" : "day"}</p>
                </td>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p class="text-gray-900 whitespace-no-wrap">${newTime()}</p>
                </td>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <span class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                        <span aria-hidden class="absolute inset-0 bg-${this.status} opacity-50 rounded-full"></span>
                        <span class="relative">${this.status.charAt(0).toUpperCase() + this.status.slice(1)}</span>
                    </span>
                </td>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm text-right">
                    <button type="button" class="inline-block text-gray-500 hover:text-gray-700" id="btnOpenModal">
                        <svg class="inline-block h-6 w-6 fill-current" viewBox="0 0 24 24">
                            <path d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z" />
                        </svg>
                    </button>
                </td>
            </tr>`;
		return template;
	}
}
