<template>
  <div class="container">
    <MemberDetail :login="login"/>
  </div>
</template>

<script setup lang="ts">

import MemberDetail from "~/components/MemberDetail.vue";

const route = useRoute()
  const login = route.params.login as string
</script>
