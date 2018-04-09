/* eslint-disable */
export default {
    data:()=>({
        routePrefix:[
            '/dashboard',
            '/auth',
            // 'mainRoute'
        ]
    }),
    methods:{
        setUrl(url,prefix_index) {

            url = url.replace(/^\/|\/$/g, '');

            return `${process.env.appBaseUrl}${this.routePrefix[prefix_index] || '' }${url}`;
        }
    }

}