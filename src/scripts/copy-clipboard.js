// JavaScript para copiar el email al portapapeles
document.addEventListener("DOMContentLoaded", () => {
    const email = "lucasomargallardo@gmail.com";
    const copyButton = document.getElementById("copy-email");
    const toast = document.getElementById("toast");

    copyButton.addEventListener("click", () => {
        navigator.clipboard.writeText(email).then(() => {
            toast.classList.remove("opacity-0");
            toast.classList.add("opacity-100");
            setTimeout(() => {
                toast.classList.remove("opacity-100");
                toast.classList.add("opacity-0");
            }, 2000);
        }).catch(err => {
            console.error("Error al copiar el email: ", err);
        });
    });
});