function sequentialSizes(val) {
    let answer = "";
    // Only change code below this line
    switch (val) {
        case 1:
        case 2:
        case 3:
            answer = "Low";
            return answer;
        case 4:
        case 5:
        case 6:
            answer = "Mid";
            return answer;
        case 7:
        case 8:
        case 9:
            answer = "High";
            // Only change code above this line
            return answer;
    }
}