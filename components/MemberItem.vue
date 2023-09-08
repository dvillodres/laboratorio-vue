<template>
  <NuxtLink :to="`/member/${member.login}`">
    <li>
      <h2>{{member.login}}</h2>
      <img :src="member.avatar_url" :alt="member.login">
    </li>
  </NuxtLink>
</template>

<script setup lang="ts">

  import {Member} from "~/types";

  const {member} = defineProps<{ member: Member }>()

</script>

<style lang="scss" scoped>
  li {
    width: 200px;
    border: 1px solid #167788;
    padding: 10px;

    h2{
      color: #167788;
      font-size: 14px;
      text-align: center;
    }

    img {
      width: 100%;
    }
  }
</style>
