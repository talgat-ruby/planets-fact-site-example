import { error } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';

type PlanetItem = {
	id: string;
	name: string;
};

type PlanetsResponse = {
	count: number;
	data: PlanetItem[];
};

export const load: LayoutServerLoad = async ({ fetch }) => {
	try {
		const res = await fetch('http://localhost:8081/api/v1/planets');

		if (!res.ok) {
			await Promise.reject(new Error(`${res.status} - ${res.statusText}`));
		}

		const json: PlanetsResponse = await res.json();

		return json;
	} catch (e) {
		if (e instanceof Error) {
			return error(400, e.message);
		}
		return error(404);
	}
};
