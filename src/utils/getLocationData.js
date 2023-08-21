import { Axios } from '../service/axios';

export async function getStateData() {
	try {
		const stateData = await Axios.get('/states');

		return stateData?.data?.data;
	} catch (error) {
		return [];
	}
}

export async function getCityData(state) {
	try {
		const cityData = await Axios.get('/cities', { headers: { state: state } });
		return cityData?.data?.data;
	} catch (error) {
		return [];
	}
}

export async function getAreaData(city) {
	try {
		const cityData = await Axios.get('/area', { headers: { city: city } });
		return cityData?.data?.data;
	} catch (error) {
		return [];
	}
}

export async function getPostalCode({ area, city }) {
	try {
		const postalCode = await Axios.get('/postalcode', { headers: { city: city, area: area } });
		return postalCode?.data?.data[0];
	} catch (error) {
		return '';
	}
}

export async function getCityForFilter(city) {
	try {
		const res = await Axios.get(`/getAllCity`, { headers: { city: city } });
		return res?.data?.data;
	} catch (error) {
		return [];
	}
}
