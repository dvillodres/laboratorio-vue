<template>
  <div class="container flex align-items-center colum-direction">
      <h2>{{member.name ?? member.login}}</h2>
      <div class="image-wrapper">
        <img :src="member.avatar_url" :alt="member.name ?? member.login" class="member-avatar">
      </div>
      <p>{{member.bio}}</p>
      <p><strong>Organization:</strong> {{organization.name}}</p>
      <p v-if="member.mail !== null"><strong>Email:</strong> {{member.mail}}</p>
      <NuxtLink to="/" class="button">Volver a la lista</NuxtLink>
  </div>
</template>

<script setup lang="ts">

  import {memberService} from "~/services/member";
  import {useOrganizationNameStore} from "#imports";

  const {login} = defineProps<{ login: string }>()
  const {organization} = useOrganizationNameStore();
  const member = await memberService.getByLogin(login)

</script>

<style lang="scss" scoped>
  h2 {
    color: #167788;
    font-size: 24px;
    text-align: center;
  }

  .member-avatar {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    object-fit: cover;
  }

  .button {
    cursor: pointer;
    color: aliceblue;
    background-color: #167788;
    border: 1px solid #2c3e50;
  }

</style>
