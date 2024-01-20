import { Box, Button, Input, Stack, Radio, RadioGroup, TextField, Typography, alpha, FormControlLabel, Divider, Paper, Alert } from "@mui/material"
import parsePhoneNumberFromString from "libphonenumber-js"
import { useForm } from "react-hook-form"
import { useEffect, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useSelector } from "react-redux";

function getCookie(name) {
  var cookieValue = null;
  if (document.cookie && document.cookie !== '') {
    var cookies = document.cookie.split(';');
    for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i].trim()
      if (cookie.substring(0, name.length + 1) === (name + '=')) {
        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
        break;
      }
    }
  }
  return cookieValue;
}

function ContactForm({ parentHandleSubmit, concreteProducts, ...otherProps }) {
  const cartProducts = useSelector(state => state.carts.products ?? [])
  const [deliveryOption, setDeliveryOption] = useState('contact');
  const [canSubmit, setCanSubmit] = useState(false)
  const [captcha, setCaptcha] = useState(null)
  const [statusFinal, setStatusFinal] = useState(null)
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const handleChangeOption = (event, newValue) => {
    setDeliveryOption(newValue);
    setCaptcha(null)
  };

  const captchaCheck = (value) => {
    setCaptcha(value)
  }


  const onSubmit = () => {
    const csrftoken = getCookie('csrftoken')
    fetch("/order_products", {
      method: "post",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'X-CSRFToken': csrftoken,
      },
      body: JSON.stringify({
        name: watch("name"),
        number: watch("number"),
        email: watch("email"),
        products: concreteProducts ?? cartProducts,
      })
    })
      .then((response) => {
        parentHandleSubmit && parentHandleSubmit(response.ok)
      }).finally(() => {
        setCanSubmit(false)
        setStatusFinal({ state: "success", text: "Отправлено!" })
      });

  }


  useEffect(() => {
    setStatusFinal(Object.keys(errors).length !== 0 ? { state: "error", text: "Введите все поля корректно!" } : null)
  }, [errors])

  useEffect(() => {
    setCanSubmit(captcha !== null && statusFinal?.state !== "success")
  }, [captcha, statusFinal])

  const normalizePhoneNumber = (value) => {
    const phoneNumber = parsePhoneNumberFromString(value)
    if (!phoneNumber) {
      return value
    }
    return (
      phoneNumber.formatInternational()
    )
  }

  return (
    <Box {...otherProps}>
      <form id="contacts" onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={2}>
          <TextField
            autoComplete="section-blue shipping name"
            label="Фамилия Имя Отчество *" {...register("name", { required: true })}
          />
          <TextField
            autoComplete="section-blue shipping phone"
            label="Телефон *" {...register("number", { required: true })}
            onChange={event => {
              event.target.value = normalizePhoneNumber(event.target.value)
            }}
          />
          <TextField
            autoComplete="section-blue shipping email"
            label="Email *" {...register("email", { required: true })}
          />
          {errors.exampleRequired && <span>This field is required</span>}

          <RadioGroup row value={deliveryOption} onChange={handleChangeOption}>
            <FormControlLabel label="Связаться и обсудить" control={<Radio />} value="contact" />
            <FormControlLabel label="Доставка" control={<Radio />} value="delivery" />
            <FormControlLabel label="Самовывоз" control={<Radio />} value="pickup" />
          </RadioGroup>
          <Divider />
          <Paper elevation={0} sx={{
            display: "flex", flexDirection: "column", textAlign: "start", alignItems: "start",
            p: 1, gap: 2,
          }}>
            {deliveryOption === "contact" ? (
              <>
                <Typography variant="h5"> Просто отправьте заполненную информацию и мы свяжемся с вами </Typography>
                <ReCAPTCHA
                  sitekey="6LfYLUYpAAAAAJM9ItmEuRXGmsUDK6p0gGQnFryp"
                  onChange={captchaCheck}
                />
                <Stack direction="row" spacing={2}>
                  <Button aria-label="contacts" variant="outlined" size="large" type="submit" disabled={!canSubmit}> Отправить </Button>
                  {statusFinal ? <Alert severity={statusFinal.state}>{statusFinal.text}</Alert> : null}
                </Stack>
              </>
            ) : (
              <>
                <Typography variant="h2"> 💢 </Typography>
                <Typography variant="h3"> Временно не работает </Typography>
                <Typography variant="body1"> Выберите "Связаться и обсудить" </Typography>
              </>
            )}
          </Paper>
        </Stack>
      </form>
    </Box >
  )
}


export default ContactForm
