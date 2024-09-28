<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import type { User } from './types/users';

const props = defineProps(['apiUrl'])

const users = ref<User[]>([])

const newName = ref("")


watchEffect(async () => {
  // this effect will run immediately and then
  // re-run whenever currentBranch.value changes
  const url = `${props.apiUrl}/users`
  users.value = await (await fetch(url)).json()
})
</script>

<template>
  <span>Name</span><span>Email</span><span>Phone</span><span>Website</span>
  <ul>
    <li v-if="!users.length">
      Загрузка списка пользователей...
    </li>
    <li v-for="(user, index) of users" :key="user.id">
      <slot name="user" v-bind="user" />
      <details>
        <summary>
          <div>{{ user.name}}</div>
          <div>{{ user.email }}</div>
          <div>{{ user.phone }}</div>
          <div>{{ user.website }}</div>
        </summary>
        <div class="info-container">
          <div>
            <div>Address</div>
            <div>
              <p>{{ user.address.street }}</p>
              <p>{{ user.address.suite }}</p>
              <p>{{ user.address.city }}</p>
              <p>{{ user.address.zipcode }}</p>
            </div>
          </div>
          <div>
            <div>Company</div>
            <div>
              <p>{{ user.company.name }}</p>
              <p>{{ user.company.catchPhrase }}</p>
              <p>{{ user.company.bs }}</p>
            </div>
          </div>
          <div>
            <div>Basic Info</div>
            <div>
              <form @submit.prevent="">
                <label for="user-name">Name</label>
                <input id="user-name" v-model="user.name"/>
                <p>{{ user.username }}</p>
                <p>{{ user.email }}</p>
                <p>{{ user.phone }}</p>
                <p>{{ user.website }}</p>
                <button>Save</button>
              </form>
            </div>
          </div>
        </div>
      </details>
    </li>
  </ul>
</template>

<style scoped>
ul {
  list-style-type: none;
  padding: 5px;
}

li {
  padding: 5px 20px;
  margin: 10px;
  color: var(--color-text);
}

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