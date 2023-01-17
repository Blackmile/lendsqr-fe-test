import { Profiler } from "inspector";

export const fetchData = async (): Promise<UserList[]> => {
    const res = await fetch('https://www.google.com/url?q=https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users&sa=D&source=editors&ust=1673053333887885&usg=AOvVaw0X0I4S5RcOMDH_--RObNKg')
    const data = await res.json();
    return data;
}

export interface UserList {
    createdAt: string,
    orgName: string,
    userName: string,
    email: string,
    phoneNumber: string,
    lastActiveDate: string,
    profile: Profile,
    guarantor: Gaurantor,
    accountBalance: number,
    accountNumber: string,
    socials: Socials,
    education: Education,
    id: number
}

interface Profile {
    firstName: string,
    lastName: string,
    phoneNumber: string,
    avatar: string,
    gender: string,
    bvn: number,
    address: string,
    currency: String
}

interface Gaurantor {
    firstName: string,
    lastName: string,
    phoneNumber: string,
    gender: string,
    address: string
}

interface Socials {
    facebook: string,
    instagram: string,
    twitter: string
}

interface Education {
    level: string,
    employmentStatus: string,
    sector: string,
    duration: string,
    officeEmail: string,
    monthlyIncome: [],
    loanRepayment: number
}