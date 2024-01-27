import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';

type PlanetResponse = {
	id: string;
	name: string;
	radius: number;
	revolution: number;
	rotation: number;
};

export const load: PageServerLoad = async ({ params, fetch }) => {
	try {
		const res = await fetch(`http://localhost:8081/api/v1/planets/${params.planetId}`);

		if (!res.ok) {
			await Promise.reject(new Error(`${res.status} - ${res.statusText}`));
		}

		const json: PlanetResponse = await res.json();

		return json;
	} catch (e) {
		if (e instanceof Error) {
			return error(400, e.message);
		}
		return error(404);
	}
};
