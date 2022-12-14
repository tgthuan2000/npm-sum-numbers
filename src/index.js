const sumNumbers = (...numbers) => {
    return numbers.reduce((sum, number) => {
        return sum + number;
    }, 0);
};
export default sumNumbers;
