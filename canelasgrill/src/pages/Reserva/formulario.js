import React from 'react';
 import { useFormik } from 'formik';
 
 
 const validate = values => {
   const errors = {};
   if (!values.Nome) {
     errors.Nome = 'Preencha todos os campos!';
   } 
 
   if (!values.Telefone) {
     errors.Telefone = 'Preencha todos os campos!';
   } else if (values.Telefone.length > 11) {
     errors.Telefone = 'Telefone inválido';
   }
 
   if (!values.Horario) {
     errors.Horario = 'Preencha todos os campos!';
   } 
 
   if (!values.Qtd) {
    errors.Qtd = 'Preencha todos os campos!';
  } else if (values.Qtd > 10) {
    errors.Qtd = 'Limite de 10 pessoas por mesa.';
  }

   return errors;
 };
 
 const Formulario = () => {
  
   const formik = useFormik({
     initialValues: {
       Nome: '',
       Telefone: '',
       Horario: '',
       Qtd: 1,
     },
     validate,
     onSubmit: values => {
       alert(JSON.stringify('Em breve entraremos em contato, para confirmar sua reserva!Agradecemos à preferencia!'));
     },
   });
   return (
     <form onSubmit={formik.handleSubmit}>
       <label htmlFor="Nome" className="nome">Nome</label>
       <input
         id="Nome"
         name="Nome"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.Nome}
       />
       {formik.errors.Nome ? <div>{formik.errors.Nome}</div> : null}
 
       <label htmlFor="Telefone" className="telefone">Telefone</label>
       <input
         id="Telefone"
         name="Telefone"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.Telefone}
       />
       {formik.errors.Telefone? <div>{formik.errors.Telefone}</div> : null}
 
       <label htmlFor="Horario" className="horario">Data e Hora</label>
       <input
         id="Horario"
         name="Horario"
         type="datetime-local"
         onChange={formik.handleChange}
         value={formik.values.Horario}
       />
       {formik.errors.Horario ? <div>{formik.errors.Horario}</div> : null}
 
       <label htmlFor="Qtd" className="quantidade">Mesa para quantas pessoas?</label>
       <input
         id="Qtd"
         name="Qtd"
         type="Number"
         onChange={formik.handleChange}
         value={formik.values.Qtd}
       />
       {formik.errors.Qtd ? <div>{formik.errors.Qtd}</div> : null}
 





       <button type="submit">Confirmar</button>
     </form>
   );
 };

export default Formulario






