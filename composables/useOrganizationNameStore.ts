export const useOrganizationNameStore = defineStore('organizationName', () => {
    const organization = reactive({
        name: 'Lemoncode'
    });
    const setOrganizationName = (organizationName: string) => {
        organization.name = organizationName;
    }
    return {
        organization,
        setOrganizationName
    }
})
