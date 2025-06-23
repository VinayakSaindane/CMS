import * as contentstack from 'contentstack';

const Stack = contentstack.Stack({
    api_key: process.env.NEXT_PUBLIC_CONTENTSTACK_API_KEY,
    delivery_token: process.env.NEXT_PUBLIC_CONTENTSTACK_DELIVERY_TOKEN,
    environment: process.env.NEXT_PUBLIC_CONTENTSTACK_ENVIRONMENT,

});
console.log("API KEY:", process.env.NEXT_PUBLIC_CONTENTSTACK_API_KEY);
console.log("DELIVERY TOKEN:", process.env.NEXT_PUBLIC_CONTENTSTACK_DELIVERY_TOKEN);
console.log("ENVIRONMENT:", process.env.NEXT_PUBLIC_CONTENTSTACK_ENVIRONMENT);


export default Stack;