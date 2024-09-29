<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import type { User } from './types/users';
import UserListItem from "./UserListItem.vue";

const props = defineProps(['apiUrl'])

const users = ref<User[]>([])

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
      <UserListItem :item="user"
        v-model:street="user.address.street"
        v-model:suite="user.address.suite"
        v-model:city="user.address.city"
        v-model:zipcode="user.address.zipcode"
        v-model:company="user.company.name"
        v-model:catch-phrase="user.company.catchPhrase"
        v-model:bs="user.company.bs"
        v-model:name="user.name"
        v-model:user-name="user.username"
        v-model:email="user.email"
        v-model:phone="user.phone"
        v-model:website="user.website"
      />
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
</style>