import qs from 'qs';
import type {
    TownhallForm,
    Townhall,
    TownhallSettings,
    QuestionForm,
} from 'prytaneum-typings';

import axios from 'utils/axios';
import errors from 'utils/errors';

/**
 * create a townhall
 */
export async function createTownhall(form: TownhallForm) {
    return axios.post<never>('/api/townhalls', qs.stringify(form));
}

/**
 * update a townhall
 */
export async function updateTownhall(form: TownhallForm, townhallId: string) {
    return axios.put<never>(`/api/townhalls/${townhallId}`, qs.stringify(form));
}

/**
 * delete a townhall
 */
export async function deleteTownhall(townhallId: string) {
    return axios.delete<never>(`/api/townhalls/${townhallId}`);
}
/**
 * configure a townhall
 */
export async function configureTownhall(
    townhallId: string,
    settings: TownhallSettings
) {
    const url = `/api/townhalls/${townhallId}/configure`;
    return axios.post(url, qs.stringify(settings));
}

/**
 * start a townhall
 */
export async function startTownhall(townhallId: string) {
    const url = `/api/townhalls/${townhallId}/start`;
    return axios.post(url);
}

/**
 * end a townhall that is currently in progress
 */
export async function endTownhall(townhallId: string) {
    const url = `/api/townhalls/${townhallId}/end`;
    return axios.post(url);
}

/**
 * retrieve a list of townhalls
 */
export async function getTownhallList() {
    return axios.get<Townhall[]>('/api/townhalls');
}

/**
 * retrieve a specific townhall
 */
export async function getTownhall(id: string) {
    return axios.get<Townhall>(`/api/townhalls/${id}`);
}

/**
 * creates a new question
 */
export async function createQuestion(townhallId: string, form: QuestionForm) {
    if (!townhallId) throw errors.internalError();
    const url = `/api/townhalls/${townhallId}/questions`;
    return axios.post(url, qs.stringify(form));
}
