const leapYears = function(userYear) {
    if ((userYear % 4) == 0) {
        if ((userYear % 100) == 0) {
            if ((userYear % 400) == 0) {
                return true;
            }
            else {
                return false;
            }
        }
        else {
            return true;
        }
    }
    else {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
