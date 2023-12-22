import React, { useState, useEffect, useRef } from 'react';
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
  StyledH3,
  StyledH2,
  StyledHr,
  KlcSpan,
  StyledP,
  StyledDiv,
  Styledol,
  StyledHrS,
  BoxButtonM,
} from './dataForm.styled';
import Modal from 'components/Modal/Modal';
import { Button } from 'components/Button/Button';
import { ContainerB } from 'components/Modal/Modal.styled';
import { useNavigate } from 'react-router-dom';
//import { obtenerDatosNutricionales } from '../../redux/thunks';

const DataForm = () => {
  const valoresIniciales = {
    altura: '',
    edad: '',
    pesoActual: '',
    pesoDeseado: '',
    grupoSanguineo: '1',
  };

  const [datos, setDatos] = useState(valoresIniciales);
  const CleanForm = () => {
    setDatos(valoresIniciales);
  };

  const [modalVisible, setModalVisible] = useState(false);
  const modalRef = useRef();

  const handleChange = e => {
    const { name, value } = e.target;
    setDatos({
      ...datos,
      [name]: value,
    });
  };

  const handleKeyDown = event => {
    if (event.key === 'Escape') {
      setModalVisible(false);
    }
  };
  const handleClickOutside = event => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setModalVisible(false);
    }
  };

  useEffect(() => {
    // const storedData = localStorage.getItem('formData');
    // if (storedData) {
    //   setDatos(JSON.parse(storedData));
    // }
    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('keydown', handleKeyDown);

    // Limpieza del efecto
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/register');
  };

  const calcularCaloriasMujer = (peso, altura, edad) => {
    const bmr = 447.593 + 9.247 * peso + 3.098 * altura - 4.33 * edad;
    const calorias = bmr * 1.2;
    return Math.round(calorias);
  };

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

  const [infoNutricional, setInfoNutricional] = useState({
    kilocalorias: 2000,
    alimentosEvitar: ['Harinas', 'Huevos', 'Azucares', 'Cereales'],
  });
  // Petición al backend
  /*useEffect(() => {
    if (modalVisible) {
      obtenerDatosNutricionales().then(datos => {
        setInfoNutricional(datos);
      });
    }
  }, [modalVisible]);*/

  const handleSubmit = e => {
    e.preventDefault();
    if (validarDatos()) {
      const caloriasRecomendadas = calcularCaloriasMujer(
        parseFloat(datos.pesoDeseado),
        parseFloat(datos.altura),
        parseInt(datos.edad)
      );

      setInfoNutricional(prevState => ({
        ...prevState,
        kilocalorias: caloriasRecomendadas,
      }));
      //localStorage.setItem('Dataform', JSON.stringify(datos));

      setModalVisible(true);
      CleanForm();
    } else {
      CleanForm();
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
              autocomplete="on"
              required
            />
          </FormGroup>

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
            <StyledHrS></StyledHrS>
            <RadioGroup>
              {[1, 2, 3, 4].map(grupo => (
                <RadioLabel
                  key={grupo}
                  // isSelected={datos.grupoSanguineo === grupo.toString()}
                >
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
        <BoxButton>
          <Button type="submit" text="Comienza a perder peso" />
        </BoxButton>
        </Form>
      </form>
      <Modal state={modalVisible} changestate={() => setModalVisible(false)}>
        <ContainerB ref={modalRef}>
          <StyledH3>
            Tu ingesta diaria recomendada de <br></br>calorías es:
          </StyledH3>
          <StyledH2>
            {infoNutricional.kilocalorias}
            <KlcSpan>kcal</KlcSpan>
          </StyledH2>
          <StyledHr />
          <StyledDiv>
            <StyledP>Alimentos que no deberías comer:</StyledP>
            <Styledol>
              {infoNutricional.alimentosEvitar.map((alimento, index) => (
                <li key={index}>{alimento}</li>
              ))}
            </Styledol>
            <BoxButtonM>
              <Button
                type="submit"
                text="Comienza a perder peso"
                onClick={handleClick}
              />
            </BoxButtonM>
          </StyledDiv>
        </ContainerB>
      </Modal>
    </Container>
  );
};

export default DataForm;
