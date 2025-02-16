import { fail, redirect} from '@sveltejs/kit'
import type { Actions, PageServerLoad } from './$types';
import { db } from '$lib/server/db';
import * as table from '$lib/server/db/schema';
import { encodeBase32LowerCase } from '@oslojs/encoding';

export const load: PageServerLoad = async () => {
  try {
    const items = await db.select().from(table.item);
    console.log('fetched items:', items);
    return  { items }
  } catch (error) {
    console.error("error loading items:", error);
    return { items: [], errorMessage: 'Failed to load menu items'};
  }
};

export const actions: Actions = {
  addItem: async (event) => {
    const formData = await event.request.formData();
    const name = String(formData.get('itemName'));
    const size = String(formData.get('size'));
    const price = String(formData.get('price'));
    const itemId = generateId();

    const parsedPrice = parseFloat(price as string);

    if (!name || !size || !price) {
      return fail(400, {message: 'All fields are required'});
    }

    if (isNaN(parsedPrice)) {
      return fail(400, {message: 'Invalid price'});
    }

  try {
    await db.insert(table.item).values({id: itemId, name, size, price});
    } catch (e) {
      return fail(500, { message: 'An error has occurred' });
    }
    return (
      redirect(302, '/menuedit',)
      
    )
  }
};

function generateId() {
	// ID with 120 bits of entropy, or about the same as UUID v4.
	const bytes = crypto.getRandomValues(new Uint8Array(15));
	const id = encodeBase32LowerCase(bytes);
	return id;
}