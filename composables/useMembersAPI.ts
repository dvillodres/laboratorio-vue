import {memberService} from "~/services/member";

export default async function useMembersAPI(organizationName: string) {
    const members = await memberService.get(organizationName)

    return {
        members
    }
}
