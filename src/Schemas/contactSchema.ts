import Joi from "joi";

export const contactSchema = Joi.object({
    name: Joi.string()
        .trim()
        .min(3)
        .max(30)
        .required()
        .custom((value, helpers) => {
            if (!value.trim()) {
                return helpers.error("string.empty");
            }
            return value;
        })
        .messages({
            "string.empty": "Name is required and cannot be only spaces",
            "string.min": "Name must be at least 3 characters long",
            "string.max": "Name must not exceed 30 characters",
        }),

    number: Joi.string()
        .pattern(/^[0-9]{10,15}$/)
        .required()
        .messages({
            "string.empty": "Phone number is required",
            "string.pattern.base": "Phone number must be 10–15 digits",
        }),

    message: Joi.string()
        .trim()
        .min(10)
        .max(500)
        .required()
        .custom((value, helpers) => {
            if (!value.trim()) {
                return helpers.error("string.empty");
            }
            return value;
        })
        .messages({
            "string.empty": "Message is required and cannot be only spaces",
            "string.min": "Message must be at least 10 characters long",
            "string.max": "Message must not exceed 500 characters",
        }),
});
