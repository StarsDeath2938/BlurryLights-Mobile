window.onload = getDate();

function getDate() {
    let getDate = []

    getDate[0] = new Date().getDate();
    getDate[1] = new Date().getHours();
    getDate[2] = new Date().getMinutes();
    getDate[3] = new Date().getSeconds();
    getDate[4] = new Date().getMonth() + 1;

    for (let i = 0; i < getDate.length; i++) {
        if (getDate[i] < 10) {
            getDate[i] = "0" + getDate[i];
        }
    }

    document.getElementById("day").innerHTML = getDate[0];
    document.getElementById("hour").innerHTML = getDate[1];
    document.getElementById("min").innerHTML = getDate[2];
    document.getElementById("sec").innerHTML = getDate[3];
    document.getElementById("month").innerHTML = getDate[4];
}