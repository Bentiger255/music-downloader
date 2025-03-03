function downloadMusic() {
    let url = document.getElementById("songURL").value;
    if (url) {
        window.location.href = url;
    } else {
        alert("Please enter a valid music URL!");
    }
}
