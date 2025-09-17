export interface PersonInter{
    id:string,
    name:string,
    age:number,
    x?:string
}

export type Persons = Array<PersonInter>