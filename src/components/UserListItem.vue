<script setup lang="ts">
import type { User } from './types/users';
const props = defineProps<{
  item: User
}>()
const name = defineModel("name")
const userName = defineModel("userName")
const email = defineModel("email")
const phone = defineModel("phone")
const website = defineModel("website")
const company = defineModel("company")

const initialData = {
  name: name.value,
  username: userName.value,
  email: email.value,
  phone: phone.value,
  website: website.value
}

function updateUser() {
  const id = props.item.id
  let currentData = Object.create(null)
  currentData = {
    name: name.value,
    username: userName.value,
    email: email.value,
    phone: phone.value,
    website: website.value
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
      <div>{{ props.item.name }}</div>
      <div>{{ props.item.email }}</div>
      <div>{{ props.item.phone }}</div>
      <div>{{ props.item.website }}</div>
    </summary>
    <div class="info-container">
      <div>
        <div>Address</div>
        <div>
          <p>{{ props.item.address.street }}</p>
          <p>{{ props.item.address.suite }}</p>
          <p>{{ props.item.address.city }}</p>
          <p>{{ props.item.address.zipcode }}</p>
        </div>
      </div>
      <div>
        <div>Company</div>
        <div>
          <p>{{ props.item.company.name }}</p>
          <p>{{ props.item.company.catchPhrase }}</p>
          <p>{{ props.item.company.bs }}</p>
        </div>
      </div>
      <div>
        <div>Basic Info</div>
        <div>
          <form @submit.prevent="updateUser">
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
            <button>Save</button>
          </form>
        </div>
      </div>
    </div>
  </details>
</template>

<style scoped>
details {
  font:
    16px "Open Sans",
    Calibri,
    sans-serif;
  width: 100%;
}

details[open] {
  min-height: 2em;
  max-height: 20em;
}

details[open] summary:before {
  transform: rotate(90deg);
  -webkit-transform: rotate(90deg);
  -moz-transform: rotate(90deg);
}

details > summary {
  display: grid;
  grid-template-columns: 250px repeat(4, 1fr);
  align-items: center;
  position: relative;
  width: 100%;
  cursor: pointer;
  list-style: none;
  border: 1px solid #ffd200;
  border-radius: 4px;
  padding: 14px 0 15px 22px;
}

/* custom marker */
summary::before {
  content: "";
  left: 0;
  top: .8em;
  position: absolute;
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10.6' height='20.2' fill='none'%3E%3Cpath fill='%23ffd300' fill-rule='evenodd' d='M.275 1.22 1.11.293c.31-.34.77-.34 1.07 0L10.4 9.33c.2.25.2.5.2.77 0 .3 0 .6-.2.8l-8.22 9c-.3.3-.76.3-1.07 0L.275 19c-.3-.4-.3-.9 0-1.2L7.35 10 .275 2.32c-.3-.34-.3-.84 0-1.18z' clip-rule='evenodd'/%3E%3C/svg%3E") no-repeat 50% 50% / .5em .9em;
  width: 1em;
  height: 1em;
  transition: transform .1s linear;
  -webkit-transition: transform .1s linear;
}

details > p {
  border-radius: 0 0 10px 10px;
  padding: 2px 6px;
  margin: 0;
}

.info-container {
  display: grid;
  grid-template-columns: 250px repeat(3, 1fr);
  border: 1px solid #D9DBDA;
  margin: 16px 30px;
}
</style>