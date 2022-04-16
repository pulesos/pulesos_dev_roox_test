export type AddressType = {
    street: string,
    city: string,
    zipcode: number | string,
  }
  
  export type CompanyType = {
    name: string,
  }
  
  export type UserType = {
    id?: number,
    key?: number,
    name?: string,
    username?: string,
    email?: string,
    phone?: number | string,
    website?: string,
    address?: AddressType,
    company?: CompanyType,
    comment?: string,
  }
