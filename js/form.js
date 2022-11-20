const $form = document.getElementById("contact");
    
async function handleSubmit(event) {
	event.preventDefault();
	const $status = document.getElementById("status");
	const data = new FormData(event.target);
	fetch(event.target.action, {
		method: $form.method,
		body: data,
		headers: {
				'Accept': 'application/json'
		}
	}).then(response => {
		if (response.ok) {
			$status.classList.toggle("alert alert-success");
			$status.innerHTML = "Gracias por contactar conmigo!";
			$form.reset()
		} else {
			response.json().then(data => {
				if (Object.hasOwn(data, 'errors')) {
					$status.classList.toggle("alert alert-warning");
					$status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
				} else {
					$status.classList.toggle("alert alert-warning");
					$status.innerHTML = "Oops! There was a problem submitting your form"
				}
			})
		}
	}).catch(error => {
		$status.innerHTML = "Oops! There was a problem submitting your form"
	});
}
$form.addEventListener("submit", handleSubmit)