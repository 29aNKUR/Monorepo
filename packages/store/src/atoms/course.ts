import {atom} from "recoil";

export interface Course{
    _id: string,
    title: string,
    description: string,
    imageLink: string,
    price: number
}

export const courseState = atom<{course: null | Course}>({
    key: 'courseState',
    default: {
        course: null
    }
}) 