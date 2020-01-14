// Write

// - no name, throws no name error

/**
 * Calls https://swapi.co/api/people/ and returns the
 * an object character with the passed in name
 */
export function getCharacterByName(name: string) {
  // TODO get character by name using fetch
  // TODO handle errors in a way you see fit
  // TODO ensure return type is specific enough to include character details
}

/**
 * Calls https://swapi.co/api/planets/:id
 */
export function fetchHomeWorld(id: number) {
  // TODO
  // TODO ensure the return type is specific enough to include planet details
}

/**
 * Prints characterName
 */
function printCharacterHomeworld(characterName: string) {
  // TODO prints out homeworld if character is found
  // TODO prints out 'No character found' if no character exists
}
