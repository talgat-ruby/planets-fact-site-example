import type { PageServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ parent }) => {
	const planetsJson = await parent();
	redirect(307, `/${planetsJson.data?.[0].id}`);
};
