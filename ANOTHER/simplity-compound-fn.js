function simplify(integer, numerator, denominator) {
    if (denominator == 1) return [integer + numerator, 0, 0]
    if (denominator == 0) return [integer, 0, 0]

    const wholes = Math.floor(numerator/denominator)
    const maxInts = wholes + integer
    const remainder = numerator - (wholes * denominator)

    if (remainder == 1) return [maxInts, remainder, denominator]
    if (remainder == 0) return [maxInts, 0, 0]

    if (denominator % remainder == 0) {
        return [maxInts, remainder/remainder, denominator/remainder]
    }

    for (let i = remainder - 1; i > 0; i--) {
        if (remainder % i == 0 && denominator % i == 0) {
            return [maxInts, remainder / i, denominator / i]
        }
    }

    return [integer + wholes, remainder, denominator]
}
