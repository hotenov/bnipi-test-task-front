<script setup lang="ts">
import type { User } from './types/users';

const props = defineProps<{
  item: User
}>()

// Address
const street = defineModel("street")
const suite = defineModel("suite")
const city = defineModel("city")
const zipcode = defineModel("zipcode")
// Company
const company = defineModel("company")
const catchPhrase = defineModel("catchPhrase")
const bs = defineModel("bs")
// Basic Info
const name = defineModel("name")
const userName = defineModel("userName")
const email = defineModel("email")
const phone = defineModel("phone")
const website = defineModel("website")

// const initialData = props.item
const initialData = {
    id: props.item.id,
    name: name.value,
    username: userName.value,
    email: email.value,
    address: {
      street: street.value,
      suite: suite.value,
      city: city.value,
      zipcode: zipcode.value,
      geo: props.item.address.geo,
    },
    phone: phone.value,
    website: website.value,
    company: {
      name: company.value,
      catchPhrase: catchPhrase.value,
      bs: bs.value,
    }
  }

function updateUser() {
  const id = props.item.id
  let currentData = Object.create(null)
  currentData = {
    id,
    name: name.value,
    username: userName.value,
    email: email.value,
    address: {
      street: street.value,
      suite: suite.value,
      city: city.value,
      zipcode: zipcode.value,
      geo: props.item.address.geo,
    },
    phone: phone.value,
    website: website.value,
    company: {
      name: company.value,
      catchPhrase: catchPhrase.value,
      bs: bs.value,
    }
  }
  const diffData = Object.fromEntries(Object.entries(currentData).filter(([k, v]) => initialData[k] !== v))
  console.log(`All data for user with ID: ${id}`)
  console.log(JSON.stringify(currentData, null, 2));
  console.log("Only changes:")
  console.log(JSON.stringify(diffData, null, 2));
  console.log("Simulate Send PUT request with object:")
  const alertMessage = `
These properties were changed for User ID: ${id}
(only new values on this alert)

${JSON.stringify(diffData, null, 2)}
`
  alert(alertMessage)
}

</script>

<template>
  <details>
    <summary>
      <div class="item-header">
        <div>{{ props.item.name }}</div>
        <div>{{ props.item.email }}</div>
        <div>{{ props.item.phone }}</div>
        <div>{{ props.item.website }}</div>
      </div>
    </summary>
    <form @submit.prevent="updateUser">
      <div class="info-container">
        <div class="info">
          <div class="info-section">
            <div class="title">Address</div>
            <div class="section-data">
              <label for="user-street">Street</label>
              <input id="user-street" v-model="street" />
              <label for="user-suite">Suite</label>
              <input id="user-suite" v-model="suite" />
              <label for="user-city">City</label>
              <input id="user-city" v-model="city" />
              <label for="user-zipcode">Zipcode</label>
              <input id="user-zipcode" v-model="zipcode" />
            </div>
          </div>
          <div class="info-section">
            <div class="title">Company</div>
            <div class="section-data">
              <label for="user-company-name">Name</label>
              <input id="user-company-name" v-model="company" />
              <label for="user-company-catch-phrase">CatchPhrase</label>
              <input id="user-company-catch-phrase" v-model="catchPhrase" />
              <label for="user-company-bs">Bs</label>
              <input id="user-company-bs" v-model="bs" />
            </div>
          </div>
          <div class="info-section">
            <div class="title">Basic Info</div>
            <div class="section-data">
              <label for="user-name">Name</label>
              <input id="user-name" v-model="name" />
              <label for="user-username">Username</label>
              <input id="user-username" v-model="userName" />
              <label for="user-email">Email</label>
              <input id="user-email" v-model="email" />
              <label for="user-phone">Phone</label>
              <input id="user-phone" v-model="phone" />
              <label for="user-phone">Website</label>
              <input id="user-phone" v-model="website" />
            </div>
          </div>
        </div>
        <button class="save" type="submit"></button>
      </div>
    </form>
  </details>
</template>

<style scoped>
details {
  font:
    "Roboto",
    sans-serif;
  width: 100%;
}

details[open] {
  min-height: 2em;
  /* max-height: 20em; */
}

details[open] summary:before {
  transform: rotate(90deg);
  -webkit-transform: rotate(90deg);
  -moz-transform: rotate(90deg);
}

details > summary {
  display: flex;
  align-items: center;
  height: 40px;
  position: relative;
  width: 100%;
  cursor: pointer;
  list-style: none;
  border: 1px solid #ffd200;
  border-radius: 4px;
  padding: 14px 0 14px 4px;
}

/* custom marker */
summary::before {
  display: block;
  flex-shrink: 0;
  content: "";
  /* left: 0; */
  /* top: .8em; */
  /* position: absolute; */
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10.6' height='20.2' fill='none'%3E%3Cpath fill='%23ffd300' fill-rule='evenodd' d='M.275 1.22 1.11.293c.31-.34.77-.34 1.07 0L10.4 9.33c.2.25.2.5.2.77 0 .3 0 .6-.2.8l-8.22 9c-.3.3-.76.3-1.07 0L.275 19c-.3-.4-.3-.9 0-1.2L7.35 10 .275 2.32c-.3-.34-.3-.84 0-1.18z' clip-rule='evenodd'/%3E%3C/svg%3E") no-repeat 50% 50% / .5em 1.4em;
  width: 10.52px;
  height: 20.18px;
  margin-left: 11.47px;
  margin-right: 19.43px;
  transition: transform .1s linear;
  -webkit-transition: transform .1s linear;
}

summary > .item-header {
  display: grid;
  grid-template-columns: 300px 350px 270px 250px;
  align-items: center;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 16.41px;
}

details > p {
  border-radius: 0 0 10px 10px;
  padding: 2px 6px;
  margin: 0;
}

.info-container {
  display: grid;
  grid-template-columns: 1501.97px 1fr;
  margin: 12px 31.27px 0px 31.27px;
}

.info {
  display: flex;
  border: 1px solid #D9DBDA;
  border-radius: 4px;
}

.info-section {
  display: flex;
  flex-flow: column;
  flex: 1;
  border: 1px solid #D9DBDA;
}

.info-section .title {
  height: 40px;
  border-bottom: 1px solid #D9DBDA;
  text-transform: uppercase;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 18.75px;
  padding: 11px 32px 10px 32px;
}

.section-data {
  display: flex;
  flex-flow: column;
  padding: 23px 32px;
}

.section-data label {
  text-transform: capitalize;
  margin-bottom: 7px;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 14.06px;
  color: #696969;
}

.section-data input {
  appearance: none;
  border: 1px solid #D9DBDA;
  margin-bottom: 12px;
  padding: 9px 18px 10px 17.96px;
  text-transform: capitalize;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 16.41px;
  color: #696969;
  border-radius: 4px;
  background: transparent;
}

button.save {
  height: 40px;
  margin-left: 19.77px;
  border-radius: 4px;
  border: none;
  background: url("data:image/svg+xml,%3Csvg width='21' height='20' viewBox='0 0 21 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.50781 10.4894L8.76326 18.0293C9.22838 18.5126 10.0281 18.41 10.3561 17.8249L19.227 2' stroke='%235F7465' stroke-width='3' stroke-linecap='round'/%3E%3C/svg%3E") #FFD300 no-repeat center;
}
</style>