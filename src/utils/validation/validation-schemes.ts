import Joi from "joi";

export const Schemes = {

    /* Routes */

    "/transport/calculate": Joi.object({
        startPoint: Joi.string().required(),
        endPoint: Joi.string().required(),
    }),
}
