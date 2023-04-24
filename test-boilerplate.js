function test(actual, expected) {
    if (_.isEqual(actual,expected)) {
        console.log("Yay! Test PASSED");
    } else {
        console.error("Test FALED Keep trying!");
        console.log("    actual:", actual);
        console.log("  expected:", expected);
        console.trace();
    }
}
