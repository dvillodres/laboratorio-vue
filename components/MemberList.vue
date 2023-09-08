<template>
  <div class="container">
    <Search :handle-search="onSearch" :organization-name="organization.name"/>
    <ul>
      <MemberItem
          v-for="member in members"
          :key="member.id"
          :member="member"
      />
    </ul>
  </div>
</template>

<script lang="ts" setup>

  import MemberItem from "./MemberItem";
  import useMembersAPI from "~/composables/useMembersAPI";
  import {useOrganizationNameStore} from "~/composables/useOrganizationNameStore";
  import Search from "~/components/Search.vue";

  const {organization} = useOrganizationNameStore();
  const data = await useMembersAPI(organization.name);
  const members = ref(data.members);

  const onSearch = async () => {
    const response = await useMembersAPI(organization.name);
    members.value = response.members;
  }

</script>

<style lang="scss" scoped>

  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }
</style>

