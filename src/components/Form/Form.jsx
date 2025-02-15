import React, { useState, useEffect } from "react";
import { INITIAL_FORM_STATE, VALIDATION_RULES } from "../../utils/formHelpers";

const Form = () => {
  const [formData, setFormData] = useState(INITIAL_FORM_STATE);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    let timer;
    if (isSubmitted) {
      timer = setTimeout(() => {
        setIsSubmitted(false);
      }, 4000);
    }
    return () => clearTimeout(timer);
  }, [isSubmitted]);

  const validateField = (name, value) => {
    const rule = VALIDATION_RULES[name];
    return rule.pattern.test(value) ? "" : rule.message;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (touched[name]) {
      const error = validateField(name, value);
      setErrors((prev) => ({ ...prev, [name]: error }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const error = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const validateForm = () => {
    const newErrors = {};
    let isValid = true;

    Object.keys(formData).forEach((field) => {
      const error = validateField(field, formData[field]);
      if (error) {
        newErrors[field] = error;
        isValid = false;
      }
    });

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (validateForm()) {
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setFormData(INITIAL_FORM_STATE);
        setTouched({});
        setErrors({});
        setIsSubmitted(true);
      } catch (error) {
        setErrors((prev) => ({
          ...prev,
          submit: "Failed to send message. Please try again.",
        }));
      }
    }

    setIsSubmitting(false);
  };

  const renderField = (fieldName, label, type = "text") => {
    const isTextArea = type === "textarea";
    const Component = isTextArea ? "textarea" : "input";
    const hasError = touched[fieldName] && errors[fieldName];

    return (
      <div className="form-field">
        <label className="form-label" htmlFor={fieldName}>
          {label}
        </label>
        <Component
          id={fieldName}
          type={type}
          name={fieldName}
          className={`form-input ${hasError ? "form-input-error" : ""}`}
          placeholder={`Enter your ${label.toLowerCase()}`}
          value={formData[fieldName]}
          onChange={handleChange}
          onBlur={handleBlur}
          disabled={isSubmitting}
          {...(isTextArea && { rows: 5 })}
        />
        {hasError && <span className="form-error">{errors[fieldName]}</span>}
      </div>
    );
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} noValidate className="form-content">
        {renderField("name", "Name")}
        {renderField("surname", "Surname")}
        {renderField("email", "Email", "email")}
        {renderField("message", "Message", "textarea")}
        <div className="form-footer">
          <button
            type="submit"
            className={`form-button ${
              isSubmitting ? "form-button-submitting" : ""
            }`}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
          {isSubmitted && (
            <div className="form-success">Message sent successfully!</div>
          )}
          {errors.submit && (
            <div className="form-error form-error-submit">{errors.submit}</div>
          )}
        </div>
      </form>
    </div>
  );
};

export default Form;
