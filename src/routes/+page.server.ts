import type { PageServerLoad } from './$types';
import { db } from '$lib/server/db';
import * as table from '$lib/server/db/schema';


export const load: PageServerLoad = async () => {
  try {
    const items = await db.select().from(table.item);
    return  { items }
  } catch (error) {
    console.error("error loading items:", error);
    return { items: [], errorMessage: 'Failed to load menu items'};
  }
};