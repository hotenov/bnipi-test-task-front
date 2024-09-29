<script setup lang="ts">
import UserList from "./components/UserList.vue";
import PageLayout from "./components/PageLayout.vue";
import PageHeader from "./components/PageHeader.vue";

const baseApiUrl = "https://jsonplaceholder.typicode.com"
</script>

<template>
  <PageLayout>
    <template v-slot:header>
      <PageHeader />
    </template>
    <template v-slot:content>
      <UserList :api-url="baseApiUrl">
        <template v-slot:user="{ id }">
        </template>
      </UserList>
    </template>
  </PageLayout>
</template>

<style scoped>
header {
  line-height: 1.5;
}
</style>
