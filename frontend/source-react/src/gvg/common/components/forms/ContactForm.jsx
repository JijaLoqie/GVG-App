import { Box, Button, Input, Stack, Radio, RadioGroup, TextField, Typography, alpha, FormControlLabel, Divider, Paper } from "@mui/material"
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
        console.log(response)
      });

  }


  useEffect(() => {
    setCanSubmit(Object.keys(errors).length === 0 && captcha !== null)

  }, [captcha, errors])

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
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={2}>
          <TextField
            label="Фамилия Имя Отчество *" {...register("name", { required: true })}
          />
          <TextField
            label="Телефон *" {...register("number", { required: true })}
            onChange={event => {
              event.target.value = normalizePhoneNumber(event.target.value)
            }}
          />
          <TextField
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
                <Button variant="outlined" size="large" type="submit" disabled={!canSubmit}> Отправить </Button>
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
    </Box>
  )
}


export default ContactForm
