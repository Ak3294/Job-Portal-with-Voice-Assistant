import { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import "../contactform.css";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [disabled, setDisabled] = useState(false);
  const [alertInfo, setAlertInfo] = useState({
    display: false,
    message: "",
    type: "",
  });

  const toggleAlert = (message, type) => {
    setAlertInfo({ display: true, message, type });
    setTimeout(() => {
      setAlertInfo({ display: false, message: "", type: "" });
    }, 5000);
  };

  const onSubmit = async (data) => {
    const { name, email, subject, message } = data;
    try {
      setDisabled(true);
      const templateParams = { name, email, subject, message };
      await emailjs.send(
        process.env.service_0ufxsti,
        process.env.template_dzbcd27,
        templateParams,
        process.env.RpuUfmT0pzj5bPZD9
      );
      toggleAlert("Form submission was successful!", "success");
    } catch (e) {
      console.error(e);
      toggleAlert("Uh oh. Something went wrong.", "danger");
    } finally {
      setDisabled(false);
      reset();
    }
  };

  return (
    <div class='ContactForm'>
  <div class='container'>
    <div class='row'>
      <div class='col-12 text-center'>
        <div class='contactForm'>
          <form id='contact-form' novalidate>
            {/* Row 1 of form */}
            <div class='row formRow'>
              <div class='col-6'>
                <input
                  type='text'
                  name='name'
                  class='formInput'
                  placeholder='Name'
                ></input>
              </div>
              <div class='col-6'>
                <input
                  type='email'
                  name='email'
                  class='formInput'
                  placeholder='Email address'
                ></input>
              </div>
            </div>
            {/* Row 2 of form */}
            <div class='row formRow'>
              <div class='col'>
                <input
                  type='text'
                  name='subject'
                  class='formInput'
                  placeholder='Subject'
                ></input>
              </div>
            </div>
            {/* Row 3 of form */}
            <div class='row formRow'>
              <div class='col'>
                <textarea
                  rows={3}
                  name='message'
                  class='formInput'
                  placeholder='Message'
                ></textarea>
              </div>
            </div>
            <button class='submit-btn' type='submit'>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>

  );
};

export default ContactForm;
