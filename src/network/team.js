import { handleError } from "../utils/functionHelpers";
import instance from "./axios";

const createTeamMember = async function (businessId, payload) {
  const { data } = await instance.post(`/business/${businessId}/team`, payload);
  return data;
};

const getAllTeamMembers = async function (query, businessId) {
  try {
    const { data } = await instance.get(
      `/business/${businessId}/team-members?` + query
    );

    return data;
  } catch (error) {
    handleError(error);
  }
};

const deleteTeamMember = async function (payload) {
  try {
    const { data } = await instance.delete(
      `/business/team-members/${payload.userId}/delete`
    );
    return data;
  } catch (error) {
    handleError(error);
  }
};

const updateTeamMember = async function (payload) {
  const { data } = await instance.put(
    `/business/team-members/${payload.userId}/update`,
    payload
  );

  return data;
};

const searchTeam = async function (businessId, query) {
  const { data } = await instance.get(
    `/business/${businessId}/search?query=${query}`
  );

  return data;
};
export {
  getAllTeamMembers,
  createTeamMember,
  deleteTeamMember,
  updateTeamMember,
  searchTeam,
};
