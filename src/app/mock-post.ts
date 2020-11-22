import { post } from './post';
import { Contact } from './contact';
import { CONTACTS } from './mock-list';

export const POSTS: post[] = [
{
    post_id:1,
    user_name:'James Bond',
    poster:'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=1234&q=80',
    posted_time:new Date(),
    like:0
},
{
    post_id:2,
    user_name:'Tom Cruse',
    poster:'https://images.unsplash.com/photo-1496345875659-11f7dd282d1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
    posted_time:new Date(),
    like:0
},
{
    post_id:3,
    user_name:'Natasa',
    poster:'https://images.unsplash.com/photo-1605467195690-9a1e694f3c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80',
    posted_time:new Date(),
    like:0
}


]