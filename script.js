$(window).on('load', function () {
        $('#myModal').modal('show');
});

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function () {
                this.classList.toggle("active");
                var panel = this.nextElementSibling;
                if (panel.style.display === "block") {
                        panel.style.display = "none";
                } else {
                        panel.style.display = "block";
                }
        });
}

function toggle(source) {
        var checkboxes = document.querySelectorAll('input[type="checkbox"]');
        for (var i = 0; i < checkboxes.length; i++) {
                if (checkboxes[i] != source)
                        checkboxes[i].checked = source.checked;
        }
}