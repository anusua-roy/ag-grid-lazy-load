/* eslint-disable @typescript-eslint/no-explicit-any */
import { faker } from "@faker-js/faker";

export type RowData = {
  id: number;
  name: string;
  email: string;
  country: string;
  phone: string;
};

export function generateRow(id: number): RowData {
  return {
    id,
    name: faker.person.fullName(),
    email: faker.internet.email(),
    country: faker.location.country(),
    phone: faker.phone.number(),
  };
}

export function generateWideRow(
  id: number,
  totalColumns: number
): Record<string, any> {
  const row: Record<string, any> = { id };
  for (let i = 0; i < totalColumns; i++) {
    row[`col_${i}`] = faker.word.words({ count: 2 });
  }
  return row;
}
