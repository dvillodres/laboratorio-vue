<template>
  <div class="form-wrapper">
    <form @submit="onSubmit" class="search-box">
      <input v-model="organizationName" name="organizationName" type="text">
      <button>Search</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import {useOrganizationNameStore} from "#imports";

const {handleSearch} = defineProps({
  handleSearch: Function
})
  const {organization, setOrganizationName} = useOrganizationNameStore();
  const organizationName = ref(organization.name);

  const onSubmit = async (event) => {
    event.preventDefault();
    setOrganizationName(organizationName.value)
    handleSearch();
  }
</script>

<style lang="scss" scoped>

.form-wrapper {
  display: flex;
  justify-content: center;
  padding: 40px;
  .search-box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 500px; // Ajusta esto a tu gusto
    gap: 40px;
    input, button {
      flex: 1;
      padding: 10px;
    }

    button {
      color: aliceblue;
      background-color: #167788;
      border: 1px solid #2c3e50;
    }
  }
}


</style>
