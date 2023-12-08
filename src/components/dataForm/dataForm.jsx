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
  BoxButton,
  Form,
} from './dataForm.styled';
import { Button } from 'components/Button/Button';

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
            <Label>Grupo Sanguíneo:</Label>
            <RadioGroup>
              {[1, 2, 3, 4, 5].map(grupo => (
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
    </Container>
  );
};

export default DataForm;
