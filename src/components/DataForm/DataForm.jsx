import { LoginUser } from 'react-router-dom';
import React, { useState } from 'react';
import {
  Container,
  Title,
  FormGroup,
  Label,
  Input,
  RadioGroup,
  RadioLabel,
  RadioInput,
  Form,
  BoxButton,
} from './dataForm.styled';
import Modal from 'components/Modal/Modal';
import { Button } from 'components/Button/Button';
import { ContainerB } from 'components/Modal/Modal.styled';

const DataForm = () => {
  const valoresIniciales = {
    altura: '',
    edad: '',
    pesoActual: '',
    pesoDeseado: '',
    grupoSanguineo: '1',
  };

  /*const Login = LoginUser();
  const PageLoginUser = () => {
    setModalVisible(false);
    Login.push('../pages/Login/Login');
  };
*/
  const [datos, setDatos] = useState(valoresIniciales);
  const CleanForm = () => {
    setDatos(valoresIniciales);
  };

  const [modalVisible, setModalVisible] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setDatos({
      ...datos,
      [name]: value,
    });
  };

  const [infoNutricional] = useState({
    kilocalorias: 2000,
    alimentosEvitar: ['Azúcar', 'Pan blanco', 'Refrescos'],
  });

  const validarDatos = () => {
    if (
      !datos.altura ||
      !datos.edad ||
      !datos.pesoActual ||
      !datos.pesoDeseado
    ) {
      alert('Todos los campos son obligatorios.');
      return false;
    }

    if (datos.altura < 100 || datos.altura > 250) {
      alert('La altura debe estar entre 100 y 250 cm.');
      return false;
    }

    if (
      datos.pesoActual < 30 ||
      datos.pesoActual > 300 ||
      datos.pesoDeseado < 30 ||
      datos.pesoDeseado > 300
    ) {
      alert('El peso debe estar entre 30 y 300 kg.');
      return false;
    }

    if (datos.edad < 10 || datos.edad > 100) {
      alert('La edad debe estar entre 10 y 100 años.');
      return false;
    }

    return true;
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (validarDatos()) {
      console.log('Datos enviados:', datos);
      setModalVisible(true); // Abre el modal si la validación es exitosa
      CleanForm(); // limpia el formulario
    } else {
      CleanForm(); // Manejo de error si la validación falla
    }
  };

  return (
    <Container>
      <Title>Calcula tu ingesta diaria de calorías ahora mismo</Title>

      <form onSubmit={handleSubmit}>
        <Form>
          <FormGroup>
            <Label htmlFor="altura">Altura:</Label>
            <Input
              type="number"
              id="altura"
              name="altura"
              value={datos.altura}
              onChange={handleChange}
              required
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="pesoDeseado">Peso Deseado:</Label>
            <Input
              type="number"
              id="pesoDeseado"
              name="pesoDeseado"
              value={datos.pesoDeseado}
              onChange={handleChange}
              required
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="edad">Edad:</Label>
            <Input
              type="number"
              id="edad"
              name="edad"
              value={datos.edad}
              onChange={handleChange}
              required
            />
          </FormGroup>
        </Form>

        <Form>
          <FormGroup>
            <Label htmlFor="pesoActual">Peso Actual:</Label>
            <Input
              type="number"
              id="pesoActual"
              name="pesoActual"
              value={datos.pesoActual}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label>Grupo Sanguíneo:</Label>
            <hr></hr>
            <RadioGroup>
              {[1, 2, 3, 4].map(grupo => (
                <RadioLabel key={grupo}>
                  <RadioInput
                    type="radio"
                    id={`grupoSanguineo${grupo}`}
                    name="grupoSanguineo"
                    value={grupo.toString()}
                    checked={datos.grupoSanguineo === grupo.toString()}
                    onChange={handleChange}
                    required
                  />
                  {`${grupo}`}
                </RadioLabel>
              ))}
            </RadioGroup>
          </FormGroup>
        </Form>
        <BoxButton>
          <Button type="submit" text="Comienza a perder peso" />
        </BoxButton>
      </form>
      <Modal state={modalVisible} changestate={() => setModalVisible(false)}>
        <ContainerB>
          <h3>
            {' '}
            Tu ingesta diaria recomendada de calorías es: <br></br>
            {infoNutricional.kilocalorias} kcal
          </h3>
          <p>Alimentos a evitar:</p>
          <ul>
            {infoNutricional.alimentosEvitar.map((alimento, index) => (
              <li key={index}>{alimento}</li>
            ))}
          </ul>
          <Button
            type="submit"
            text="Comienza a perder peso"
            onClick={() => setModalVisible(false)}
          />
        </ContainerB>
      </Modal>
    </Container>
  );
};

export default DataForm;
