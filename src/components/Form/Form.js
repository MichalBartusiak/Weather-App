import React from 'react';
import style from './Form.module.scss'
const Form = props => {


  return (
    <form
      onSubmit={props.handleSubmit}
      className={style.form_wrapper}>
      <input
        onChange={props.handleChange}
        value={props.value}
        placeholder="city"
        name="city"
        type="text"
        className={style.form_input}
      />
      <button
        className={style.form_button}
      >Find Weather
      </button>
    </form>
  );
}

export default Form;