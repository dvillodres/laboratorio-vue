import {Member, MemberAPI, MemberDetailAPI, MemberDetail} from "~/types";

export const memberService = {
    async get(organizationName: string) {
        const members =  await $fetch<MemberAPI[]>(`https://api.github.com/orgs/${organizationName}/members`)
        return mapMemberCollection(members) as Member[]
    },
    async getByLogin(login: string) {
        const member =  await $fetch<MemberDetailAPI>(`https://api.github.com/users/${login}`)
        return mapMemberDetail(member) as MemberDetail
    }
}

const mapMember = (member : MemberAPI) : Member => ({
    id : member.id.toString(),
    login : member.login,
    avatar_url : member.avatar_url
})

const mapMemberDetail = (member : MemberDetailAPI) : MemberDetail => ({
    id : member.id.toString(),
    login : member.login,
    name : member.name,
    avatar_url : member.avatar_url,
    mail : member.email,
    bio : member.bio,
})

const mapMemberCollection = (memberCollection : MemberAPI[]) : Member[] => memberCollection.map(
    (member) => mapMember(member)
);
