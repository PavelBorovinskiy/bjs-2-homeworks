const parseCount = (string, base) => {
    const parsed = Number.parseInt(string, base);
    if (isNaN(parsed)) {
        const err = new Error('Невалидное значение');
        throw err;
    }
    return parsed;
}

const validateCount = (string, base) => {
    const parsedValid = parseCount(string, base);
    try {
        if(!isNaN(parsedValid)){
            return parsedValid;
        }
    } catch (error) {
         return error;
    }
}