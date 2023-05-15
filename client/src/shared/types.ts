export type JsonPlaceholderPostType = {
    userId: number;
    id: number;
    title: string;
    body: string;
};

export type JsonPlaceholderCommentType = {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
};

export interface User {
    email: string;
    firstName?: string;
    lastName?: string;
    password?: string;
    token?: string;
}
