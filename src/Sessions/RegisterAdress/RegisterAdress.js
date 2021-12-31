import React from 'react'
import { ScreenContainer, InputsContainer } from './styled'
import useForm from '../../Hooks/useForm'
import logo from '../../assets/logo.png'
import axios from 'axios'
import { BASE_URL } from '../../Constants/Url'
import { Button, TextField } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import useProtectedPage from '../../Hooks/useProtectedPage'

const AddressPage = () => {
  useProtectedPage()
  const token = localStorage.getItem("token")
  const { form, onChangeInput, clear } = useForm({
    street: "",
    number: "",
    neighbourhood: "",
    city: "",
    state: "",
    complement: ""
  })

  const history = useHistory()

  const onSubmitForm = (event) => {
    event.preventDefault()
    addAddress()
    alert("Endereço cadastrado com sucesso!")
  }
  const addAddress = () => {
    axios.put(`${BASE_URL}/address`, form, {
      headers: {
        auth: `${token}`
      }
    }).then((res) => {
      localStorage.setItem("token", res.data.token)
      clear()
    }).catch((err) => {
      console.log(err)
    })
  }
  return (
    <ScreenContainer>
      <img src={logo} alt="logo Rappi4" />
      <InputsContainer>
        <p>MEU ENDEREÇO</p>
        <form onSubmit={onSubmitForm}>
          <TextField
            type={"text"}
            name={"street"}
            value={form.street}
            onChange={onChangeInput}
            label={"Rua/Avenida:"}
            variant={"outlined"}
            margin={"normal"}
            fullWidth
            required
          />
          <TextField
            type={"number"}
            name={"number"}
            value={form.number}
            onChange={onChangeInput}
            label={"Número:"}
            variant={"outlined"}
            margin={"normal"}
            fullWidth
            required
          />
          <TextField
            type={"text"}
            name={"neighbourhood"}
            value={form.neighbourhood}
            onChange={onChangeInput}
            label={"Bairro:"}
            variant={"outlined"}
            margin={"normal"}
            fullWidth
            required
          />
          <TextField
            type={"text"}
            name={"state"}
            value={form.state}
            onChange={onChangeInput}
            label={"Estado:"}
            variant={"outlined"}
            margin={"normal"}
            fullWidth
            required
          />
          <TextField
            type={"text"}
            name={"city"}
            value={form.city}
            onChange={onChangeInput}
            label={"Cidade:"}
            variant={"outlined"}
            margin={"normal"}
            fullWidth
            required
          />
          <TextField
            type={"text"}
            name={"complement"}
            value={form.complement}
            onChange={onChangeInput}
            label={"Complemento:"}
            variant={"outlined"}
            margin={"normal"}
            fullWidth
          />
          <Button
            type={"submit"}
            fullWidth
            variant={"contained"}
            color={"primary"}
            margin={"normal"}
          >
            Salvar
          </Button>
        </form>
      </InputsContainer>
    </ScreenContainer>
  )
}

export default AddressPage