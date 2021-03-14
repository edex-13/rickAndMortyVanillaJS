import router from "../routes";

const resolveRoutes = (route) => {
   if (route.length <= 3) {
      let validRoute = null
      if(route === '/'){
         validRoute = '/'
      }else{
         validRoute = '/:id'
      }
      return validRoute;
   }
   return `/${route}`;
};
export default resolveRoutes;

