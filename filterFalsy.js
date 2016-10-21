function bouncer(arr) {
    var truths = arr.filter(function(filterTrue) {
        return filterTrue;
    });
    return truths;
}

bouncer([7, "ate", "", false, 9]);