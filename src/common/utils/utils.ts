export function getRandomInteger(min: number, max: number) {
  return Math.floor(Math.random() * (max - min) + min);
}

export function getRandomItem<T>(items: T[]): T {
  return items[getRandomInteger(0, items.length - 1)];
}

export function getRandomItems<T>(items: T[]): T[] {
  const startPosition = getRandomInteger(0, items.length - 1);
  const endPosition = startPosition + getRandomInteger(startPosition, items.length);

  return items.slice(startPosition, endPosition);
}

export function getErrorMassage(error: unknown): string {
  return error instanceof Error ? error.message : error as string;
}

export function getRandomPassword(): string {
  return new Array(getRandomInteger(2, 5)).fill(getRandomInteger(0, 100)).join('');
}
