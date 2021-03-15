module.exports = function toReadable(number) {
    const nums = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    const tenth = [
        "",
        "",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];

    const numToWords = (number) => {
        if (number < 20) return nums[number];
        let digit = number % 10;
        if (number < 100)
            return tenth[Math.floor(number / 10)] + (digit ? " " + nums[digit] : "");
        if (number < 1000)
            return (
                nums[Math.floor(number / 100)] +
                " hundred" +
                (number % 100 == 0 ? "" : " " + numToWords(number % 100))
            );
        return (
            numToWords(Math.floor(number / 1000)) +
            " thousand" +
            (number % 1000 != 0 ? "" + numToWords(number % 1000) : " ")
        );
    };

    return numToWords(number);
};