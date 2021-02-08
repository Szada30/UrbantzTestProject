export function generateLongString(stringLenght: number, lastCharacters: string) {

    return '0'.repeat(stringLenght - lastCharacters.length) + lastCharacters;
}