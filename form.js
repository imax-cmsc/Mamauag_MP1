function submit_review() {
    alert("Response is saved!");
    $(".review_form")[0].reset();
}

$(".review_form").on("submit", function() {
    submit_review();
});