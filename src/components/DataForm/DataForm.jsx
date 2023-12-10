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
} from './dataForm.styled';

const DataForm = () => {
  const [datos, setDatos] = useState({
    altura: '',
    edad: '',
    pesoActual: '',
    pesoDeseado: '',
    grupoSanguineo: '1',
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setDatos({
      ...datos,
      [name]: value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Datos enviados:', datos);
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
                <RadioLabel
                  key={grupo}
                  isSelected={datos.grupoSanguineo === grupo.toString()}
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
        </Form>
      </form>
    </Container>
  );
};

export default DataForm;
