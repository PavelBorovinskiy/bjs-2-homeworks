const parseCount = (string) => {
    const parsed = Number.parseInt(string);
    if (isNaN(parsed)) {
        throw new Error('Невалидное значение');
    }
    return parsed;
}

const validateCount = (string) => {
    const parsedVal = parseCount(string);
    try {
        if (!isNaN(parsedVal)) {
            return parsedVal;
        }
    } catch (error) {
        error;
    }

}