var content = document.getElementById('content').onkeyup = function () {
    document.getElementById('content-live').textContent = this.value;
};

/*
document.getElementById('content').onkeyup = function () {
    document.getElementById('content-live').textContent = this.value;
};
*/