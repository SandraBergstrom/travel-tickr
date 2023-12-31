import { rest } from "msw";

const baseURL = "https://travel-tickr-api-e57198555b47.herokuapp.com/";

// Mock API handlers for user authentication-related requests
export const handlers = [
  rest.get(`${baseURL}dj-rest-auth/user/`, (req, res, ctx) => {
    return res(
      ctx.json({
        pk: 1,
        username: "Sandra",
        email: "",
        first_name: "",
        last_name: "",
        traveler_id: 1,
        traveler_image:
          "https://res.cloudinary.com/sandrabergstrom/image/upload/v1/media/../default_profile_uwgpte",
      })
    );
  }),

  // Mock POST request for logging out
  rest.post(`${baseURL}dj-rest-auth/logout/`, (req, res, ctx) => {
    return res(ctx.status(200));
  }),

  // Mock POST request for refreshing the authentication token
  rest.post(`${baseURL}dj-rest-auth/token/refresh/`, (req, res, ctx) => {
    return res(ctx.status(200));
  }),
];
