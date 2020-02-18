import React from "react";
import { Formik, Form, Field } from "formik";

export default function NewAccount({history}) {

function handleSubmit(values) {
    console.log(values);
    history.push('/')
}
    return (
    <div>
      <Formik
        onSubmit={handleSubmit}
        initialValues={{ name: "", cpf: "", tel: '', password: ''}}
      >
        <Form>
          <Field placeholder="name" name="name" />
          <Field placeholder="cpf" name="cpf" />
          <Field type="tel" placeholder="Telefone" name="tel" />
          <Field type="password" placeholder="Senha" name="password" />
          <button type="submit">Concluir</button>
        </Form>
      </Formik>
    </div>
  );
}
